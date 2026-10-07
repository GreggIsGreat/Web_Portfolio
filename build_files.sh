#!/bin/bash
set -e  # stop the build on the first error instead of continuing with a broken state

# Vercel's Python is uv-managed (PEP 668), so a plain pip install is refused.
# This is a throwaway build container, so overriding the guard is safe.
python3 -m pip install --break-system-packages -r requirements.txt

python3 manage.py collectstatic --noinput --clear

# Create media directory if it doesn't exist
mkdir -p media

# Copy any media files from static into media
if [ -d "static/images" ]; then
  cp -r static/images/* media/ 2>/dev/null || true
fi

if [ -d "static/media" ]; then
  cp -r static/media/* media/ 2>/dev/null || true
fi