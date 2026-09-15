# Business Rules

## Opportunity eligibility

| Rule ID | Rule |
| --- | --- |
| BR-01 | A vacancy must have a verifiable posting date. |
| BR-02 | A vacancy must be no older than 36 hours at evaluation time. |
| BR-03 | Contract roles are excluded. |
| BR-04 | Minimum trust score is 85. |
| BR-05 | Fit score ≥85 and trust score ≥85 makes the vacancy eligible for document preparation. |
| BR-06 | Fit score 75–84 and trust score ≥85 sends the vacancy to review. |
| BR-07 | Fit score <75 is rejected. |
| BR-08 | Onsite opportunities are preferred. |
| BR-09 | Hybrid/remote opportunities require a configurable lucrative-compensation threshold in the current portfolio policy. |
| BR-10 | Salary may be undisclosed; published and estimated compensation must not be presented as the same thing. |

## Source and trust rules

| Rule ID | Rule |
| --- | --- |
| BR-11 | Aggregators may be used for discovery, but an official employer/ATS vacancy is preferred as the canonical source when verifiable. |
| BR-12 | Company identity and vacancy source should be consistent. |
| BR-13 | Payment requests are a hard trust concern. |
| BR-14 | WhatsApp/Telegram-only hiring flows are a hard trust concern. |
| BR-15 | Third-party agency listings without clear ownership/mandate should not pass high-trust screening. |
| BR-16 | Complete failure of all configured discovery sources must be shown as a sync failure, not as a successful zero-result run. |

## Document rules

| Rule ID | Rule |
| --- | --- |
| BR-17 | Tailored resume generation requires company, role, and a substantive full job description. |
| BR-18 | Resume claims are classified as explicit, supported inference, or unsupported. |
| BR-19 | Unsupported claims must not enter the submitted resume. |
| BR-20 | Unsupported but useful requirements should be shown as a gap, not fabricated. |

## Human approval rules

| Rule ID | Rule |
| --- | --- |
| BR-21 | First cold/referral/follow-up outreach requires user approval before send. |
| BR-22 | LinkedIn actions remain manual/user-approved. |
| BR-23 | AI may draft and prepare, but final submission remains controlled by the user. |
