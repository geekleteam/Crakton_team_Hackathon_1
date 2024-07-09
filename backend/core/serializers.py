from rest_framework import serializers

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import *

class UserLoginSerializer(serializers.Serializer):
    """
    Serializer class to authenticate users with email and password.
    """

    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(**data)
        if user:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Serializer class to serialize CustomUser model.
    """

    class Meta:
        model = User
        fields = ("id", "username", "email")


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'name', 'description']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    user_roles = RoleSerializer(many=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'bio', 'location', 'birth_date', 'profile_picture', 'user_roles']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        roles_data = validated_data.pop('user_roles')
        user = User.objects.create(**user_data)
        user_profile = UserProfile.objects.create(user=user, **validated_data)
        for role_data in roles_data:
            role, created = Role.objects.get_or_create(**role_data)
            user_profile.user_roles.add(role)
        return user_profile

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        roles_data = validated_data.pop('user_roles')
        user = instance.user

        instance.bio = validated_data.get('bio', instance.bio)
        instance.location = validated_data.get('location', instance.location)
        instance.birth_date = validated_data.get('birth_date', instance.birth_date)
        instance.profile_picture = validated_data.get('profile_picture', instance.profile_picture)
        instance.save()

        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.save()

        instance.user_roles.clear()
        for role_data in roles_data:
            role, created = Role.objects.get_or_create(**role_data)
            instance.user_roles.add(role)

        return instance

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'message_type', 'data']

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ['id', 'created_at', 'updated_at', 'response_data', 'shortlisted']

class InputMessageSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    response = ResponseSerializer()
    message = MessageSerializer()

    class Meta:
        model = InputMessage
        fields = ['id', 'user', 'created_at', 'updated_at', 'response', 'message']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        response_data = validated_data.pop('response')
        message_data = validated_data.pop('message')

        user, created = User.objects.get_or_create(**user_data)
        response = Response.objects.create(**response_data)
        message = Message.objects.create(**message_data)

        input_message = InputMessage.objects.create(user=user, response=response, message=message, **validated_data)
        return input_message

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        response_data = validated_data.pop('response')
        message_data = validated_data.pop('message')

        user = instance.user
        response = instance.response
        message = instance.message

        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.save()

        response.response_data = response_data.get('response_data', response.response_data)
        response.shortlisted = response_data.get('shortlisted', response.shortlisted)
        response.save()

        message.message_type = message_data.get('message_type', message.message_type)
        message.data = message_data.get('data', message.data)
        message.save()

        instance.created_at = validated_data.get('created_at', instance.created_at)
        instance.updated_at = validated_data.get('updated_at', instance.updated_at)
        instance.save()

        return instance