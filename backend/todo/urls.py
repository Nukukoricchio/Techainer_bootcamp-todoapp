from django.urls import path

from . import views


urlpatterns = [
    path('', views.TodoListView.as_views()),
    path('<int:pk>/', views.TodoDetailView.as_views())
]
