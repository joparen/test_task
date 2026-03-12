import type { StoredState } from './types'
import { STORAGE_KEY } from './constants'

const defaultState: StoredState = {
  prompts: [],
  briefs: [],
  personas: [],
  runs: [],
}

export function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw) as StoredState
    return {
      prompts: Array.isArray(parsed.prompts) ? parsed.prompts : defaultState.prompts,
      briefs: Array.isArray(parsed.briefs) ? parsed.briefs : defaultState.briefs,
      personas: Array.isArray(parsed.personas) ? parsed.personas : defaultState.personas,
      runs: Array.isArray(parsed.runs) ? parsed.runs : defaultState.runs,
    }
  } catch {
    return defaultState
  }
}

export function saveState(state: StoredState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}
