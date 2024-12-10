from django.db import models
from birthday import BirthdayField, BirthdayManager
# Create your models here.
class Cat(models.Model):
    cat_name = models.CharField(max_length=30)
    cat_username = models.CharField(max_length = 20)
    birthday = BirthdayField()
    objects = BirthdayManager()
    email = models.EmailField(max_length=50)

 

class Human(models.Model):
    human_first_name = models.CharField(max_length=30)
    human_last_name = models.CharField(max_length=30)
    cat_username = models.CharField(max_length = 20)
    birthday = BirthdayField()
    objects = BirthdayManager()
    email = models.EmailField(max_length=50)
    