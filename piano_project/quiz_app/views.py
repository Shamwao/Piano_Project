from django.shortcuts import render, redirect
from piano_app.models import Quiz, User

# Create your views here.
def quiz_index(request):
    return render (request, "quiz_index.html")

def key_quiz(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {'user': user}
    return render (request, "key_quiz.html", context)

def bkeys(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {'user': user}
    return render (request, "bkey_quiz.html", context)

def post_score(request):
    quizname = request.POST.get('name')
    if request.method == 'POST':
        Quiz.objects.update_or_create(
            name = quizname,
            defaults={
                'name':request.POST.get('name'),
                'score':request.POST.get('finalScore'), 
                'passed':True if request.POST.get('passed')=='true' else False, 
                'user_id':request.POST.get('user_id')
                },
            )
        return redirect('/profile')