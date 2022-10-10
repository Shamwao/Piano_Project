from django.shortcuts import render, redirect
from piano_app.models import Quiz

# Create your views here.
def key_quiz(request):
    return render (request, "key_quiz.html")

def post_score(request):
    if request.method == 'POST':
        Quiz.objects.create(score =request.POST.get('score'), passed= request.POST.get('passed'))
        return redirect(request, '/dashboard')