from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer, ProductSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Products


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ProductList(APIView):
    authentication_classes = []  # Disable authentication
    permission_classes = []       # Disable permission checks

    def get(self, request):
        products = Products.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)