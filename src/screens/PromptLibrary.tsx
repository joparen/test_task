import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Pencil, Trash2, FileText } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { EmptyState } from '../components/EmptyState'
import { StatusBadge } from '../components/StatusBadge'
import { MAX_ACTIVE_PROMPTS } from '../constants'
import type { Prompt } from '../types'

export function PromptLibrary() {
  const { prompts, addPrompt, updatePrompt, deletePrompt, activePromptCount } = useApp()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [error, setError] = useState('')

  const handleAdd = () => {
    const t = newTitle.trim()
    if (!t) {
      setError('Title is required')
      return
    }
    setError('')
    addPrompt(t)
    setNewTitle('')
    setShowAdd(false)
  }

  const handleEditStart = (p: Prompt) => {
    setEditingId(p.id)
    setEditTitle(p.title)
  }

  const handleEditSave = (id: string) => {
    const t = editTitle.trim()
    if (!t) {
      setError('Title is required')
      return
    }
    setError('')
    updatePrompt(id, { title: t })
    setEditingId(null)
  }

  const handleToggleStatus = (id: string, current: Prompt['status']) => {
    if (current === 'active') {
      updatePrompt(id, { status: 'paused' })
    } else if (current === 'paused' && activePromptCount < MAX_ACTIVE_PROMPTS) {
      updatePrompt(id, { status: 'active' })
    }
  }

  const atActiveLimit = activePromptCount >= MAX_ACTIVE_PROMPTS

  if (prompts.length === 0 && !showAdd) {
    return (
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">
          Prompt Library
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage prompts used to test how your brand appears in AI responses.
        </p>
        <div className="mt-8">
          <EmptyState
            icon={FileText}
            title="Add your first prompt to start tracking"
            description="Create a prompt that simulates a user query. You can run it with different personas to see how AI models mention your brand."
            action={
              <button
                type="button"
                onClick={() => setShowAdd(true)}
                className="btn-primary"
              >
                <Plus className="h-4 w-4" /> Add prompt
              </button>
            }
          />
        </div>
        {showAdd && (
          <div className="mt-6 card max-w-md">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Best CRM for small business"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              autoFocus
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            <div className="mt-3 flex gap-2">
              <button type="button" onClick={handleAdd} className="btn-primary">
                Save
              </button>
              <button
                type="button"
                onClick={() => { setShowAdd(false); setNewTitle(''); setError(''); }}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-gray-900">
            Prompt Library
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage prompts. Max {MAX_ACTIVE_PROMPTS} active at once.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAdd(true)}
          className="btn-primary"
        >
          <Plus className="h-4 w-4" /> Add prompt
        </button>
      </div>

      {showAdd && (
        <div className="mt-6 card max-w-md">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="e.g. Best CRM for small business"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoFocus
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={handleAdd} className="btn-primary">
              Save
            </button>
            <button
              type="button"
              onClick={() => { setShowAdd(false); setNewTitle(''); setError(''); }}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((p) => (
          <li key={p.id} className="card">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                {editingId === p.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleEditSave(p.id)
                      if (e.key === 'Escape') setEditingId(null)
                    }}
                  />
                ) : (
                  <h3 className="font-display font-medium text-gray-900 truncate">
                    {p.title}
                  </h3>
                )}
              </div>
              <div className="flex shrink-0 gap-1">
                {editingId === p.id ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleEditSave(p.id)}
                      className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      aria-label="Save"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      aria-label="Cancel"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to={`/prompts/${p.id}/brief`}
                      className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      aria-label="Edit brief"
                    >
                      <FileText className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleEditStart(p)}
                      className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      aria-label="Edit title"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deletePrompt(p.id)}
                      className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                      aria-label="Delete prompt"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusBadge status={p.status} />
              <button
                type="button"
                onClick={() => handleToggleStatus(p.id, p.status)}
                disabled={p.status === 'running' || (p.status === 'paused' && atActiveLimit)}
                title={
                  p.status === 'paused' && atActiveLimit
                    ? `Maximum ${MAX_ACTIVE_PROMPTS} active prompts. Pause one to activate more.`
                    : undefined
                }
                className="text-xs text-blue-600 hover:text-blue-800 disabled:cursor-not-allowed disabled:text-gray-400"
              >
                {p.status === 'active' ? 'Pause' : 'Activate'}
              </button>
              <span className="text-xs text-gray-500">{p.runCount} runs</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
