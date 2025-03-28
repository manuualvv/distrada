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
  const orderButtons = document.querySelectorAll(".order-btn");
  // Seleccionamos el contenedor donde se muestran los productos.
  const container = document.querySelector(".container_products");

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
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevenir cualquier comportamiento por defecto
      const url = btn.getAttribute("data-url");
      fetchOrderedProducts(url);
    });
  });
});

// CERRAR VENTANA MODAL
document.addEventListener("DOMContentLoaded", function () {
  // SELECCIÓN DE ITEMS
  const productCard = document.querySelector(".product_card");
  const productCloseBtn = document.querySelector(".product_closebtn");
  const productos = document.querySelectorAll(".producto");
  const overlay = document.querySelector(".overlay");

  // ITERACIÓN EN CADA PRODUCTO
  productos.forEach((producto) => {
    producto.addEventListener("click", function () {
      productCard.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
  });

  // OCULTAR MODAL
  const hideModal = function () {
    productCard.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  productCloseBtn.addEventListener("click", hideModal);
  overlay.addEventListener("click", hideModal);
});
