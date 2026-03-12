import { useState } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { EmptyState } from '../components/EmptyState'
import type { Persona } from '../types'

export function PersonaBuilder() {
  const { personas, addPersona, updatePersona, deletePersona } = useApp()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ role: '', tone: '', traits: '' })
  const [showAdd, setShowAdd] = useState(false)

  const handleAdd = () => {
    const role = form.role.trim()
    if (!role) return
    addPersona({ role, tone: form.tone.trim(), traits: form.traits.trim() })
    setForm({ role: '', tone: '', traits: '' })
    setShowAdd(false)
  }

  const handleEditStart = (p: Persona) => {
    setEditingId(p.id)
    setForm({ role: p.role, tone: p.tone, traits: p.traits })
  }

  const handleEditSave = () => {
    if (!editingId) return
    const role = form.role.trim()
    if (!role) return
    updatePersona(editingId, { role, tone: form.tone.trim(), traits: form.traits.trim() })
    setEditingId(null)
    setForm({ role: '', tone: '', traits: '' })
  }

  if (personas.length === 0 && !showAdd) {
    return (
      <div>
        <h1 className="font-display text-2xl font-semibold text-gray-900">
          Persona Builder
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Define user personas that frame how conversations are run.
        </p>
        <div className="mt-8">
          <EmptyState
            icon={Plus}
            title="Create your first persona"
            description="Personas define the role, tone, and behavior of the simulated user. Use them when running conversations to get consistent, comparable results."
            action={
              <button
                type="button"
                onClick={() => setShowAdd(true)}
                className="btn-primary"
              >
                <Plus className="h-4 w-4" /> Create persona
              </button>
            }
          />
        </div>
        {showAdd && (
          <PersonaForm
            form={form}
            setForm={setForm}
            onSave={handleAdd}
            onCancel={() => setShowAdd(false)}
          />
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-gray-900">
            Persona Builder
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Define personas for conversation runs.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAdd(true)}
          className="btn-primary"
        >
          <Plus className="h-4 w-4" /> Create persona
        </button>
      </div>

      {showAdd && (
        <PersonaForm
          form={form}
          setForm={setForm}
          onSave={handleAdd}
          onCancel={() => { setShowAdd(false); setForm({ role: '', tone: '', traits: '' }); }}
        />
      )}

      {editingId && (
        <div className="mt-6 card max-w-xl">
          <h3 className="font-display font-medium text-gray-900">Edit persona</h3>
          <PersonaFormFields form={form} setForm={setForm} />
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={handleEditSave} className="btn-primary">
              Save
            </button>
            <button
              type="button"
              onClick={() => { setEditingId(null); setForm({ role: '', tone: '', traits: '' }); }}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personas.map((p) => (
          <li key={p.id} className="card">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-medium text-gray-900">{p.role}</h3>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  onClick={() => handleEditStart(p)}
                  className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => deletePersona(p.id)}
                  className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-red-600"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            {p.tone && (
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Tone:</span> {p.tone}
              </p>
            )}
            {p.traits && (
              <p className="mt-1 text-sm text-gray-600">
                <span className="font-medium">Traits:</span> {p.traits}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PersonaFormFields({
  form,
  setForm,
}: {
  form: { role: string; tone: string; traits: string }
  setForm: React.Dispatch<React.SetStateAction<{ role: string; tone: string; traits: string }>>
}) {
  return (
    <div className="mt-3 space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          value={form.role}
          onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
          placeholder="e.g. Marketing manager"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tone</label>
        <input
          type="text"
          value={form.tone}
          onChange={(e) => setForm((f) => ({ ...f, tone: e.target.value }))}
          placeholder="e.g. Professional, concise"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Behavior traits</label>
        <input
          type="text"
          value={form.traits}
          onChange={(e) => setForm((f) => ({ ...f, traits: e.target.value }))}
          placeholder="e.g. Compares features, cares about price"
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  )
}

function PersonaForm({
  form,
  setForm,
  onSave,
  onCancel,
}: {
  form: { role: string; tone: string; traits: string }
  setForm: React.Dispatch<React.SetStateAction<{ role: string; tone: string; traits: string }>>
  onSave: () => void
  onCancel: () => void
}) {
  return (
    <div className="mt-6 card max-w-xl">
      <h3 className="font-display font-medium text-gray-900">New persona</h3>
      <PersonaFormFields form={form} setForm={setForm} />
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={onSave} className="btn-primary">
          Save
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
      </div>
    </div>
  )
}
