import type { PromptStatus } from '../types'

const styles: Record<PromptStatus, string> = {
  active: 'bg-emerald-100 text-emerald-800',
  paused: 'bg-gray-100 text-gray-700',
  running: 'bg-amber-100 text-amber-800',
}

interface StatusBadgeProps {
  status: PromptStatus
  showDot?: boolean
}

export function StatusBadge({ status, showDot = true }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
      role="status"
    >
      {showDot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === 'running' ? 'animate-pulse bg-amber-500' : 'bg-current opacity-70'
          }`}
          aria-hidden
        />
      )}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}
