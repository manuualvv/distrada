from django.shortcuts import render, get_object_or_404
from .models import Producto


def index(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'productos': productos})


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
    
    
   


