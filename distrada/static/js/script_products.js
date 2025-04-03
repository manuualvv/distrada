document.addEventListener("DOMContentLoaded", function () {
  // 1. Funcionalidad para el div desplegable de filtros
  const toggleButton = document.getElementById("toggle-filters");
  const filterBlock = document.querySelector(".collapsible-block");

  // Agrega el evento click para alternar la clase "open"
  toggleButton.addEventListener("click", function () {
    filterBlock.classList.toggle("open");
  });

  // 2. Funcionalidad para actualizar los productos
  // Seleccionamos todos los botones de ordenamiento (deben tener la clase "order-btn")
  const orderButton = document.querySelector(".order-btn-price");
  // Seleccionamos el contenedor donde se muestran los productos.
  const container = document.querySelector(".container_products");

  // Ordering boolean
  let ascending = false;

  // Ordering urls
  const ascUrl = orderButton.getAttribute("data-asc-url");
  const descUrl = orderButton.getAttribute("data-desc-url");

  // Función para realizar la petición fetch.
  function fetchOrderedProducts(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        return response.text();
      })
      .then((html) => {
        // Actualizamos el contenido del contenedor con la respuesta.
        container.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error al actualizar productos:", error);
        container.innerHTML = "<p>Error al cargar productos.</p>";
      });
  }

  // Asignamos el evento click a cada botón.
  orderButton.addEventListener("click", function (e) {
    e.preventDefault();
    const url = ascending ? ascUrl : descUrl;
    fetchOrderedProducts(url);
    if (ascending) {
      orderButton.textContent = "Ordenar por precio: mayor a menor";
    } else {
      orderButton.textContent = "Ordenar por precio: menor a mayor";
    }

    // Boolean trigger
    ascending = !ascending;
  });
});

// CERRAR VENTANA MODAL
document.addEventListener("DOMContentLoaded", function () {
  // SELECCIÓN DE ITEMS
  const productCard = document.querySelector(".product_card");
  const productCloseBtn = document.querySelector(".product_closebtn");
  const productos = document.querySelectorAll(".producto");
  const overlayModal = document.querySelector(".overlay_modal");

  // ITERACIÓN EN CADA PRODUCTO
  productos.forEach((producto) => {
    producto.addEventListener("click", function () {
      productCard.classList.remove("hidden");
      overlayModal.classList.remove("hidden");
    });
  });

  // OCULTAR MODAL
  const hideModal = function () {
    productCard.classList.add("hidden");
    overlayModal.classList.add("hidden");
  };
  productCloseBtn.addEventListener("click", hideModal);
  overlayModal.addEventListener("click", hideModal);
});
