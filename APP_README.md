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
- **Conversation Runner** — Select prompt + persona, run (mock ~1.5s), see conversation cards (running → completed).
- **Analytics Dashboard** — Brand mention rate, share of voice, sentiment, top prompts.

Data: prompts/personas/runs per user in `localStorage` (keyed by user id). Brand profile in Supabase or in-memory for demo.

## Stack

- React 18 + TypeScript, Vite, React Router v6, Tailwind CSS, Lucide React, Supabase (auth + profiles)
- Fonts: Plus Jakarta Sans (display), Source Sans 3 (body)
