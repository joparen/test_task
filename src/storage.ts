import type { StoredState } from './types'
import { getStorageKey } from './constants'

const defaultState: StoredState = {
  prompts: [],
  briefs: [],
  personas: [],
  runs: [],
}

export function loadState(userId: string | null): StoredState {
  if (!userId) return defaultState
  try {
    const key = getStorageKey(userId)
    const raw = localStorage.getItem(key)
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

export function saveState(userId: string | null, state: StoredState): void {
  if (!userId) return
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(state))
  } catch {
    // ignore
  }
}
