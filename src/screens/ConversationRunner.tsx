import { useState, useCallback } from 'react'
import { Play, Loader2, CheckCircle, XCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { EmptyState } from '../components/EmptyState'
import { Tooltip } from '../components/Tooltip'
import { MAX_ACTIVE_PROMPTS } from '../constants'

const MOCK_RUN_DELAY_MS = 1500

export function ConversationRunner() {
  const {
    prompts,
    personas,
    runs,
    startRun,
    completeRun,
    failRun,
    getBrief,
    canStartNewRun,
    activePromptCount,
  } = useApp()

  const [promptId, setPromptId] = useState('')
  const [personaId, setPersonaId] = useState('')

  const activePrompts = prompts.filter((p) => p.status === 'active' || p.status === 'running')

  const runMock = useCallback(
    (runId: string) => {
      setTimeout(() => {
        const brandMentioned = Math.random() > 0.5
        completeRun(runId, {
          brandMentioned,
          sentiment: brandMentioned ? 'positive' : 'neutral',
          rawResponse: 'Mock AI response for demo.',
        })
      }, MOCK_RUN_DELAY_MS)
    },
    [completeRun]
  )

  const handleStartRun = () => {
    if (!promptId || !personaId) return
    const brief = getBrief(promptId)
    const run = startRun(promptId, personaId, brief?.id)
    runMock(run.id)
  }

  const atActiveLimit = activePromptCount >= MAX_ACTIVE_PROMPTS
  const canRun =
    promptId &&
    personaId &&
    canStartNewRun &&
    !atActiveLimit &&
    activePrompts.some((p) => p.id === promptId)

  const runButton = (
    <button
      type="button"
      onClick={handleStartRun}
      disabled={!canRun}
      className="btn-primary disabled:pointer-events-none disabled:opacity-50"
    >
      Run conversation
    </button>
  )

  if (prompts.length === 0 || personas.length === 0) {
    return (
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">
          Conversation Runner
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Run AI conversations with prompt + persona + brief. View results and analytics.
        </p>
        <div className="mt-8">
          <EmptyState
            icon={Play}
            title="Set up prompts and personas first"
            description="Add at least one prompt and one persona to run conversations. Then come back here to start runs and see results."
            action={
              <p className="text-sm text-gray-500">
                Go to Prompt Library and Persona Builder to get started.
              </p>
            }
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-gray-900">
        Conversation Runner
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Start a run with a prompt and persona. Max {MAX_ACTIVE_PROMPTS} runs at once.
      </p>

      <div className="mt-6 card max-w-2xl">
        <h2 className="font-display text-sm font-medium text-gray-900">New run</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="min-w-[200px] flex-1">
            <label className="block text-sm font-medium text-gray-700">Prompt</label>
            <select
              value={promptId}
              onChange={(e) => setPromptId(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select prompt</option>
              {activePrompts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-[200px] flex-1">
            <label className="block text-sm font-medium text-gray-700">Persona</label>
            <select
              value={personaId}
              onChange={(e) => setPersonaId(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select persona</option>
              {personas.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.role}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          {(!canStartNewRun || atActiveLimit) && (promptId || personaId) ? (
            <Tooltip content={`Maximum ${MAX_ACTIVE_PROMPTS} active prompts. Pause one to run more.`}>
              <span className="inline-block">{runButton}</span>
            </Tooltip>
          ) : (
            runButton
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-medium text-gray-900">Conversations</h2>
        {runs.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white/60 py-12 text-center text-sm text-gray-500">
            Run conversations to see them here. Each run appears as a card with status (running → completed).
          </div>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...runs].reverse().map((run) => {
              const prompt = prompts.find((p) => p.id === run.promptId)
              const persona = personas.find((p) => p.id === run.personaId)
              return (
                <li key={run.id} className="card">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 truncate">
                        {prompt?.title ?? 'Unknown prompt'}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {persona?.role ?? 'Unknown persona'}
                      </p>
                    </div>
                    <div className="shrink-0 transition-opacity duration-200">
                      {run.status === 'running' && (
                        <Loader2 className="h-5 w-5 animate-spin text-amber-500" aria-label="Running" />
                      )}
                      {run.status === 'completed' && (
                        <CheckCircle className="h-5 w-5 text-emerald-500" aria-label="Completed" />
                      )}
                      {run.status === 'failed' && (
                        <XCircle className="h-5 w-5 text-red-500" aria-label="Failed" />
                      )}
                    </div>
                  </div>
                  {run.status === 'completed' && run.result && (
                    <p className="mt-2 text-xs text-gray-500">
                      Brand mentioned: {run.result.brandMentioned ? 'Yes' : 'No'}
                      {run.result.sentiment && ` · ${run.result.sentiment}`}
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
