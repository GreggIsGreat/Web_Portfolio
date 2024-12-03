from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.http import FileResponse, Http404
import os
from django.conf import settings


def index(request):
    return render(request, "index.html")



def download_cv(request):
    file_path = os.path.join(settings.MEDIA_ROOT, 'ThabangTeddyCV.pdf')
    if os.path.exists(file_path):
        return FileResponse(open(file_path, 'rb'), as_attachment=True, filename='ThabangTeddyCV.pdf')
    else:
        raise Http404("File not found")
