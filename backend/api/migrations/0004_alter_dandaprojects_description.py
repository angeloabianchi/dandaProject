# Generated by Django 4.2.6 on 2023-11-11 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_dandaprojects_description_alter_dandaprojects_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dandaprojects',
            name='description',
            field=models.CharField(max_length=3000),
        ),
    ]
