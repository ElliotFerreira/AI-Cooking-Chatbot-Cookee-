from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.chat),
    path('generate-conversation-title', views.generate_conversation_title),

]