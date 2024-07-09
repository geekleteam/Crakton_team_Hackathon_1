#user_api/socket_auth_handler.py
from urllib.parse import parse_qs
from channels.middleware import BaseMiddleware
from channels.db import database_sync_to_async
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from django.contrib.auth.models import AnonymousUser, User
from django.db import close_old_connections
from jwt import decode as jwt_decode
from django.conf import settings

@database_sync_to_async
def get_user(token):
    try:
        # Validate the token
        UntypedToken(token)
    except (InvalidToken, TokenError):
        return AnonymousUser()

    # Decode the token to get the user information
    decoded_data = jwt_decode(token, settings.SECRET_KEY, algorithms=["HS256"])
    user_id = decoded_data.get("user_id")

    # Get the user from the database
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return AnonymousUser()
    return user

class JwtAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        # Close old database connections to prevent usage of timed-out connections
        close_old_connections()

        # Get the token from the query string
        query_string = parse_qs(scope["query_string"].decode())
        token = query_string.get("token")

        # If the token is not provided, return AnonymousUser
        if not token:
            scope["user"] = AnonymousUser()
        else:
            # Get the user from the token
            scope["user"] = await get_user(token[0])

        return await super().__call__(scope, receive, send)