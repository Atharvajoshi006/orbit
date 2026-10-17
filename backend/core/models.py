from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100, default="AJ")
    display_name = models.CharField(max_length=100, default="AJ")
    bio = models.TextField(blank=True)
    education = models.CharField(max_length=255, blank=True)
    skills = models.JSONField(default=list)
    interests = models.JSONField(default=list)
    current_focus = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.display_name or self.name


class Goal(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, default="short-term")
    status = models.CharField(max_length=20, default="active")
    progress = models.IntegerField(default=0)
    target_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=50, default="active")
    tech_stack = models.JSONField(default=list)
    github_url = models.URLField(max_length=500, blank=True)
    progress = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Idea(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    entry_type = models.CharField(max_length=50, default="idea")
    tags = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
