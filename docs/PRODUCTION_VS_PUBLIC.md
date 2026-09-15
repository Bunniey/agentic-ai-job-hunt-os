# Production vs Public Portfolio

| Area | Private production system | Public portfolio repository |
| --- | --- | --- |
| Job discovery | Live web / ATS integrations | Mock records only |
| Database | Operational persistence | None |
| LLM | Live API-assisted workflows | No API calls |
| Gmail | OAuth integration | Excluded |
| Resume source files | Private, authorized files | Excluded |
| Generated documents | Private | Excluded |
| Contact research | Private | Excluded |
| Application history | Private | Excluded |
| Decision rules | Operational implementation | Sanitized representative implementation |
| Error handling | Operational logs/status | Representative source-health module |
| UI | Production dashboard | Offline showcase dashboard |

This separation allows the project to be discussed publicly without increasing the attack surface of the live system or publishing personal information.
