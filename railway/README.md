# Node.js 26 Express TypeScript Starter

A minimal Express API on Node.js 26 LTS and TypeScript 7 — the framework most Node developers actually build with, on the new LTS line. It listens on Railway's `PORT`, answers a `/health` check, and shuts down gracefully on `SIGTERM`, so deploys never cut in-flight requests short.

One service, no database, no volume, zero required variables. Railway Nixpacks auto-detects Node from `.node-version` (26.13.1, pinned exactly).

Verified locally on 2026-11-11 (install, typecheck, build, live run of all endpoints). A live Railway deploy has NOT happened yet, and first-day cost is untested.
