from django.shortcuts import render, redirect
from piano_app.models import Quiz, User

# Create your views here.
def key_quiz(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {'user': user}
    return render (request, "key_quiz.html", context)

def post_score(request):
    user_id = User.objects.get(id=request.session['user_id'])
    if request.method == 'POST':
        Quiz.objects.update_or_create(
            user= user_id,
            defaults={'score':request.POST.get('finalScore'), 
                'passed':True if request.POST.get('passed')=='true' else False, 
                'user_id':user_id},
            )
        return redirect('/profile')