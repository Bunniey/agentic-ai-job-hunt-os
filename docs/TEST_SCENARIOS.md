# Test Scenarios

| ID | Scenario | Expected result |
| --- | --- | --- |
| TS-01 | Fit 91, Trust 94, onsite, 8h old, verified | Prepare documents |
| TS-02 | Fit 81, Trust 92, hybrid, compensation above configured threshold | Review |
| TS-03 | Trust 84 | Reject |
| TS-04 | Posting date unverified | Reject |
| TS-05 | 37 hours old | Reject |
| TS-06 | Contract role | Reject |
| TS-07 | Remote role below configured lucrative threshold | Reject |
| TS-08 | All discovery sources fail | Sync fails visibly |
| TS-09 | One source succeeds and one fails | Partial success with failed source exposed |
| TS-10 | Resume claim is unsupported | Exclude from submitted resume and surface as gap |
