# Brand-in-AI Monitor (POC)

Local-only POC for monitoring how your brand appears in AI-generated responses. Built from Reqs/ and Architecture/ in this repo.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output in `dist/`.

## Features

- **Prompt Library** — Add up to 10 active prompts; card list with status (active/paused/running) and run count.
- **Brief Editor** — Per-prompt context brief (what the prompt simulates). Open via prompt card → brief icon.
- **Persona Builder** — Create personas (role, tone, traits) for conversation runs.
- **Conversation Runner** — Select prompt + persona, run (mock ~1.5s), see cards with spinner → checkmark.
- **Analytics Dashboard** — Brand mention rate, share of voice, sentiment, top prompts where brand appears/doesn’t.

Data is stored in `localStorage`; no backend or auth.

## Stack

- React 18 + TypeScript, Vite, React Router v6, Tailwind CSS, Lucide React
- Fonts: Plus Jakarta Sans (display), Source Sans 3 (body)
