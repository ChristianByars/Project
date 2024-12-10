from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
from .serializers import GroupSerializer, UserSerializer

def Login(request):
    return render(request, 'Login.html')

def UserInfo(request):
    return render(request, 'User-Info.html')

def profile(request):
    return render(request, 'Profile.html')

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('-name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]