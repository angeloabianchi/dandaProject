from rest_framework import serializers
from .models import DandaProjects, ProjectPhotos, Frames

class DandaProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DandaProjects
        fields = ('id', 'name', 'video', 'image', 'description', 'category', 'projectphotos_set')


class ProjectPhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectPhotos
        fields = ('id', 'url')


class FramesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frames
        fields = ('id', 'url')