import type { StoredState } from '../types'
import { DEMO_USER_ID } from '../constants'

const now = () => new Date().toISOString()

export function getDemoSeedState(): StoredState {
  const prompt1Id = 'demo-prompt-1'
  const prompt2Id = 'demo-prompt-2'
  const prompt3Id = 'demo-prompt-3'
  const persona1Id = 'demo-persona-1'
  const persona2Id = 'demo-persona-2'

  return {
    prompts: [
      {
        id: prompt1Id,
        title: 'Best CRM for small business',
        status: 'active',
        runCount: 0,
        createdAt: now(),
      },
      {
        id: prompt2Id,
        title: 'What CRM integrates with Gmail and Slack?',
        status: 'active',
        runCount: 0,
        createdAt: now(),
      },
      {
        id: prompt3Id,
        title: 'Compare affordable CRM options for a 10-person team',
        status: 'paused',
        runCount: 0,
        createdAt: now(),
      },
    ],
    briefs: [
      {
        id: 'demo-brief-1',
        promptId: prompt1Id,
        body: 'User is a small business owner researching CRM tools. They need something easy to set up without a big IT team.',
        updatedAt: now(),
      },
      {
        id: 'demo-brief-2',
        promptId: prompt2Id,
        body: 'User cares about integrations with daily tools (Gmail, Slack). They want to avoid switching between many apps.',
        updatedAt: now(),
      },
    ],
    personas: [
      {
        id: persona1Id,
        role: 'SMB owner',
        tone: 'Practical, budget-conscious',
        traits: 'Compares value and ease of use; prefers all-in-one solutions.',
        createdAt: now(),
      },
      {
        id: persona2Id,
        role: 'Enterprise buyer',
        tone: 'Formal, detail-oriented',
        traits: 'Evaluates scalability, security, and vendor support.',
        createdAt: now(),
      },
    ],
    runs: [],
  }
}
