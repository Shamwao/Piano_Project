from django.urls import path
from . import views

urlpatterns = [
    path('keys/', views.keys_tutorial),
    path('keys/1', views.keys_tutorial1),
    path('keys/2', views.keys_tutorial2),
    path('keys/3', views.keys_tutorial3),
    path('keys/4', views.keys_tutorial4)
]