import type { StoredState } from './types'
import { getStorageKey, DEMO_USER_ID } from './constants'
import { getDemoSeedState } from './lib/demoSeed'

const defaultState: StoredState = {
  prompts: [],
  briefs: [],
  personas: [],
  runs: [],
}

function isEmpty(state: StoredState): boolean {
  return state.prompts.length === 0 && state.personas.length === 0
}

export function loadState(userId: string | null): StoredState {
  if (!userId) return defaultState
  try {
    const key = getStorageKey(userId)
    const raw = localStorage.getItem(key)
    let state: StoredState = defaultState
    if (raw) {
      const parsed = JSON.parse(raw) as StoredState
      state = {
        prompts: Array.isArray(parsed.prompts) ? parsed.prompts : defaultState.prompts,
        briefs: Array.isArray(parsed.briefs) ? parsed.briefs : defaultState.briefs,
        personas: Array.isArray(parsed.personas) ? parsed.personas : defaultState.personas,
        runs: Array.isArray(parsed.runs) ? parsed.runs : defaultState.runs,
      }
    }
    if (userId === DEMO_USER_ID && isEmpty(state)) {
      return getDemoSeedState()
    }
    return state
  } catch {
    return defaultState
  }
}

export function saveState(userId: string | null, state: StoredState): void {
  if (!userId) return
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(state))
  } catch {
    // ignore
  }
}
