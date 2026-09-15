# Requirements Traceability Matrix

| Requirement | Design response | Public implementation / evidence | Verification |
| --- | --- | --- | --- |
| R-01 Prioritize recent roles | 36-hour freshness rule | `src/core/decision-engine.js` | `tests/decision-engine.test.js` |
| R-02 Avoid suspicious vacancies | Separate trust threshold | `src/core/decision-engine.js` | Trust-below-threshold test |
| R-03 Reduce low-value effort | Fit bands: prepare / review / reject | Decision engine + demo | Fit-band tests |
| R-04 Prefer canonical vacancy | Official employer/ATS preference | `docs/BUSINESS_RULES.md` | Design review |
| R-05 Do not silently hide provider outages | Explicit all-source failure | `src/core/source-health.js` | `tests/source-health.test.js` |
| R-06 Prevent resume hallucination | Evidence classes and gap separation | `src/core/resume-evidence.js` | Code review / scenario test |
| R-07 Protect candidate reputation | Human approval for irreversible actions | `docs/SECURITY_GOVERNANCE.md` | Workflow review |
| R-08 Keep public portfolio privacy-safe | Mock data and no live integrations | Repository structure | Publication checklist |
