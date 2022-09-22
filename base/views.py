from django.shortcuts import render
# Create your views here.

def home(request):
    return render(request, 'home.html')

def documentation(request):
    return render(request, 'docs.html')

def code(request):
    return render(request, 'code.html')