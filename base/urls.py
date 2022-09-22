from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('documentation/', views.documentation, name="documentation"),
    path('code/', views.code, name="Get Code"),
]