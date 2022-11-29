from django.contrib import admin
from django_app import models
# Register your models here.


admin.site.site_header = 'Панель 1'
admin.site.index_title = 'Панель 2'
admin.site.site_title = 'Панель 3'


admin.site.register(models.MyPost)
admin.site.register(models.StoryCategory)
admin.site.register(models.Profile)