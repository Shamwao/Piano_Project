from django.shortcuts import render, redirect
from piano_app.models import User, Lesson

# Create your views here.

def profile(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
        'lessons': Lesson.objects.all().values()
    }
    return render(request, "profile.html", context)

def update(request):
    return render(request, 'update.html')

def update_lesson(request, lesson_id):
    update_this = Lesson.objects.get(id=lesson_id)
    update_this.date = request.POST['date']
    update_this.time = request.POST['time']
    update_this.save()
    return redirect('/profile')

def delete(request, lesson_id):
    deleted_lesson = Lesson.objects.get(id=lesson_id)
    deleted_lesson.delete()
    return redirect(request, '/profile')
