# Public GitHub Publication Checklist

Use this checklist before changing repository visibility or pushing files to a new public repository.

- [ ] Create a **new public repository** rather than changing the production repository to Public.
- [ ] Upload only the files from this sanitized package.
- [ ] Confirm there is no `.env`, `.env.local`, `.vercel`, private export, database dump, resume, contact list, OAuth token, or production log.
- [ ] Search the repository for common secret markers such as `sk-`, `sb_secret_`, `client_secret`, `refresh_token`, `service_role`, `APP_ACCESS_PASSWORD`, and `CRON_SECRET`.
- [ ] Confirm all data under `src/data/` is fictional.
- [ ] Keep the production GitHub repository private.
- [ ] Do not connect the public showcase repository to production Supabase, Gmail OAuth, or live API credentials.
- [ ] Add 2–4 screenshots only after checking that they contain no email addresses, phone numbers, recruiter names, tokens, or private job/application data.
- [ ] Pin the public repository on GitHub and add it to the LinkedIn Featured section.
