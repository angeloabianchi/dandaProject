from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DandaView, ProjectView


router = DefaultRouter()
router.register(r'dandaprojects', DandaView)


urlpatterns = [
    path('', include(router.urls)),
    path('dandaprojects/<int:dandaprojects_id>/projectphotos/', ProjectView.as_view(), name='project-photos-list'),
]