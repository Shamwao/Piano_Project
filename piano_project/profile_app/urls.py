from django.urls import path
from . import views

urlpatterns = [
    path('', views.profile),
    path('update/<int:id>', views.update),
    path('delete/<int:id>', views.delete),
    path('update/update_lesson/<int:id>', views.update_lesson)
]