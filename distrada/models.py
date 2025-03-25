from django.db import models


class Producto(models.Model):
    nombre = models.CharField(max_length=32)
    # descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=8, decimal_places=0)
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)
    disponible = models.BooleanField(default=True)
    talle = models.CharField(max_length=3, default="M")

    def __str__(self):
        return self.nombre
