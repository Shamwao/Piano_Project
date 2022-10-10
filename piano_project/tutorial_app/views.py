from django.shortcuts import render, redirect

# Create your views here.
def keys_tutorial(request):
    return render (request, "tutorial.html")

def keys_tutorial1(request):
    return render(request, "tutorial1.html")

def keys_tutorial2(request):
    return render(request, "tutorial2.html")

def keys_tutorial3(request):
    return render(request, "tutorial3.html")

def keys_tutorial4(request):
    return redirect('/quiz/keys')