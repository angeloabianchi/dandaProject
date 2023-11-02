from django.shortcuts import render
from .models import DandaProjects, ProjectPhotos
from .serializers import DandaProjectsSerializer, ProjectPhotosSerializer
from rest_framework import viewsets, generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class DandaView(viewsets.ModelViewSet):
    queryset = DandaProjects.objects.all()
    serializer_class = DandaProjectsSerializer

class ProjectView(generics.RetrieveAPIView):
    queryset = DandaProjects.objects.all()
    serializer_class = DandaProjectsSerializer
    # This tells the view to look up projects by 'name' field
    # lookup_field = 'name' 


class PhotoView(generics.ListAPIView):
    serializer_class = ProjectPhotosSerializer

    def get_queryset(self):
        dandaprojects_id = self.kwargs['dandaprojects_id']
        return ProjectPhotos.objects.filter(project_id=dandaprojects_id)