# Brand-in-AI Monitor

Monitor how your brand appears in AI-generated responses. Login, complete brand onboarding, then manage prompts, personas, conversation runs, and analytics.

## Run locally

```bash
npm install
cp .env.example .env
# Edit .env with your Supabase URL and anon key (or use "Continue as demo user" in the app)
npm run dev
```

Open http://localhost:5173 → sign in or use **Continue as demo user**.

## Supabase setup (for real login)

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run the migration in `supabase/migrations/001_profiles.sql` to create the `profiles` table.
3. In **Project Settings → API**, copy **Project URL** and **anon public** key into `.env`:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`

Without Supabase you can still use **Continue as demo user** (data in localStorage only).

**Demo flow:** Demo user gets a predefined brand **Acme CRM** (industry: SaaS / CRM, competitors: Salesforce, HubSpot, Zoho) and predefined prompts + personas so you can run conversations immediately.

## Build

```bash
npm run build
```

Output in `dist/`.

## Features

- **Login / Sign up** — Email + password via Supabase Auth, or demo user (no backend).
- **Brand onboarding** — After first login: set brand name, industry, competitors. Stored in Supabase `profiles` (or in-memory for demo).
- **Prompt Library** — Add up to 10 active prompts; card list with status and run count.
- **Brief Editor** — Per-prompt context brief. Open via prompt card → brief icon.
- **Persona Builder** — Create personas (role, tone, traits) for runs.
- **Conversation Runner** — Select prompt + persona, run with **real OpenAI** (or mock if no API key). Response is analyzed for **brand mention** (your brand name in the reply) and **sentiment** (positive/neutral/negative). Results feed the Analytics dashboard.
- **Analytics Dashboard** — Brand mention rate, share of voice, sentiment, top prompts.

Data: prompts/personas/runs per user in `localStorage` (keyed by user id). Brand profile in Supabase or in-memory for demo.

**Real AI (optional):** Set `VITE_OPENAI_API_KEY` in `.env` to use OpenAI for conversation runs. The app detects whether your brand name appears in the AI response and infers sentiment; analytics use this data. Without the key, runs use built-in mock responses (brand mention and sentiment still computed for demo).

## Stack

- React 18 + TypeScript, Vite, React Router v6, Tailwind CSS, Lucide React, Supabase (auth + profiles)
- Fonts: Plus Jakarta Sans (display), Source Sans 3 (body)
