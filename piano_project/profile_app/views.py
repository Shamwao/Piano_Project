from django.shortcuts import render
from piano_app.models import User

# Create your views here.

def profile(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {'user': user}
    return render(request, "profile.html", context)