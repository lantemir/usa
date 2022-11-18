from rest_framework import serializers
from django_app import models
from django.contrib.auth.models import User
#

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = "__all__"
        fields = ['pk', 'username', 'email']
        


