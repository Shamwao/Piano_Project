from django.urls import path
from . import views

urlpatterns = [
    path('keys/', views.keys_tutorial),
    path('keys/1', views.keys_tutorial1),
    path('keys/2', views.keys_tutorial2),
    path('keys/3', views.keys_tutorial3),
    path('keys/4', views.keys_tutorial4),
    path('index', views.tutorial_index),
    path('bkeys/', views.bk_tutorial),
    path('bkeys/1', views.bk_tutorial1),
    path('bkeys/2', views.bk_tutorial2),

]