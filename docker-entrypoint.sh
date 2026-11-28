#!/bin/sh
# Express starter entrypoint wrapper: log the runtime, then start the app.
# The app itself reads PORT (default 8080) and binds 0.0.0.0, so this
# wrapper has no startup setup to do beyond the log line.
set -e
echo "Node $(node --version) on $(uname -m) - starting Express starter (PORT=${PORT:-8080})"
exec "$@"
