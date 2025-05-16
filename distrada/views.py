import os
from django.shortcuts import render, get_object_or_404
from django.conf import settings
from django.http import JsonResponse
from .models import Producto
import json


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
    
def updateItem(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']
    print('Action:', action)
    print('Product ID:', productId)

# FALTA VER TUTORIAL ANTERIOR ?
    # customer = request.user.customer
    # product = Producto.objects.get(id=productId)
    # order, created = Order.objects.get_or_create(customer=customer, complete=False)


    return JsonResponse('Item was added.', safe=False)
   


