# AnterviewPrep.ai

AnterviewPrep.ai is a React + Vite interview-prep experience that simulates a full hiring flow: onboarding, role targeting, CV review, HR interview, technical interview, and final performance reporting.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (via `@tailwindcss/vite`)
- Lucide React icons

## Features

- Multi-step onboarding flow (major, level, role, company)
- Interview pipeline dashboard
- CV review simulation view
- HR interview simulation view
- Technical interview + mock coding environment
- Final performance report view
- Responsive UI with persistent top navigation and conditional side navigation

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your local environment file:

   ```bash
   cp .env.example .env.local
   ```

3. Set your Gemini key in `.env.local`:

   ```env
   GEMINI_API_KEY="your_key_here"
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The app runs on **http://localhost:3000** by default.

## Available Scripts

- `npm run dev` — run Vite dev server on port 3000
- `npm run lint` — run TypeScript type-checking (`tsc --noEmit`)
- `npm run build` — create production build in `dist/`
- `npm run preview` — preview production build locally
- `npm run clean` — remove `dist/`

## Project Structure

```text
src/
  App.tsx
  components/
    onboarding/
      MajorSelection.tsx
      LevelSelection.tsx
      JobProposal.tsx
      CompanySelection.tsx
    Dashboard.tsx
    CVReview.tsx
    HRInterview.tsx
    TechnicalInterview.tsx
    Report.tsx
```

## Notes

- Environment variables are loaded through Vite (`vite.config.ts`).
- The current implementation focuses on the front-end simulation flow and UI states.
