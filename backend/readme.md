**Backend Services Setup
**

```
1. cd user_api
2. update .env file related to postgres credentials
3. python manage.py makemigrations & python manage.py migrate
4. python manage.py loaddata roles.json
5. python manage.py runserver

```

Production setup: (Refer ./Procfile)


**API's**

1. Login API
```
curl --location 'localhost:8000/api/token/' \
--header 'Content-Type: application/json' \
--data '{
    "username": "i", 
    "password": "i"
}'
```

2. HEALTH CHECK

```

curl --location 'localhost:8000/core/home'

```

3. User Creation

```
curl --location 'localhost:8000/core/api/register/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "kibrahimsha@gmail.com",
    "password": "Test@1234",
    "first_name": "Kasim"
}'
```

4. User Logout

```
curl --location 'localhost:8000/core/api/logout/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMzkxMDE1LCJpYXQiOjE3MjAzODc0MTUsImp0aSI6ImQ4ODY2NDZhNGZlZTRiMTNhNzBiNGU0OTE4MDk5NzY1IiwidXNlcl9pZCI6M30.5S9lR3bVPsfZm8cVuwONAx4hazXrDUjcrwVp_-Xl8Rs' \
--data '{
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDQ3MzgxNSwiaWF0IjoxNzIwMzg3NDE1LCJqdGkiOiIyZjE4NzY2ZTlmYTI0NTI3YjFlNTZlMGVkZjQxMTEzYyIsInVzZXJfaWQiOjN9.l62sZQx5YxNudvpqZIUM1vmlFeSn2pstaxbn1YIjI-U"
}'
```
