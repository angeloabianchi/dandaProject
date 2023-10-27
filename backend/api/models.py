from django.db import models

# Create your models here.
class DandaProjects(models.Model):
    name = models.CharField(max_length=200)
    video = models.CharField(max_length=300)
    image = models.CharField(max_length=300, default='https://images.unsplash.com/photo-1697641665161-48344289a88f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

    def __str__(self):
        return self.name

class ProjectPhotos(models.Model):
    project = models.ForeignKey(DandaProjects, on_delete=models.CASCADE)
    url = models.CharField(max_length=300)
    
    def __str__(self):
        return self.url