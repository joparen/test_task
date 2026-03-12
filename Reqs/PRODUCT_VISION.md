# Product Vision: Brand-in-AI Monitor

## Executive Summary

Brand-in-AI Monitor is a SaaS-style tool for **marketing and SEO specialists** who need to track how their brand is represented in AI-generated responses (ChatGPT, Claude, Gemini, etc.). Users configure prompts, define personas and context briefs, run simulated conversations with AI models, and view analytics dashboards that show brand visibility, sentiment, and share of voice. The product answers: *“When someone asks an AI about our category, does our brand get mentioned—and how?”*

The experience is **clean, data-forward, and professional**: modern SaaS (Linear/Raycast) meets analytics tooling. The audience is non-technical; the UI must be intuitive, with instructive empty states, clear status indicators, and scannable dashboards.

## Problem Statement

Marketing and SEO teams lack visibility into how AI assistants surface their brand. As search and discovery shift toward AI answers, they need a way to:

- Simulate real user queries and personas
- Run those queries consistently across AI providers
- Measure brand mention rate, sentiment, and competitive share of voice
- Iterate on positioning and messaging based on data

Without a dedicated tool, this requires manual, ad-hoc testing and spreadsheets—neither scalable nor comparable over time.

## Target Audience

- **Primary:** Marketing managers, SEO specialists, brand strategists
- **Secondary:** Content and growth teams who care about AI visibility
- **Not:** Developers or technical implementers (UI and copy should assume non-technical users)

**Pain points:** Manual testing of AI outputs, no trend data, no way to compare prompts or personas systematically, difficulty proving ROI of brand-in-AI efforts.

## Goals & Objectives

1. **Visibility:** Give teams a single place to see how their brand appears in AI responses across prompts and models.
2. **Control:** Let users define prompts, personas, and briefs so tests are repeatable and comparable.
3. **Insight:** Surface brand mention rate, sentiment trends, and share of voice in a scannable dashboard.
4. **Simplicity:** Keep the product approachable for marketing/SEO users—no code, minimal configuration.
5. **Demo-ready:** Deliver a polished POC that stakeholders can use to evaluate the concept.

## Success Metrics

- **Adoption:** Number of prompts configured and runs executed per user/team
- **Engagement:** Return visits to the analytics dashboard
- **Clarity:** User feedback that metrics (mention rate, sentiment, SOV) are understandable and actionable
- **Stakeholder buy-in:** Successful demos leading to further investment or rollout

## Differentiation

- **Purpose-built:** Focused on brand-in-AI monitoring, not generic AI testing or chatbot building
- **Persona + brief driven:** Combines prompt, persona, and context brief for realistic simulation
- **Analytics-first:** Dashboard and trends are first-class, not an afterthought
- **Non-technical UX:** Designed for marketing/SEO, not engineers

## Market Opportunity

Growing demand for “brand in AI” and “AI SEO” tooling as LLM usage shifts discovery and research. Teams need to measure and improve how AI systems represent their brand—this product addresses that gap with a focused, repeatable workflow.

## Design & UX Principles

- **Clean, data-forward, professional:** Modern SaaS (Linear, Raycast) meets analytics
- **Dark sidebar + light content** OR full dark mode; avoid purple-on-white gradients
- **Distinctive display font** for headings; clean body font (not Inter/Roboto)
- **Instructive empty states** (e.g. “Add your first prompt to start tracking”)
- **Clear run status** (badge/dot) for prompts; max 10 active prompts in v1
- **Card-based layouts** for prompts and conversations; tooltips on dashboard metrics
- **Snappy interactions:** Smooth transitions, no heavy animations; POC-quality but polished

## Constraints (v1 / POC)

- **Quality:** POC—polished enough to demo, not production-hardened
- **Scope:** Local-only; no auth complexity in UI
- **Limits:** Max 10 active prompts at once; “Run” disabled at limit with helpful tooltip
- **Performance:** Keep interactions snappy; avoid heavy animations
