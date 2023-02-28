from django.urls import path
from . import views

urlpatterns = [
    path('keys/score/', views.post_score),
    path('keys/', views.key_quiz),
    path('bkeys/', views.bkeys),
    path('main/', views.quiz_index),
]