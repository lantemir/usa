from django.urls import path, re_path
from django_app import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
#

urlpatterns = [
    path('', views.index, name="index"),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('registration/', views.registration, name='registration' ),

    path('profile/', views.profile, name='profile'),

    # re_path(route=r'^users/(?P<user_id>\d+)/$', view=views.users, ),
    path('users/', views.users, name='users'),
]