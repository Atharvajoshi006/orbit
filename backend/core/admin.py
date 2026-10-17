from django.contrib import admin
from .models import Profile, Goal, Project, Idea


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('display_name', 'name', 'updated_at', 'created_at')


@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'status', 'progress', 'target_date', 'updated_at')
    list_filter = ('category', 'status')
    search_fields = ('title', 'description')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'progress', 'github_url', 'updated_at', 'created_at')
    list_filter = ('status',)
    search_fields = ('title', 'description')


@admin.register(Idea)
class IdeaAdmin(admin.ModelAdmin):
    list_display = ('title', 'entry_type', 'updated_at', 'created_at')
    list_filter = ('entry_type',)
    search_fields = ('title', 'content')
