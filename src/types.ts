export type PromptStatus = 'active' | 'paused' | 'running'

export interface Prompt {
  id: string
  title: string
  status: PromptStatus
  runCount: number
  briefId?: string
  createdAt: string
}

export interface Brief {
  id: string
  promptId: string
  body: string
  updatedAt: string
}

export interface Persona {
  id: string
  role: string
  tone: string
  traits: string
  createdAt: string
}

export type RunStatus = 'running' | 'completed' | 'failed'

export interface RunResult {
  brandMentioned: boolean
  sentiment?: string
  rawResponse?: string
}

export interface Run {
  id: string
  promptId: string
  personaId: string
  briefId?: string
  status: RunStatus
  startedAt: string
  completedAt?: string
  result?: RunResult
}

export interface StoredState {
  prompts: Prompt[]
  briefs: Brief[]
  personas: Persona[]
  runs: Run[]
}
