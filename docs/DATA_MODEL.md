# Data Model

The production concept separates operational entities so that source evidence, scoring, documents, outreach, and applications can be audited independently.

```mermaid
erDiagram
    JOBS ||--o{ JOB_EVIDENCE : has
    JOBS ||--o| JOB_ANALYSES : evaluated_by
    JOBS ||--o{ JOB_DOCUMENTS : produces
    JOBS ||--o{ OUTREACH : relates_to
    JOBS ||--o{ APPLICATIONS : becomes
    CONTACTS ||--o{ OUTREACH : receives
    SYNC_RUNS ||--o{ JOBS : discovers

    JOBS {
      uuid id
      string company
      string role
      string canonical_url
      datetime posted_at
      string work_mode
      string employment_type
    }
    JOB_ANALYSES {
      uuid job_id
      int fit_score
      int trust_score
      string decision
    }
    JOB_EVIDENCE {
      uuid job_id
      string evidence_type
      string source
    }
    JOB_DOCUMENTS {
      uuid job_id
      string document_type
      string status
    }
    CONTACTS {
      uuid id
      string organization
      string relationship_type
    }
    OUTREACH {
      uuid job_id
      uuid contact_id
      string status
      datetime sent_at
    }
    APPLICATIONS {
      uuid job_id
      string stage
      datetime applied_at
    }
    SYNC_RUNS {
      uuid id
      string status
      int discovered_count
      string error
    }
```

The public demo does not connect to this model; it uses in-memory fictional records only.
