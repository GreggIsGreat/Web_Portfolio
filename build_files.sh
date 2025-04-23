#!/bin/bash
set -o errexit

# Use python3 and pip3 explicitly
python3 -m pip install -r requirements.txt
python3 manage.py collectstatic --noinput
python3 manage.py migrate