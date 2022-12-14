from decimal import Context
from django.shortcuts import render, redirect, HttpResponse
from .models import User
from django.db import models
from django.contrib import messages
import bcrypt


# Create your views here.
def index(request):
    return render(request, "index.html")

def create_user(request):
    if request.method == 'GET':
        return redirect('/')
    errors = User.objects.validator(request.POST)
    if errors:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/')
    hashedPw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    new_user = User.objects.create(
            first_name = request.POST.get('first_name'),
            last_name = request.POST.get('last_name'),
            email = request.POST.get('email'),
            password =  hashedPw
            )
    request.session['user.id']  = new_user.id
    return redirect ('/dashboard')

def dashboard(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {'user': user}
    return render(request, "dashboard.html", context)

def login(request):
    user = User.objects.filter(email = request.POST['email'])
    if user:
        userLogin = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), userLogin.password.encode()):
            request.session['user_id'] = userLogin.id
            return redirect('/dashboard')
        messages.error(request, 'Invalid password')
        return redirect('/')
    messages.error(request, 'That Email is not in our system, please register for an account')
    return redirect('/')

def logout(request):
    request.session.clear()
    return redirect('/')