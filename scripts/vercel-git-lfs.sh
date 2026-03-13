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

git lfs install --local
git lfs pull
