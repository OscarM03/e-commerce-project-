from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Category, Products, OfferProduct, DisplayProduct

class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    email = serializers.EmailField()

    class Meta:
        model = User
        fields = ["id", "username", "password", "confirm_password", "email"]
        extra_kwargs = {
            "password": {"write_only": True},
            "confirm_password": {"write_only": True}
        }

    def validate(self, data):
        if data.get("password") != data.get("confirm_password"):
            raise serializers.ValidationError({"confirm_password": "Passwords do not match"})
        return data

    def create(self, validated_data):
        validated_data.pop("confirm_password", None)
        user = User.objects.create_user(**validated_data)
        # send_verification_email(user)
        return user

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferProduct
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisplayProduct
        fields = '__all__'