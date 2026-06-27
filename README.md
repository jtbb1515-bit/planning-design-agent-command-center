# 規劃設計部 AI Agent Command Center

Next.js + TypeScript prototype for an architecture office AI Agent management platform.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

- `app/` - Next.js App Router entry, layout, page, global styles
- `components/` - Project form, master agent chat, agent status, deliverables
- `lib/mockData.ts` - Mock project, messages, agents, deliverables
- `types/agent.ts` - Shared TypeScript contracts for future API integration
