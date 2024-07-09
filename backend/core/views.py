from rest_framework.views import APIView
from rest_framework.response import Response  # Correct import
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth.models import User
from rest_framework import generics, status, viewsets
from rest_framework.generics import GenericAPIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action
from .serializers import UserLoginSerializer, CustomUserSerializer, MessageSerializer, ResponseSerializer, InputMessageSerializer
from core.models import UserProfile, Role, Message, Response as ResponseModel, InputMessage  # Avoid naming conflict


class Home(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


class UserLoginAPIView(GenericAPIView):
    """
    An endpoint to authenticate existing users using their email and password.
    """
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        serializer = CustomUserSerializer(user)
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return Response(data, status=status.HTTP_200_OK)


class CustomUserCreateAPIView(APIView):

    def post(self, request):
        email = request.data.get('email', '')
        first_name = request.data.get('first_name', '')
        password = request.data.get('password', '')

        if not email or not first_name or not password:
            return Response(
                {"error": "Email, Firstname or Password is not available"},
                status=status.HTTP_400_BAD_REQUEST
            )
        if not User.objects.filter(email=email).exists():
            user = User.objects.create(
                username=email,
                email=email,
                first_name=first_name
            )
            user.set_password(password)
            user.save()
            role = Role.objects.get(name='Default')
            user_profile = UserProfile.objects.create(
                user=user,
            )
            user_profile.user_roles.add(role)
            return Response(
                {"message": "A user created successfully."},
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {"error": "A user with that email already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )


class UserLogoutAPIView(GenericAPIView):
    """
    An endpoint to logout users.
    """
    permission_classes = (IsAuthenticated,)

    def get_serializer_class(self):
        return None

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class ResponseViewSet(viewsets.ModelViewSet):
    queryset = ResponseModel.objects.all()
    serializer_class = ResponseSerializer


class InputMessageViewSet(viewsets.ModelViewSet):
    queryset = InputMessage.objects.all()
    serializer_class = InputMessageSerializer


class BookmarkViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['put'], url_path='chat/(?P<response_id>[^/]+)/bookmarks')
    def bookmark_response(self, request, response_id=None):
        try:
            response = ResponseModel.objects.get(id=response_id)
            response.shortlisted = True
            response.save()
            return Response({'status': 'response bookmarked'}, status=status.HTTP_200_OK)
        except ResponseModel.DoesNotExist:
            return Response({'error': 'Response not found'}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['get'], url_path='chat/(?P<response_id>[^/]+)/bookmarks/all')
    def get_all_bookmarks(self, request, response_id=None):
        responses = ResponseModel.objects.filter(shortlisted=True)
        serializer = ResponseSerializer(responses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['delete'], url_path='chat/(?P<response_id>[^/]+)/bookmarks/all')
    def delete_all_bookmarks(self, request, response_id=None):
        ResponseModel.objects.filter(shortlisted=True).delete()
        return Response({'status': 'all bookmarks deleted'}, status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['delete'], url_path='chat/(?P<response_id>[^/]+)/bookmarks')
    def delete_bookmark(self, request, response_id=None, pk=None):
        try:
            response = ResponseModel.objects.get(id=pk, shortlisted=True)
            response.shortlisted = False
            response.save()
            return Response({'status': 'bookmark deleted'}, status=status.HTTP_204_NO_CONTENT)
        except ResponseModel.DoesNotExist:
            return Response({'error': 'Bookmark not found'}, status=status.HTTP_404_NOT_FOUND)