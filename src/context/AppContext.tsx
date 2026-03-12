import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { loadState, saveState } from '../storage'
import { MAX_ACTIVE_PROMPTS } from '../constants'
import type { Brief, Persona, Prompt, Run, RunResult, StoredState } from '../types'

interface AppContextValue extends StoredState {
  addPrompt: (title: string) => Prompt
  updatePrompt: (id: string, patch: Partial<Pick<Prompt, 'title' | 'status'>>) => void
  deletePrompt: (id: string) => void
  getBrief: (promptId: string) => Brief | undefined
  setBrief: (promptId: string, body: string) => void
  addPersona: (p: Omit<Persona, 'id' | 'createdAt'>) => Persona
  updatePersona: (id: string, patch: Partial<Pick<Persona, 'role' | 'tone' | 'traits'>>) => void
  deletePersona: (id: string) => void
  startRun: (promptId: string, personaId: string, briefId?: string) => Run
  completeRun: (runId: string, result: RunResult) => void
  failRun: (runId: string) => void
  activePromptCount: number
  runningPromptCount: number
  canStartNewRun: boolean
}

const AppContext = createContext<AppContextValue | null>(null)

function persist(state: StoredState): void {
  saveState(state)
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(loadState)

  const persistState = useCallback((next: StoredState) => {
    setState(next)
    persist(next)
  }, [])

  const addPrompt = useCallback(
    (title: string): Prompt => {
      const id = crypto.randomUUID()
      const activeCount = state.prompts.filter((p) => p.status === 'active').length
      const status = activeCount < MAX_ACTIVE_PROMPTS ? 'active' : 'paused'
      const prompt: Prompt = {
        id,
        title: title.trim(),
        status,
        runCount: 0,
        createdAt: new Date().toISOString(),
      }
      persistState({
        ...state,
        prompts: [...state.prompts, prompt],
      })
      return prompt
    },
    [state, persistState]
  )

  const updatePrompt = useCallback(
    (id: string, patch: Partial<Pick<Prompt, 'title' | 'status'>>) => {
      setState((prev) => {
        let next = { ...prev }
        const idx = next.prompts.findIndex((p) => p.id === id)
        if (idx === -1) return prev
        if (patch.status === 'active') {
          const activeCount = next.prompts.filter((p) => p.status === 'active').length
          if (activeCount >= MAX_ACTIVE_PROMPTS) return prev
        }
        const updated = { ...next.prompts[idx], ...patch }
        if (patch.title !== undefined) updated.title = patch.title.trim()
        next.prompts = [...next.prompts]
        next.prompts[idx] = updated
        persist(next)
        return next
      })
    },
    []
  )

  const deletePrompt = useCallback(
    (id: string) => {
      const next: StoredState = {
        ...state,
        prompts: state.prompts.filter((p) => p.id !== id),
        briefs: state.briefs.filter((b) => b.promptId !== id),
        runs: state.runs.filter((r) => r.promptId !== id),
      }
      persistState(next)
    },
    [state, persistState]
  )

  const getBrief = useCallback(
    (promptId: string): Brief | undefined => {
      return state.briefs.find((b) => b.promptId === promptId)
    },
    [state.briefs]
  )

  const setBrief = useCallback(
    (promptId: string, body: string) => {
      const existing = state.briefs.find((b) => b.promptId === promptId)
      const now = new Date().toISOString()
      const brief: Brief = existing
        ? { ...existing, body, updatedAt: now }
        : { id: crypto.randomUUID(), promptId, body, updatedAt: now }
      const briefs = existing
        ? state.briefs.map((b) => (b.promptId === promptId ? brief : b))
        : [...state.briefs, brief]
      persistState({ ...state, briefs })
    },
    [state, persistState]
  )

  const addPersona = useCallback(
    (p: Omit<Persona, 'id' | 'createdAt'>): Persona => {
      const persona: Persona = {
        ...p,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      }
      persistState({ ...state, personas: [...state.personas, persona] })
      return persona
    },
    [state, persistState]
  )

  const updatePersona = useCallback(
    (id: string, patch: Partial<Pick<Persona, 'role' | 'tone' | 'traits'>>) => {
      const idx = state.personas.findIndex((p) => p.id === id)
      if (idx === -1) return
      const next = { ...state, personas: [...state.personas] }
      next.personas[idx] = { ...next.personas[idx], ...patch }
      persistState(next)
    },
    [state, persistState]
  )

  const deletePersona = useCallback(
    (id: string) => {
      persistState({
        ...state,
        personas: state.personas.filter((p) => p.id !== id),
      })
    },
    [state, persistState]
  )

  const startRun = useCallback(
    (promptId: string, personaId: string, briefId?: string): Run => {
      const run: Run = {
        id: crypto.randomUUID(),
        promptId,
        personaId,
        briefId,
        status: 'running',
        startedAt: new Date().toISOString(),
      }
      const runs = [...state.runs, run]
      const prompts = state.prompts.map((p) =>
        p.id === promptId ? { ...p, status: 'running' as const } : p
      )
      persistState({ ...state, runs, prompts })
      return run
    },
    [state, persistState]
  )

  const completeRun = useCallback(
    (runId: string, result: RunResult) => {
      const now = new Date().toISOString()
      const runs = state.runs.map((r) =>
        r.id === runId ? { ...r, status: 'completed' as const, completedAt: now, result } : r
      )
      const run = runs.find((r) => r.id === runId)
      const prompts = state.prompts.map((p) => {
        if (run && p.id === run.promptId) {
          const stillRunning = runs.some((r) => r.promptId === p.id && r.status === 'running')
          return {
            ...p,
            status: stillRunning ? ('running' as const) : ('active' as const),
            runCount: p.runCount + 1,
          }
        }
        return p
      })
      persistState({ ...state, runs, prompts })
    },
    [state, persistState]
  )

  const failRun = useCallback(
    (runId: string) => {
      const now = new Date().toISOString()
      const runs = state.runs.map((r) =>
        r.id === runId ? { ...r, status: 'failed' as const, completedAt: now } : r
      )
      const run = runs.find((r) => r.id === runId)
      const prompts = state.prompts.map((p) => {
        if (run && p.id === run.promptId) {
          const stillRunning = runs.some((r) => r.promptId === p.id && r.status === 'running')
          return { ...p, status: stillRunning ? ('running' as const) : ('active' as const) }
        }
        return p
      })
      persistState({ ...state, runs, prompts })
    },
    [state, persistState]
  )

  const activePromptCount = useMemo(
    () => state.prompts.filter((p) => p.status === 'active').length,
    [state.prompts]
  )

  const runningPromptCount = useMemo(
    () => state.prompts.filter((p) => p.status === 'running').length,
    [state.prompts]
  )

  const canStartNewRun = useMemo(() => {
    const running = state.runs.filter((r) => r.status === 'running').length
    return running < MAX_ACTIVE_PROMPTS
  }, [state.runs])

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      addPrompt,
      updatePrompt,
      deletePrompt,
      getBrief,
      setBrief,
      addPersona,
      updatePersona,
      deletePersona,
      startRun,
      completeRun,
      failRun,
      activePromptCount,
      runningPromptCount,
      canStartNewRun,
    }),
    [
      state,
      addPrompt,
      updatePrompt,
      deletePrompt,
      getBrief,
      setBrief,
      addPersona,
      updatePersona,
      deletePersona,
      startRun,
      completeRun,
      failRun,
      activePromptCount,
      runningPromptCount,
      canStartNewRun,
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
