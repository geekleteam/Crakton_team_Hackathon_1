from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'messages', views.MessageViewSet)
router.register(r'responses', views.ResponseViewSet)
router.register(r'inputmessages', views.InputMessageViewSet)
router.register(r'bookmarks', views.BookmarkViewSet, basename='bookmark')

urlpatterns = [
    path('', include(router.urls)),
    path('home', views.Home.as_view()),
    path('api/register/', views.CustomUserCreateAPIView.as_view(), name='user-register'),
    path("api/login/", views.UserLoginAPIView.as_view(), name="login-user"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("api/logout/", views.UserLogoutAPIView.as_view(), name="logout-user"),


]