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
    if request.method == 'POST':
        quizname = request.POST.get('name')
        user_id = request.POST.get('user_id')
        final_score = int(request.POST.get('finalScore'))

        # Retrieve the existing score from the database
        try:
            quiz = Quiz.objects.get(name=quizname, user_id=user_id)
            existing_score = quiz.score
        except Quiz.DoesNotExist:
            existing_score = 0 

        # Only update the score if the new score is higher
        if final_score > existing_score:
            Quiz.objects.update_or_create(
                name=quizname,
                user_id=user_id,
                defaults={
                    'name': request.POST.get('name'),
                    'score': final_score,
                    'passed': True if request.POST.get('passed') == 'true' else False,
                    'user_id': user_id,
                },
            )
        return redirect('/profile')
