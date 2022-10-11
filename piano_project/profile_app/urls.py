from django.urls import path
from . import views

urlpatterns = [
    path('', views.profile),
    path('update', views.update),
    path('delete/<int:lesson_id>', views.delete),
    path('update_lesson/<int:lesson_id>', views.update_lesson)
]