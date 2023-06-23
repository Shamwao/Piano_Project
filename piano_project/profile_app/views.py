from django.shortcuts import render, redirect
from piano_app.models import User, Lesson, Quiz

# Create your views here.

def profile(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
        'lessons': Lesson.objects.filter(user=user),
        'quizzes': Quiz.objects.filter(user=user),
    }
    return render(request, "profile.html", context)

def update(request, id):
    mylesson =Lesson.objects.get(id=id)
    context = {
        'mylesson': mylesson
    }
    return render(request, 'update.html', context)

def update_lesson(request, id):
    update_this = Lesson.objects.get(id=id)
    update_this.date = request.POST['date']
    update_this.time = request.POST['time']
    update_this.save()
    return redirect('/profile')

def delete(request, id):
    deleted_lesson = Lesson.objects.get(id=id)
    deleted_lesson.delete()
    return redirect('/profile')
