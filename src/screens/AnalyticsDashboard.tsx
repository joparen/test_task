import { useMemo } from 'react'
import { BarChart3 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { EmptyState } from '../components/EmptyState'
import { Tooltip } from '../components/Tooltip'

export function AnalyticsDashboard() {
  const { runs, prompts } = useApp()

  const completedRuns = useMemo(
    () => runs.filter((r) => r.status === 'completed' && r.result),
    [runs]
  )

  const brandMentionRate = useMemo(() => {
    if (completedRuns.length === 0) return null
    const mentioned = completedRuns.filter((r) => r.result?.brandMentioned).length
    return Math.round((mentioned / completedRuns.length) * 100)
  }, [completedRuns])

  const sentimentCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    completedRuns.forEach((r) => {
      const s = r.result?.sentiment ?? 'unknown'
      counts[s] = (counts[s] ?? 0) + 1
    })
    return counts
  }, [completedRuns])

  const topPromptsWithBrand = useMemo(() => {
    const byPrompt: Record<string, number> = {}
    completedRuns
      .filter((r) => r.result?.brandMentioned)
      .forEach((r) => {
        byPrompt[r.promptId] = (byPrompt[r.promptId] ?? 0) + 1
      })
    return Object.entries(byPrompt)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([promptId, count]) => ({
        prompt: prompts.find((p) => p.id === promptId)?.title ?? 'Unknown',
        count,
      }))
  }, [completedRuns, prompts])

  const topPromptsWithoutBrand = useMemo(() => {
    const byPrompt: Record<string, number> = {}
    completedRuns
      .filter((r) => !r.result?.brandMentioned)
      .forEach((r) => {
        byPrompt[r.promptId] = (byPrompt[r.promptId] ?? 0) + 1
      })
    return Object.entries(byPrompt)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([promptId, count]) => ({
        prompt: prompts.find((p) => p.id === promptId)?.title ?? 'Unknown',
        count,
      }))
  }, [completedRuns, prompts])

  const shareOfVoice = useMemo(() => {
    if (completedRuns.length === 0) return null
    const mentioned = completedRuns.filter((r) => r.result?.brandMentioned).length
    return Math.round((mentioned / completedRuns.length) * 100)
  }, [completedRuns])

  if (completedRuns.length === 0) {
    return (
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">
          Analytics Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Brand visibility, sentiment, and share of voice from your conversation runs.
        </p>
        <div className="mt-8">
          <EmptyState
            icon={BarChart3}
            title="Run conversations to see analytics"
            description="Complete at least one conversation run from the Conversation Runner. Metrics will appear here: brand mention rate, sentiment trend, and top prompts where your brand appears or doesn't."
            action={
              <a href="/conversations" className="btn-primary inline-flex">
                Go to Conversation Runner
              </a>
            }
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-gray-900">
        Analytics Dashboard
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Brand visibility and performance at a glance.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <Tooltip content="Percentage of completed runs where your brand was mentioned by the AI.">
            <h2 className="font-display text-sm font-medium text-gray-900 flex items-center gap-2">
              Brand mention rate
              <span className="text-gray-400 font-normal">(primary metric)</span>
            </h2>
          </Tooltip>
          <p className="mt-2 text-4xl font-display font-bold text-gray-900">
            {brandMentionRate ?? 0}%
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {completedRuns.length} runs completed
          </p>
        </div>

        <div className="card">
          <Tooltip content="Share of voice vs. competitors in AI responses (mock for POC).">
            <h2 className="font-display text-sm font-medium text-gray-900">
              Share of voice
            </h2>
          </Tooltip>
          <p className="mt-2 text-4xl font-display font-bold text-gray-900">
            {shareOfVoice ?? 0}%
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Based on brand mention in runs
          </p>
        </div>
      </div>

      <div className="mt-8 card">
        <Tooltip content="Distribution of sentiment (positive, neutral, negative) across runs where brand was analyzed.">
          <h2 className="font-display text-sm font-medium text-gray-900">
            Sentiment trend
          </h2>
        </Tooltip>
        <div className="mt-4 flex flex-wrap gap-4">
          {Object.entries(sentimentCounts).map(([sentiment, count]) => (
            <div key={sentiment} className="rounded-lg bg-gray-50 px-4 py-2">
              <span className="text-sm font-medium text-gray-700 capitalize">{sentiment}</span>
              <span className="ml-2 text-sm text-gray-500">{count} runs</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <Tooltip content="Prompts where your brand appeared most often in AI responses.">
            <h2 className="font-display text-sm font-medium text-gray-900">
              Top prompts where brand appears
            </h2>
          </Tooltip>
          {topPromptsWithBrand.length === 0 ? (
            <p className="mt-4 text-sm text-gray-500">No data yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {topPromptsWithBrand.map(({ prompt, count }) => (
                <li key={prompt} className="flex justify-between text-sm">
                  <span className="truncate text-gray-700">{prompt}</span>
                  <span className="shrink-0 font-medium text-gray-900">{count}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card">
          <Tooltip content="Prompts where your brand did not appear — opportunities to improve visibility.">
            <h2 className="font-display text-sm font-medium text-gray-900">
              Top prompts where brand doesn't appear
            </h2>
          </Tooltip>
          {topPromptsWithoutBrand.length === 0 ? (
            <p className="mt-4 text-sm text-gray-500">No data yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {topPromptsWithoutBrand.map(({ prompt, count }) => (
                <li key={prompt} className="flex justify-between text-sm">
                  <span className="truncate text-gray-700">{prompt}</span>
                  <span className="shrink-0 font-medium text-gray-900">{count}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
