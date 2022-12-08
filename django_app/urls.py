from django.urls import path, re_path
from django_app import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django_app.views import MyPostViewSet#для класов
#

urlpatterns = [
    path('', views.index, name="index"),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('registration/', views.registration, name='registration' ),

    re_path(route=r'profile/(?P<profile_id>\d+)/$', view= views.profile),
    path('profile/', views.profile, name='profile'),

    path('users/', views.users, name='users'),

    path('video/', views.videos, name='videos'),
    
    # re_path(route=r'^users/(?P<user_id>\d+)/$', view=views.users, ),
    

    path('profilephoto/', views.MyProfilePhoto.as_view()),
    path('mypost/', views.MyPostViewSet.as_view()),

    path('parsingexchange/', views.parsing_exchange, name='parsing_exchange'),
    
]


