from django.contrib import admin

from core.models import Role, UserProfile
# Register your models here.

admin.site.register([Role, UserProfile])
