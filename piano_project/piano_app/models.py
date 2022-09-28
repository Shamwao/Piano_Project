from django.db import models

# Create your models here.

class User:
    def __init__(self, data):
        self.f_name=data['f_name']
        self.l_name=data['l_name']
        self.email = data['email']
        self.password = data['password']
        
