# Architecture

## Production concept

The private system is designed as a server-side web application with a dashboard, API layer, persistence, source adapters, LLM-assisted workflows, email integration, and scheduled synchronization.

```mermaid
flowchart TB
  subgraph Experience
    DASH[Dashboard]
  end
  subgraph Application
    API[API routes / services]
    SYNC[Sync orchestrator]
    SCORE[Fit & trust scoring]
    DOCS[Document workflow]
    OUT[Outreach workflow]
  end
  subgraph Integrations
    ATS[Employer / ATS sources]
    WEB[Web discovery]
    AI[LLM service]
    EMAIL[Email OAuth/API]
  end
  subgraph Data
    DB[(PostgreSQL / Supabase)]
    STORE[(Private document storage)]
    AUDIT[(Sync and audit records)]
  end

  DASH --> API
  API --> SYNC
  SYNC --> ATS
  SYNC --> WEB
  SYNC --> SCORE
  SCORE --> DB
  API --> DOCS
  DOCS --> AI
  DOCS --> STORE
  API --> OUT
  OUT --> EMAIL
  API --> AUDIT
```

## Public repository boundary

The public repository contains only:

- deterministic policy examples,
- source-health error-handling patterns,
- a resume-evidence guardrail example,
- fictional sample jobs,
- an offline dashboard demo,
- BA documentation and test scenarios.

It deliberately does **not** include production integration code, authentication, secret configuration, OAuth tokens, candidate source documents, generated resumes, contact research, or the operational database.
