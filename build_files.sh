#!/bin/bash
# Use Python from the environment that Vercel provides
python3 -m pip install -r requirements.txt
python3 manage.py collectstatic --noinput --clear

# Create media directory if it doesn't exist
mkdir -p media

# If you have media files in static/images or static/media, copy them to the media folder
if [ -d "static/images" ]; then
  cp -r static/images/* media/ 2>/dev/null || true
fi

if [ -d "static/media" ]; then
  cp -r static/media/* media/ 2>/dev/null || true
fi