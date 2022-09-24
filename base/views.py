from django.shortcuts import render
from docs.views import main
# Create your views here.

def home(request):
    return render(request, 'home.html')

# def documentation(request):
#     return render(request, 'layout_documentation.html')

def code(request):
    return render(request, 'code.html')

def documentation(request):
    return render(request, 'docs.html')