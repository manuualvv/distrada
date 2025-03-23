import os
from django.shortcuts import render, get_object_or_404
from .models import Producto
from django.conf import settings


def index(request):
    productos = Producto.objects.all()

    # Ruta absoluta a la carpeta de imágenes en static
    images_path = os.path.join(settings.BASE_DIR, 'static', 'img', 'slider-big')
    
    if not os.path.exists(images_path):
        # Puedes manejar el error, por ejemplo, devolviendo una lista vacía o mostrando un mensaje
        images = []
    
    # Lista de archivos en la carpeta (puedes filtrar por extensión, si lo deseas)
    images = [f for f in os.listdir(images_path) if f.endswith(('.png', '.jpg', '.jpeg', '.gif'))]
    # Puedes construir la ruta relativa para usarlas en el template:
    images = [os.path.join('img/slider-big', f) for f in images]


    return render(request, 'index.html', {'productos': productos, 'images': images,})


def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'products.html', {'productos': productos})


def lista_productos_grid(request):
    orden = request.GET.get('orden', 'asc')
    if orden == 'asc':
        productos = Producto.objects.all().order_by('precio')
    else:
        productos = Producto.objects.all().order_by('-precio')
        
    return render(request, 'products_list.html', {'productos': productos})

def help(request):
    return render(request, 'help.html')
    
    
   


