#!/usr/bin/env bash

set -euo pipefail

API_PORT="${API_PORT:-3001}"
FRONTEND_PORT="${FRONTEND_PORT:-${PORT:-5173}}"

echo "Starting API on http://127.0.0.1:${API_PORT}"
echo "Starting frontend on http://127.0.0.1:${FRONTEND_PORT}"

cleanup() {
  if [[ -n "${api_pid:-}" ]]; then
    kill "${api_pid}" 2>/dev/null || true
  fi

  if [[ -n "${frontend_pid:-}" ]]; then
    kill "${frontend_pid}" 2>/dev/null || true
  fi
}

trap cleanup INT TERM EXIT

PORT="${API_PORT}" npm run dev --workspace @workspace/api-server &
api_pid=$!

PORT="${FRONTEND_PORT}" FRONTEND_PORT="${FRONTEND_PORT}" API_PORT="${API_PORT}" npm run dev --workspace @workspace/ayul-community-care &
frontend_pid=$!

while kill -0 "${api_pid}" 2>/dev/null && kill -0 "${frontend_pid}" 2>/dev/null; do
  sleep 1
done

wait "${api_pid}" || true
wait "${frontend_pid}" || true
