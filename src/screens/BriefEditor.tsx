import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useApp } from '../context/AppContext'

export function BriefEditor() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { prompts, getBrief, setBrief } = useApp()
  const [body, setBody] = useState('')

  const prompt = prompts.find((p) => p.id === id)

  useEffect(() => {
    if (id) {
      const brief = getBrief(id)
      setBody(brief?.body ?? '')
    }
  }, [id, getBrief])

  const handleSave = () => {
    if (id) {
      setBrief(id, body)
      navigate('/prompts')
    }
  }

  if (!id || !prompt) {
    return (
      <div>
        <p className="text-gray-500">Prompt not found.</p>
        <button
          type="button"
          onClick={() => navigate('/prompts')}
          className="btn-secondary mt-4"
        >
          Back to Prompt Library
        </button>
      </div>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate('/prompts')}
        className="mb-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Prompt Library
      </button>
      <h1 className="font-display text-2xl font-semibold text-gray-900">
        Context brief: {prompt.title}
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Describe what this prompt simulates (e.g. “User researching CRM tools for a 50-person team”).
      </p>
      <div className="mt-6">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What does this prompt simulate?"
          rows={6}
          className="w-full max-w-2xl rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="mt-4 flex gap-2">
          <button type="button" onClick={handleSave} className="btn-primary">
            Save brief
          </button>
          <button
            type="button"
            onClick={() => navigate('/prompts')}
            className="btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
