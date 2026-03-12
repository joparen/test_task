/**
 * Run a conversation with OpenAI and analyze the response for brand visibility.
 * Falls back to mock when VITE_OPENAI_API_KEY is not set.
 */

import type { Persona } from '../types'

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export interface RunConversationInput {
  promptTitle: string
  briefBody: string
  persona: Persona
  brandName: string
}

export interface RunConversationResult {
  rawResponse: string
  brandMentioned: boolean
  sentiment: 'positive' | 'neutral' | 'negative'
}

function buildUserMessage(input: RunConversationInput): string {
  const { promptTitle, briefBody, persona } = input
  const context = briefBody.trim() ? `Context: ${briefBody.trim()}.` : ''
  return `You are a helpful AI assistant. ${context} A user with this profile is asking: "${promptTitle}". User profile: Role: ${persona.role}. Tone: ${persona.tone || 'neutral'}. Traits: ${persona.traits || 'none'}. Provide a helpful, natural response to the user's question. Do not mention that you are an AI or that this is a simulation.`
}

function detectBrandInResponse(response: string, brandName: string): boolean {
  if (!brandName.trim()) return false
  const normalized = response.toLowerCase()
  const brand = brandName.trim().toLowerCase()
  return normalized.includes(brand)
}

function inferSentimentSimple(text: string): 'positive' | 'neutral' | 'negative' {
  const lower = text.toLowerCase()
  const positive = /\b(great|excellent|best|recommend|love|good|awesome|perfect|top|leading)\b/
  const negative = /\b(bad|poor|avoid|worst|terrible|disappointing|weak|limited)\b/
  if (positive.test(lower) && !negative.test(lower)) return 'positive'
  if (negative.test(lower)) return 'negative'
  return 'neutral'
}

async function callOpenAI(userMessage: string): Promise<string> {
  const res = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant. Answer concisely and naturally. When discussing products or brands, you may mention real or example brands when relevant.',
        },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 500,
    }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || res.statusText || 'OpenAI request failed')
  }
  const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> }
  const content = data?.choices?.[0]?.message?.content?.trim() ?? ''
  return content
}

export async function runConversationWithAI(
  input: RunConversationInput
): Promise<RunConversationResult> {
  const { brandName } = input

  if (!API_KEY?.trim()) {
    // Mock: simulate delay and random result for demo without API key
    await new Promise((r) => setTimeout(r, 1500))
    const mockResponses = [
      `${brandName || 'Acme'} is a solid choice for small teams. It offers good value and integrates well with common tools.`,
      'Popular options include Salesforce, HubSpot, and Zoho. The best fit depends on your budget and team size.',
    ]
    const rawResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
    const brandMentioned = detectBrandInResponse(rawResponse, brandName || '')
    return {
      rawResponse,
      brandMentioned,
      sentiment: inferSentimentSimple(rawResponse),
    }
  }

  const userMessage = buildUserMessage(input)
  const rawResponse = await callOpenAI(userMessage)
  const brandMentioned = detectBrandInResponse(rawResponse, brandName)
  const sentiment = inferSentimentSimple(rawResponse)

  return {
    rawResponse,
    brandMentioned,
    sentiment,
  }
}

export function isAIConfigured(): boolean {
  return Boolean(API_KEY?.trim())
}
