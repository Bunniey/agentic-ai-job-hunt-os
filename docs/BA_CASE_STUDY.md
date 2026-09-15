# Business Analyst Case Study

## 1. Problem statement

The candidate job-search process contained multiple handoffs: role discovery, legitimacy checks, fit assessment, resume tailoring, contact research, outreach, application submission, and follow-up tracking. Performing these manually created delays, inconsistent decisions, and a risk of spending time on low-quality or unverified roles.

## 2. Objective

Design a controlled operating system that reduces repetitive work while preserving human approval for reputation-sensitive actions and preserving factual integrity in tailored resumes.

## 3. Stakeholders

| Stakeholder | Need |
| --- | --- |
| Candidate / system owner | Prioritized, trustworthy opportunities and a manageable daily queue |
| Recruiter / hiring team | Accurate candidate information and professional outreach |
| Platform/API providers | Policy-compliant use of integrations and rate/usage limits |
| Future maintainer | Observable workflows, testable rules, and clear failure states |

## 4. Key requirements

1. Discover relevant vacancies from multiple sources and prefer official employer/ATS postings when available.
2. Reject roles with insufficient trust or unverifiable posting freshness.
3. Score fit and trust separately so an attractive but suspicious vacancy cannot pass.
4. Auto-prepare documents only for high-confidence opportunities.
5. Keep first outreach, LinkedIn actions, and final application submission human-approved.
6. Never invent resume facts; unsupported claims must be surfaced as gaps.
7. Track sync outcomes and surface provider failures instead of treating failures as a valid zero-result scan.
8. Limit daily pursuit volume so the queue remains actionable.

## 5. BA techniques demonstrated

- Problem decomposition
- Business-rule modelling
- Decision-table design
- Process mapping
- Requirements traceability
- Exception-path analysis
- Data-model design
- Acceptance criteria and scenario testing
- Privacy and control design for AI-assisted workflows

## 6. Outcome

The resulting design turns a broad goal—“automate my job hunt”—into observable stages with explicit entry criteria, hard reject conditions, scoring thresholds, and human approvals. The public repository demonstrates those design decisions without exposing the private operational system.
