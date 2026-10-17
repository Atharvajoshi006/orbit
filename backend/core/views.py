from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Profile, Goal, Project, Idea
from .serializers import ProfileSerializer, GoalSerializer, ProjectSerializer, IdeaSerializer


@api_view(['GET'])
def health_check(request):
    """
    GET /api/health/
    Simple health check endpoint to confirm the backend is running.
    """
    return Response({
        'status': 'ok',
        'service': 'orbit-backend',
        'version': '0.1.0',
    })


class ProfileView(APIView):
    """
    GET: Returns the single user profile (creates default record if empty).
    PUT/PATCH: Updates the single profile record.
    """

    def get_object(self):
        profile = Profile.objects.first()
        if not profile:
            profile = Profile.objects.create()
        return profile

    def get(self, request):
        profile = self.get_object()
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request):
        profile = self.get_object()
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request):
        profile = self.get_object()
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GoalViewSet(viewsets.ModelViewSet):
    """
    CRUD ViewSet for Goal model.
    """
    queryset = Goal.objects.all().order_by('-created_at')
    serializer_class = GoalSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    """
    CRUD ViewSet for Project model.
    """
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer


class IdeaViewSet(viewsets.ModelViewSet):
    """
    CRUD ViewSet for Idea model.
    """
    queryset = Idea.objects.all().order_by('-created_at')
    serializer_class = IdeaSerializer
