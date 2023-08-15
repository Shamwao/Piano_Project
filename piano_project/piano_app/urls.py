from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('', views.index),
    path('dashboard/', views.dashboard),
    path('create_user', views.create_user),
    path('login', views.login),
    path('register', views.register),
    path('logout', views.logout),

]