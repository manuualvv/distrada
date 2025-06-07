from django.db import models
from django.contrib.auth.models import User
# TODOS SON OBJETOS QUE SE RELACIONAN COMO EN EL POO
class Producto(models.Model):
    nombre = models.CharField(max_length=32)
    # descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=8, decimal_places=0)
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)
    disponible = models.BooleanField(default=True)
    talle = models.CharField(max_length=3, default="M")

    def __str__(self):
        return self.nombre
    
    @property
    def imageURL(self):
        if not self.imagen or not getattr(self.imagen, 'name', None):
            return ''
        try:
            return self.imagen.url
        except ValueError:
            return ''
        # try:
        #     url = self.image.url
        # except:
        #     url = ''
        # return url

class Customer(models.Model): 
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
class Order(models.Model): #aparentemente child del customer?
    # una sola order puede tener múltiples orderitem
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    transaction_id = models.CharField(max_length=100, null=True)

    def __str__(self):
        return str(self.id)

class OrderItem(models.Model): #child de un order
    product = models.ForeignKey(Producto, on_delete=models.SET_NULL, null= True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

class ShippingAdress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    address = models.CharField(max_length=200, null=False)
    city = models.CharField(max_length=200, null=False)
    state = models.CharField(max_length=200, null=False)
    zipcode = models.CharField(max_length=200, null=False)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.adress
