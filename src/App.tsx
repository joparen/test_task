import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Login } from './screens/Login'
import { Signup } from './screens/Signup'
import { BrandOnboarding } from './screens/BrandOnboarding'
import { PromptLibrary } from './screens/PromptLibrary'
import { BriefEditor } from './screens/BriefEditor'
import { PersonaBuilder } from './screens/PersonaBuilder'
import { ConversationRunner } from './screens/ConversationRunner'
import { AnalyticsDashboard } from './screens/AnalyticsDashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/onboarding" element={
        <ProtectedRoute>
          <BrandOnboarding />
        </ProtectedRoute>
      } />
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/prompts" replace />} />
        <Route path="prompts" element={<PromptLibrary />} />
        <Route path="prompts/:id/brief" element={<BriefEditor />} />
        <Route path="personas" element={<PersonaBuilder />} />
        <Route path="conversations" element={<ConversationRunner />} />
        <Route path="analytics" element={<AnalyticsDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
