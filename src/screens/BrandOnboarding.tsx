import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export function BrandOnboarding() {
  const navigate = useNavigate()
  const { profile, updateProfile, loading } = useAuth()
  const [brandName, setBrandName] = useState(profile?.brand_name ?? '')
  const [competitors, setCompetitors] = useState(profile?.competitors ?? '')
  const [industry, setIndustry] = useState(profile?.industry ?? '')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const name = brandName.trim()
    if (!name) {
      setError('Brand name is required')
      return
    }
    setError('')
    const { error: err } = await updateProfile({
      brand_name: name,
      competitors: competitors.trim() || undefined,
      industry: industry.trim() || undefined,
    })
    if (err) {
      setError(err.message)
      return
    }
    navigate('/prompts', { replace: true })
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--content-bg)]">
        <p className="text-gray-500">Loading…</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--content-bg)] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-2">
          <FileText className="h-8 w-8 text-blue-500" />
          <span className="font-display text-xl font-semibold text-gray-900">
            Brand-in-AI Monitor
          </span>
        </div>
        <div className="card">
          <h1 className="font-display text-lg font-semibold text-gray-900">
            Set up your brand
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            We'll use this to track how your brand appears in AI responses.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
                Brand name <span className="text-red-500">*</span>
              </label>
              <input
                id="brandName"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="e.g. Acme Inc"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <input
                id="industry"
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. SaaS, E-commerce"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="competitors" className="block text-sm font-medium text-gray-700">
                Key competitors
              </label>
              <textarea
                id="competitors"
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                placeholder="One per line or comma-separated"
                rows={3}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2">
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
