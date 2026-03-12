import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { supabase } from '../lib/supabase'
import type { BrandProfile } from '../types'
import type { Session } from '@supabase/supabase-js'

export interface AuthUser {
  id: string
  email?: string
}

interface AuthContextValue {
  user: AuthUser | null
  session: Session | null
  profile: BrandProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
  updateProfile: (patch: Partial<Pick<BrandProfile, 'brand_name' | 'competitors' | 'industry'>>) => Promise<{ error: Error | null }>
  demoSignIn: () => void
  isDemo: boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

const DEMO_USER_ID = 'demo-user'
const DEMO_PROFILE: BrandProfile = {
  id: 'demo-profile',
  user_id: DEMO_USER_ID,
  brand_name: 'Demo Brand',
  competitors: '',
  industry: '',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<BrandProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [demoUser, setDemoUser] = useState<boolean>(false)

  const user: AuthUser | null = session?.user
    ? { id: session.user.id, email: session.user.email ?? undefined }
    : demoUser
      ? { id: DEMO_USER_ID, email: 'demo@local' }
      : null

  const fetchProfile = useCallback(async (userId: string) => {
    if (!supabase) return null
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()
    return data as BrandProfile | null
  }, [])

  useEffect(() => {
    if (demoUser) {
      setProfile(DEMO_PROFILE)
      setLoading(false)
      return
    }
    if (!supabase) {
      setLoading(false)
      return
    }
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        if (session?.user) {
          const p = await fetchProfile(session.user.id)
          setProfile(p)
        } else {
          setProfile(null)
        }
        setLoading(false)
      }
    )
    const load = async () => {
      const { data: { session: s } } = await supabase.auth.getSession()
      setSession(s)
      if (s?.user) {
        const p = await fetchProfile(s.user.id)
        setProfile(p)
      }
      setLoading(false)
    }
    load()
    return () => subscription.unsubscribe()
  }, [demoUser, fetchProfile])

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!supabase) return { error: new Error('Supabase not configured') }
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      return { error }
    },
    []
  )

  const signUp = useCallback(
    async (email: string, password: string) => {
      if (!supabase) return { error: new Error('Supabase not configured') }
      const { error } = await supabase.auth.signUp({ email, password })
      return { error }
    },
    []
  )

  const signOut = useCallback(async () => {
    setDemoUser(false)
    setProfile(null)
    if (supabase) await supabase.auth.signOut()
  }, [])

  const updateProfile = useCallback(
    async (patch: Partial<Pick<BrandProfile, 'brand_name' | 'competitors' | 'industry'>>) => {
      const uid = user?.id
      if (!uid) return { error: new Error('Not signed in') }
      if (demoUser) {
        setProfile((prev) => (prev ? { ...prev, ...patch, updated_at: new Date().toISOString() } : null))
        return { error: null }
      }
      if (!supabase) return { error: new Error('Supabase not configured') }
      const now = new Date().toISOString()
      const { data: existing } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', uid)
        .maybeSingle()
      const { error } = existing
        ? await supabase.from('profiles').update({ ...patch, updated_at: now }).eq('user_id', uid)
        : await supabase.from('profiles').insert({ user_id: uid, brand_name: '', ...patch, created_at: now, updated_at: now })
      if (!error) {
        const p = await fetchProfile(uid)
        setProfile(p ?? null)
      }
      return { error }
    },
    [user?.id, demoUser, fetchProfile]
  )

  const demoSignIn = useCallback(() => {
    setDemoUser(true)
    setSession(null)
    setProfile(DEMO_PROFILE)
    setLoading(false)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user: user ?? null,
      session,
      profile,
      loading,
      signIn,
      signUp,
      signOut,
      updateProfile,
      demoSignIn,
      isDemo: demoUser,
    }),
    [user, session, profile, loading, signIn, signUp, signOut, updateProfile, demoSignIn, demoUser]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
