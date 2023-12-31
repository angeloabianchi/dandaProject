from django.db import models

# Create your models here.
class DandaProjects(models.Model):
    name = models.CharField(max_length=200)
    video = models.CharField(max_length=300)
    image = models.CharField(max_length=300)
    description = models.CharField(max_length=3000)
    category = models.CharField(max_length=200)
    client = models.CharField(max_length=200, default='PLAYZ')

    def __str__(self):
        return self.name

class ProjectPhotos(models.Model):
    project = models.ForeignKey(DandaProjects, on_delete=models.CASCADE)
    url = models.CharField(max_length=300)
    
    def __str__(self):
        return self.url
    
class Frames(models.Model):
    url = models.CharField(max_length=3000)

    def __str__(self):
        return self.url