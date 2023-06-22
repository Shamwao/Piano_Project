from django.shortcuts import render, redirect
from piano_app.models import Lesson, User

# Create your views here.
def lessons(request):
    return render(request, 'lessons.html')

def create_lesson(request):
    if request.method == 'GET':
        return redirect('/lessons')  
    Lesson.objects.create(
    date=request.POST.get('date'), 
    time=request.POST.get('time'),
    user = User.objects.get(id = request.session['user.id'])
    )
    return redirect('/profile')
