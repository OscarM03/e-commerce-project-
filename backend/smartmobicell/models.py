from django.db import models
from shortuuid.django_fields import ShortUUIDField

class Category(models.Model):
    """Categories table"""
    id = ShortUUIDField(primary_key=True, unique=True, length=10, max_length=20, alphabet="abcdef123456")
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    """Products table"""
    id = ShortUUIDField(primary_key=True, unique=True, length=10, max_length=20, alphabet="abcdef123456")
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    Original = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    discount = models.IntegerField(default=0)
    is_accessory = models.BooleanField(default=False)
    brand = models.CharField(max_length=100)
    features = models.JSONField(default=dict, blank=True)
    additional_info = models.TextField(null=True, blank=True)
    thumbnail_1 = models.ImageField(upload_to="thumbnails/", null=True, blank=True)
    thumbnail_2 = models.ImageField(upload_to="thumbnails/", null=True, blank=True)
    thumbnail_3 = models.ImageField(upload_to="thumbnails/", null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated_at', '-created_at']

    def __str__(self):
        return self.name

class DisplayProduct(Product):
    """DisplayProduct table"""
    pass  # Inherits all fields from Product

class OfferProduct(Product):
    """Special offer products table"""
    description = models.CharField(max_length=100)
    period = models.CharField(max_length=100)

class PickOfTheWeek(Product):
    """Pick of the week table"""
    major_info = models.CharField(max_length=100)
    more_info = models.CharField(max_length=100)
    added_info = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Pick of the week"
        verbose_name_plural = "Pick of the week"

class Laptop(Product):
    """Laptops table"""
    elements = models.CharField(max_length=100)
    storage = models.CharField(max_length=100)
    added_info = models.CharField(max_length=100)