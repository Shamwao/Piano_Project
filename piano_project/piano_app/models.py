from email.policy import default
from django.db import models
import re
EMAIL_REGEX =re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.

class UserManager(models.Manager):
    def validator(self, form):
        errors = {}
        emailCheck = self.filter(email=form['email'])
        if emailCheck:
            errors['email'] = 'That email is already in use.'
        if len(form['first_name']) < 3 :
            errors["first_name"] = "Please enter a valid first name."
        if len(form['last_name']) < 3 :
            errors["last_name"] = "Please enter a valid last name."
        if len(form['password']) < 8 :
            errors["password"] = 'Password must be at least 8 characters.'
        if not EMAIL_REGEX.match(form['email']):
            errors["email"] = "Please enter a valid email address."
        if form['password'] != form['confirm'] :
            errors['confirm'] = "Passwords don't match. Please try again."
        
        return errors

class User(models.Model):
    first_name=models.CharField(max_length=200)
    last_name=models.CharField(max_length=200)
    email =models.EmailField()
    password =models.CharField(max_length=255)
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at =models.DateTimeField(auto_now=True)
    objects= UserManager()

class Quiz(models.Model):
    name=models.CharField(max_length=80, default='quizname')
    score=models.IntegerField(default=0)
    passed=models.BooleanField(default=False)
    user=models.ForeignKey(User, related_name ="user_id", on_delete =models.CASCADE)

class Lesson(models.Model):
    date=models.DateField()
    time=models.TimeField()
    user=models.ForeignKey(User, related_name='lessons', on_delete=models.CASCADE)
    
