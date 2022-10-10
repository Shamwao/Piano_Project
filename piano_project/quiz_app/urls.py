from django.urls import path
from . import views

urlpatterns = [
    path('keys/', views.key_quiz),
    path('keys/post_score', views.post_score)
]