from rest_framework.decorators import api_view
from rest_framework.response import Response


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
