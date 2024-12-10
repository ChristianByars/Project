from django.urls import path
from . import views
from django.urls import path, include
from rest_framework import routers, serializers, viewsets



router = routers.DefaultRouter()
router.register(r'users',views.UserViewSet)
router.register(r'groups',views.GroupViewSet)

urlpatterns = [
    path('', views.Login),
    path('UserInfo', views.UserInfo),
    path('Profile',views.profile),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
