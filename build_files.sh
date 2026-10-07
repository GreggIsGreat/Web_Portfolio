#!/bin/bash
set -e

python3 -m venv .venv
source .venv/bin/activate

echo "== requirements.txt =="
ls -la requirements.txt
wc -c requirements.txt
file requirements.txt
cat -A requirements.txt | head -30

pip install -r requirements.txt

echo "== Installed =="
pip list

python -c "import django; print('Django', django.get_version())"
python manage.py collectstatic --noinput --clear