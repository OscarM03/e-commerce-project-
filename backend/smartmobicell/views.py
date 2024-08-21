from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from .models import Product, DisplayProduct, OfferProduct, PickOfTheWeek, Laptop
from .serializers import (
    UserSerializer, ProductSerializer, 
    DisplayProductSerializer, OfferProductSerializer, 
    PickOfTheWeekSerializer, LaptopsSerializer
)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class HomePageView(APIView):
    authentication_classes = []  # Disable authentication
    permission_classes = []       # Disable permission checks

    # Define mappings between section names and models/serializers
    section_mapping = {
        'products': (Product, ProductSerializer),
        'displayproducts': (DisplayProduct, DisplayProductSerializer),
        'offerproduct': (OfferProduct, OfferProductSerializer),
        'pickoftheweek': (PickOfTheWeek, PickOfTheWeekSerializer),
        'laptops': (Laptop, LaptopsSerializer),
        'accessories': (Product, ProductSerializer)
    }

    def get(self, request, section, id=None):
        if section not in self.section_mapping:
            return Response({'error': 'Invalid section'}, status=400)

        model, serializer_class = self.section_mapping[section]

        # Handle the case when an id is provided
        if id is not None:
            if section == 'accessories':
                product = get_object_or_404(model, id=id, is_accessory=True)
            else:
                product = get_object_or_404(model, id=id)
            serializer = serializer_class(product)
            return Response(serializer.data)

        # Handle the case when no id is provided (list all products in the section)
        query = request.GET.get('q', '')  # Get the search query from the request
        products = model.objects.all()

        # Apply filters based on the section and query
        if section == 'accessories':
            products = products.filter(is_accessory=True)
        if query:
            if section == 'products':
                products = products.filter(
                    Q(name__icontains=query) |
                    Q(brand__icontains=query) |
                    Q(category__name__icontains=query)
                )
            # Add additional filtering logic for other sections if needed

        # Special handling for specific sections
        if section == 'offerproduct':
            product = products.order_by('-created_at').first()  # Get the latest product
            serializer = serializer_class(product) if product else serializer_class([])  # Serialize if item exists
        elif section == 'pickoftheweek':
            products = products.order_by('-created_at')[:2]  # Get the top 2 products
            serializer = serializer_class(products, many=True)  # Serialize the list of items
        else:
            serializer = serializer_class(products, many=True)  # Default case

        return Response(serializer.data)

