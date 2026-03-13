#!/usr/bin/env bash
set -euo pipefail

# Vercel spesso non scarica automaticamente gli oggetti Git LFS.
# Se builda con i "pointer" (file di testo), i video risultano rotti in produzione.
#
# Nota: lo eseguiamo SOLO su Vercel (o se forzato), per evitare side-effect in locale.

if [[ -z "${VERCEL:-}" && -z "${FORCE_LFS_PULL:-}" ]]; then
  exit 0
fi

if [[ ! -d ".git" ]]; then
  exit 0
fi

if [[ "${LFS_DEBUG:-}" == "1" ]]; then
  set -x
fi

ensure_git_lfs() {
  if command -v git-lfs >/dev/null 2>&1; then
    return 0
  fi
  if git lfs version >/dev/null 2>&1; then
    return 0
  fi

  local version="3.7.1"
  local url="https://github.com/git-lfs/git-lfs/releases/download/v${version}/git-lfs-linux-amd64-v${version}.tar.gz"
  local tmp="/tmp/git-lfs.tgz"
  local dest="${PWD}/.git-lfs-bin"

  rm -rf "$dest"
  mkdir -p "$dest"

  curl -sSL "$url" -o "$tmp"
  tar -xzf "$tmp" -C "$dest" --strip-components=1
  export PATH="$dest:${PATH}"
}

ensure_git_lfs

echo "git version: $(git --version)"
echo "git lfs version: $(git lfs version)"

# Evita prompt interattivi (in CI bloccherebbero la build)
export GIT_TERMINAL_PROMPT=0

# Se Vercel non riesce ad autenticarsi per scaricare LFS (401/403),
# puoi aggiungere un token GitHub nelle env vars (consigliato: GITHUB_TOKEN).
token="${GITHUB_TOKEN:-${GH_TOKEN:-}}"
if [[ -n "${token}" ]]; then
  if command -v base64 >/dev/null 2>&1; then
    auth="$(printf "x-access-token:%s" "${token}" | base64 | tr -d '\n')"
    git config --local http.https://github.com/.extraheader "AUTHORIZATION: basic ${auth}"
  fi
fi

git lfs install --local

echo "Pulling Git LFS objects..."
if ! git lfs pull --include="*.mp4,*.mov" --exclude=""; then
  echo "ERROR: git lfs pull fallito."
  echo "Suggerimento: se vedi 401/403, su Vercel potrebbe servire un token GitHub con permessi di lettura su LFS."
  git lfs logs last || true
  exit 1
fi
