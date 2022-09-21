from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('documentation/', views.docs, name='documentation'),
]