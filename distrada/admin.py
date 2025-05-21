from django.contrib import admin
from .models import *

# Registra el modelo en la administración de Django
admin.site.register(Producto)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAdress)
