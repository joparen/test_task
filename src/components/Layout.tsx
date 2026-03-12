import { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarNav } from './SidebarNav'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-[var(--content-bg)]">
      <SidebarNav />
      <main className="flex-1 overflow-auto p-8 transition-[padding] duration-200">
        {children ?? <Outlet />}
      </main>
    </div>
  )
}
