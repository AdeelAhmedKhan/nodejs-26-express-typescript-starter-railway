# Local parity test — Node.js 26 Express TypeScript Starter (2026-11-11)

First build of this template. Same minimal shape as the Node.js 26
TypeScript Starter plus Express 5, the framework most Node developers
actually build with. No code is shared with the plain starter; this is
its own repo and its own template.

## Versions (pinned exactly)

- Node **26.13.1** (npm 11.20.0) at
  `~/workspace/tools/node-v26.13.1-linux-x64/`, tarball SHA256 verified
  against the official SHASUMS256.txt on 2026-11-11.
- Express **5.3.0**, @types/express **5.0.6**, TypeScript **7.0.2**,
  @types/node **26.6.6**, tsx **4.23.15**. Lockfile pins verified
  (express 5.3.0, @types/express 5.0.6).

## Results (all with Node 26.13.1)

- `npm install`: clean, **0 vulnerabilities** (`npm audit`).
- `npx tsc --noEmit`: **0 errors**.
- `npm run build`: succeeds.
- Built server (`node dist/index.js`, PORT 8080):
  - `GET /` → **200**, body names the starter and lists endpoints
  - `GET /health` → **200**, body `{"status":"ok","uptimeSeconds":2}`
  - `GET /echo?message=hi` → **200**
  - `GET /echo` → **400**
  - `GET /nope` → **404** (unknown route JSON)
  - `POST /echo` → **404** (no POST route defined, correct)
- `SIGTERM` → log shows `Received SIGTERM, shutting down gracefully...`,
  process exits **0**.

## Secret scan

- Grep for keys, tokens, private keys, and credential assignments across
  the repo (excluding node_modules, dist, package-lock.json): **clean**.

## Still untested

- Live Railway deploy, Nixpacks build on Railway's side, first-day cost.
- Whether Railway's builder serves the exact 26.13.1 patch or only the
  26.x major line from `.node-version` (see the 2026-11-11 correction:
  Nixpacks honors the major line; Railpack/mise may honor the exact
  version; the production builder default is unverified).
