from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DandaView, ProjectView, PhotoView, FramesView


router = DefaultRouter()
router.register(r'dandaprojects', DandaView)


urlpatterns = [
    path('', include(router.urls)),
    path('dandaprojects/<int:pk>', ProjectView.as_view(), name='dandaprojects-detail'),
    path('dandaprojects/<int:dandaprojects_id>/projectphotos/', PhotoView.as_view(), name='project-photos-list'),
    path('frames/', FramesView.as_view({'get': 'list'}), name='frames-list'),
]