# Security Policy

This repository is a public portfolio edition and is intentionally isolated from the production system.

## Do not publish

Never commit any of the following:

- OpenAI or other API keys
- Supabase service-role or database credentials
- Google OAuth client secrets or refresh tokens
- Application passwords, encryption keys, cron secrets, cookies, or session tokens
- Real resumes, generated application documents, or personal application history
- Recruiter/contact datasets or email content
- Database exports or production logs containing identifiers

## Public-demo design

The demo uses fictional vacancies and performs all decision logic locally. It makes no calls to email, LLM, database, ATS, or production services.

## Reporting

If you discover a secret accidentally committed to this repository, rotate/revoke the credential first, then remove it from Git history. Deleting the visible file alone is not sufficient once a secret has been committed.
