# core/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async
from core.models import Message, Response, InputMessage
from django.contrib.auth.models import User

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_group_name = 'GEEKLE_AI'

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        user = self.scope['user']

        if not user.is_authenticated:
            # If user is not authenticated, ignore the message
            return

        response = await self.generate_response(message)

        # Save message to database
        message_instance = await sync_to_async(Message.objects.create)(
            message_type='chat',
            data=message
        )
        await sync_to_async(InputMessage.objects.create)(
            user=user,
            response=response,
            message=message_instance
        )

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'response': response.response_data
            }
        )

    async def chat_message(self, event):
        message = event['message']
        response = event['response']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'response': response
        }))

    async def generate_response(self, message):
        # Placeholder function to simulate response generation
        response_data = f"Echo: {message}"
        response = await sync_to_async(Response.objects.create)(
            response_data=response_data
        )
        return response