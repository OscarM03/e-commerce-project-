from django.db import models
from shortuuid.django_fields import ShortUUIDField


class Category(models.Model):
    """Categories table"""
    id = ShortUUIDField(primary_key=True, unique=True, length=10, max_length=20, alphabet="abcdef123456")
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    


class Products(models.Model):
    """Products table"""
    id = ShortUUIDField(primary_key=True, unique=True, length=10, max_length=20, alphabet="abcdef123456")
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="images/", null=True)
    discount = models.IntegerField(default=0)
    type = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated_at', '-created_at']

    def __str__(self):
        return self.name
    

class DisplayProduct(models.Model):
    """DisplayProduct table"""
    id = ShortUUIDField(primary_key=True, unique=True, length=10, max_length=20, alphabet="abcdef123456")
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="images/", null=True)
    discount = models.IntegerField(default=0)
    brand = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class OfferProduct(models.Model):
    """Special offer products table"""
    id = ShortUUIDField(primary_key=True, unique=True, length=10, max_length=20, alphabet="abcdef123456")
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    image = models.ImageField(upload_to="images/", null=True)

    def __str__(self):
        return self.name