# Generated by Django 5.0.7 on 2024-08-16 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smartmobicell', '0002_rename_product_products'),
    ]

    operations = [
        migrations.AddField(
            model_name='displayproduct',
            name='image',
            field=models.ImageField(default='smartmobicell/defaults/defaultimg.png', upload_to='smartmobicell/files/media'),
        ),
        migrations.AddField(
            model_name='offerproduct',
            name='image',
            field=models.ImageField(default='smartmobicell/defaults/defaultimg.png', upload_to='smartmobicell/files/media'),
        ),
        migrations.AddField(
            model_name='products',
            name='image',
            field=models.ImageField(default='smartmobicell/defaults/defaultimg.png', upload_to='smartmobicell/files/media'),
        ),
    ]
