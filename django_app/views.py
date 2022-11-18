from django.shortcuts import render
import re
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes 
from rest_framework.response import Response 
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User 
from django_app import serializers
from django.core.paginator import Paginator
#




def index(request):
    context={}

    print("index")
    return render(request=request, template_name = 'build/index.html', context=context, status=status.HTTP_200_OK)



@api_view(http_method_names=["POST", "GET"])
@permission_classes([IsAuthenticated])
def profile(request):

    if request.method == "GET":
        

        return Response( {"profile": {"user": "тест"}},  status=status.HTTP_200_OK)


@api_view(http_method_names=["POST", "GET", "PUT", "DELETE"])
@permission_classes([IsAuthenticated])
def users(request):
    if request.method == "GET":
        print(request)

        currentPage = int(request.GET.get("currentPage", 7))
        pageSize = int(request.GET.get("pageSize", 4))

        print("currentPage")
        print(currentPage)

        print("pageSize")
        print(pageSize)

        obj_users = User.objects.all()
        serialized_obj_users = serializers.UserModelSerializer(instance=obj_users, many=True).data

        paginator_obj = Paginator(serialized_obj_users, pageSize)

        currentPage = paginator_obj.get_page(currentPage).object_list


        return Response( {"datausers": {"users": currentPage}},  status=status.HTTP_200_OK)

# login react
@api_view(http_method_names=["POST", "GET"])
@permission_classes([AllowAny])
def registration(request):
    if request.method == "POST":
        username = request.data.get("username", None)
        password = request.data.get("password", None)

        # print(f"\nGET {request.GET}")
        # print(f"POST {request.POST}")
        # print(f"data {request.data}")
        # print(f"FILES {request.FILES}\n")

        print(username)
        print(password)

        if username and password:

            if User.objects.filter(username = username).exists():

                return Response( {"errormessage": "пользователь уже существует" }, status=status.HTTP_400_BAD_REQUEST)
            else:
                User.objects.create_user(
                    username=username,                    
                    password=password
                )

                return Response( {"user":  username},  status=status.HTTP_201_CREATED)
        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)
        # if username and password:

        #     print("ok")
        #     usernamenew = User.objects.get(username = username)
        #     print(usernamenew)

        #     if usernamenew:
        #         return Response( data={"user": usernamenew.username, "message": "Пользователь уже существет с таким логином"},  status=status.HTTP_400_BAD_REQUEST)

              
        #         # User.objects.create_user(
        #         #     username=username,                    
        #         #     password=password
        #         # )
        #         #return Response( {"user": usernamenew["username"]},  status=status.HTTP_200_OK)

        #     else:
        #         return Response( {"user":  usernamenew.username},  status=status.HTTP_200_OK)

         

                
                
        #     return Response(status=status.HTTP_201_CREATED)
           
        # else:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)