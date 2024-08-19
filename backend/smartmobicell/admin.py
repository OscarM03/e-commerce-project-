from django.contrib import admin
from .models import Category, Products, DisplayProduct, OfferProduct

admin.site.register(Category)
admin.site.register(Products)
admin.site.register(DisplayProduct)
admin.site.register(OfferProduct)