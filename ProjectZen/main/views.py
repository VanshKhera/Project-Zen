from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, 'homepage.html')

def docs(request):
    return render(request, "documentation.html",)