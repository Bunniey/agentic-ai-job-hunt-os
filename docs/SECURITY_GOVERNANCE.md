# Security & Governance

## Governance principles

### 1. Least privilege

Server-side credentials should remain on the server and never be exposed to the browser or committed to source control. Public repositories must not contain service-role keys, OAuth client secrets, refresh tokens, encryption material, or deployment passwords.

### 2. Human approval for high-impact actions

The system can recommend, prioritize, draft, and prepare. First outreach, LinkedIn actions, and final applications remain under user control.

### 3. Factual integrity

AI-assisted resume tailoring is constrained by an evidence model:

- **EXPLICIT** — directly present in the authorized source material.
- **SUPPORTED_INFERENCE** — defensible from the authorized material without inventing a fact.
- **UNSUPPORTED** — must not enter the submitted resume; it becomes a gap.

### 4. Observable failures

Provider errors should not be converted into apparently successful empty results. A complete discovery outage must produce an explicit failure; partial failures may proceed but should be visible in logs/status.

### 5. Data minimization

Public/demo data is fictional. Operational datasets such as contact research, application history, resume source files, and email content remain private.
