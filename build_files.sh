#!/bin/bash
set -e

echo "== Python info =="
which python3
python3 --version

# Isolated environment: install and run use the same interpreter
python3 -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt

echo "== Sanity check =="
which python
pip show django
python -c "import django; print('Django', django.get_version())"

python manage.py collectstatic --noinput --clear