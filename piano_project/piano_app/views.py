from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, "tutorial.html")

def quiz(request):
    return render (request, "key_quiz.html")

def tutorial(request):
    return render (request, "tutorial.html")