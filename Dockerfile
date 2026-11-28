# Node.js 26 Express TypeScript Starter
# Official node image + our wrapper, prebuilt by GitHub Actions and pushed
# to ghcr.io/ninja-templates (the PG19 approach, Ahmed's call 2026-11-28).
# Base is digest-pinned (node 26.13.1, amd64); the image tag is 26.13.1.
FROM node:26.13.1@sha256:bcaafe01655722314a2e8b2233b0de90bc33c8de0c9ce7a239a63a9d47fc4527

WORKDIR /app

# Install dependencies first (cached unless package files change).
COPY package.json package-lock.json ./
RUN npm ci

# Build the TypeScript app.
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Our wrapper: logs the runtime, then starts the app.
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# The app reads PORT (default 8080) and binds 0.0.0.0.
EXPOSE 8080
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["node", "dist/index.js"]
