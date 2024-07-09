from django.contrib.auth.models import User
from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)
    user_roles = models.ManyToManyField(Role)

    def __str__(self):
        return self.user.username


class Message(models.Model):
    message_type = models.CharField(max_length=30)
    data = models.TextField()

    def __str__(self):
        return self.data


class Response(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    response_data = models.TextField()
    shortlisted = models.BooleanField(default=False)
    # intents
    # entities

    def __str__(self):
        return self.response_data


class InputMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    response = models.ForeignKey(Response, on_delete=models.CASCADE)
    message= models.ForeignKey(Message, on_delete=models.CASCADE)

    def __str__(self):
        return self.response_data
