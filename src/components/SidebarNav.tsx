import { NavLink } from 'react-router-dom'
import { FileText, User, MessageSquare, BarChart3, ListChecks } from 'lucide-react'

const navItems = [
  { to: '/prompts', label: 'Prompt Library', icon: ListChecks },
  { to: '/personas', label: 'Persona Builder', icon: User },
  { to: '/conversations', label: 'Conversation Runner', icon: MessageSquare },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
] as const

export function SidebarNav() {
  return (
    <nav
      className="flex w-56 flex-col border-r border-gray-700 bg-[var(--sidebar-bg)] py-6 font-body"
      aria-label="Main navigation"
    >
      <div className="mb-6 px-5">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-blue-400" aria-hidden />
          <span className="font-display text-lg font-semibold text-white">
            Brand-in-AI
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-0.5 px-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[var(--sidebar-bg)] ${
                  isActive
                    ? 'bg-[var(--sidebar-active)] text-white'
                    : 'text-gray-300 hover:bg-[var(--sidebar-hover)] hover:text-white'
                }`
              }
              end={to !== '/prompts'}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
