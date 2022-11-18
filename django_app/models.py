from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver 
from django.db.models.signals import post_save
#



#категория историй
class StoryCategory(models.Model): 
    title = models.CharField(
        primary_key=False,
        unique=False,
        editable=True,
        blank=True,
        
        #default="Заголовок категории истории",
        verbose_name="Заголовок категории истории",
        help_text='<small class="text-muted">это наш заголовок категории истории</small><hr><br>',
        max_length=250,
    )

    class Meta:
        app_label = 'django_app' # для отображения в админке и ещё надо изменить и добавить в apps.py
        # ordering = ('title') # сортировка сначала по title потом по dexcription
        verbose_name = 'Категории историй'    
        verbose_name_plural = 'Категории историй'

    def __str__(self) -> str:
        return f'{self.title}'





class Profile(models.Model):
    user = models.OneToOneField(
        primary_key=True,
        editable=True,
        blank=True,
        null=False,
        default=None,
        verbose_name='Аккаунт',

        to=User,
        on_delete=models.CASCADE,
    )

    avatar = models.ImageField(
        null=True,       
        blank=True,       
        upload_to="avatars/"
    )

    class Meta:
        app_label = 'auth'
        ordering =('user',)
        verbose_name = 'Профиль пользователя'
        verbose_name_plural = 'Профили пользователей'
    
    def __str__(self):
        return f'профиль: {self.user.username}'


#сигнал при создании юзера автоматом создаст таблицу profile 
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        # тут происходит первое создание модели
        Profile.objects.get_or_create(user=instance)
    else:
        Profile.objects.get_or_create(user=instance)
