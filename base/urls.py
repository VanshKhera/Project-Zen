from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('code/', views.code, name="Get Code"),
    path('documentation/', views.documentation, name="Documentation"),
    path('404/', views.e404, name="404"),
]