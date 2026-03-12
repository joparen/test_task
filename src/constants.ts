export const MAX_ACTIVE_PROMPTS = 10
export const STORAGE_KEY = 'brand-in-ai-monitor'

export function getStorageKey(userId: string | null): string {
  return userId ? `${STORAGE_KEY}-${userId}` : STORAGE_KEY
}
