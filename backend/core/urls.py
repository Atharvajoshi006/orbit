from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'goals', views.GoalViewSet, basename='goal')
router.register(r'projects', views.ProjectViewSet, basename='project')
router.register(r'ideas', views.IdeaViewSet, basename='idea')

urlpatterns = [
    path('health/', views.health_check, name='health-check'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('', include(router.urls)),
]
