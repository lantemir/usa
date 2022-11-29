from rest_framework import serializers
from django_app import models
from django.contrib.auth.models import User
#

class ProfileModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = "__all__"



class UserModelSerializer(serializers.ModelSerializer):

    avatar = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = "__all__"
        # fields = ['pk', 'username', 'email']
        
    def get_avatar(self, obj):
        obj_list =  models.Profile.objects.filter(pk = obj.pk)

        return ProfileModelSerializer(instance=obj_list, many=True).data




# картинка тест
class MyPostSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='creator.username')
    creator_id = serializers.ReadOnlyField(source='creator.id')
    image_url = serializers.ImageField(required=False)

    class Meta:
        model =models.MyPost
        fields = ['id', 'creator', 'creator_id', 'title', 'description', 'image_url']