import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { PromptLibrary } from './screens/PromptLibrary'
import { BriefEditor } from './screens/BriefEditor'
import { PersonaBuilder } from './screens/PersonaBuilder'
import { ConversationRunner } from './screens/ConversationRunner'
import { AnalyticsDashboard } from './screens/AnalyticsDashboard'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/prompts" replace />} />
        <Route path="/prompts" element={<PromptLibrary />} />
        <Route path="/prompts/:id/brief" element={<BriefEditor />} />
        <Route path="/personas" element={<PersonaBuilder />} />
        <Route path="/conversations" element={<ConversationRunner />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </Layout>
  )
}
