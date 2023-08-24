from django.shortcuts import render, redirect

# Create your views here.
def play(request):
    return render(request, 'play.html')