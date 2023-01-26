from django.shortcuts import render, redirect
from piano_app.models import Quiz, User

# Create your views here.
def key_quiz(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {'user': user}
    return render (request, "key_quiz.html", context)

def post_score(request):
    if request.method == 'POST':
        print (request.POST.get('finalScore'))
        Quiz.objects.create(score =request.POST.get('finalScore'), 
        passed= True if request.POST.get('passed')=='true' else False,
        user= User.objects.get(id = request.session['user_id']))
        quiz =Quiz.objects.get(id=request.session['user_id'])
        context = {'quiz': quiz}
        return redirect('/profile', context)