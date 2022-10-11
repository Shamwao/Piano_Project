from django.urls import path
from . import views

urlpatterns = [
    path('', views.lessons),
    path('create_lesson', views.create_lesson)
]