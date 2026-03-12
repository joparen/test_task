import { NavLink } from 'react-router-dom'
import { FileText, User, MessageSquare, BarChart3, ListChecks, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { to: '/prompts', label: 'Prompt Library', icon: ListChecks },
  { to: '/personas', label: 'Persona Builder', icon: User },
  { to: '/conversations', label: 'Conversation Runner', icon: MessageSquare },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
] as const

export function SidebarNav() {
  const { profile, signOut, user, isDemo } = useAuth()

  return (
    <nav
      className="flex w-56 flex-col border-r border-gray-700 bg-[var(--sidebar-bg)] py-6 font-body"
      aria-label="Main navigation"
    >
      <div className="mb-6 px-5">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 shrink-0 text-blue-400" aria-hidden />
          <span className="font-display text-lg font-semibold text-white">
            Brand-in-AI
          </span>
        </div>
        {profile?.brand_name && (
          <p className="mt-2 truncate text-xs text-gray-400" title={profile.brand_name}>
            {profile.brand_name}
          </p>
        )}
      </div>
      <ul className="flex flex-1 flex-col gap-0.5 px-3">
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
      <div className="mt-4 border-t border-gray-700 px-3 pt-4">
        <p className="truncate text-xs text-gray-500" title={user?.email}>
          {isDemo ? 'Demo user' : user?.email}
        </p>
        <button
          type="button"
          onClick={() => signOut()}
          className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-[var(--sidebar-hover)] hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </nav>
  )
}
