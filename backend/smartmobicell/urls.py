from django.urls import path
from .views import HomePageView

urlpatterns = [
    path('<str:section>/', HomePageView.as_view(), name='home-page'),
    path('<str:section>/<str:id>/', HomePageView.as_view(), name='home-page-detail'),
]