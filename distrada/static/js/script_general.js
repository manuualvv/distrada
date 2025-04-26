document.addEventListener("DOMContentLoaded", function () {
  // CART
  const cartModal = document.querySelector(".cart-modal");
  const cartBtn = document.querySelector(".carro");

  cartBtn.addEventListener("click", function () {
    cartModal.classList.toggle("hidden");
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") cartModal.classList.add("hidden");
  });

  //   TOGGLE MODAL CARD
  const productCard = document.querySelector(".product_card");
  const productCloseBtn = document.querySelector(".product_closebtn");
  const container_products = document.querySelectorAll(".card");
  const overlay = document.querySelector(".overlay");
  const productos = document.querySelectorAll(".producto");

  const hideModal = function () {
    // OCULTA MODAL
    productCard.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  };

  // POR CADA PRODUCTO DEL SWIPER
  container_products.forEach((card) => {
    card.addEventListener("click", hideModal);
  });

  // POR CADA PRODUCTO DE LA GRID
  productos.forEach((producto) => {
    producto.addEventListener("click", hideModal);
  });

  // CERRAR CON X
  productCloseBtn.addEventListener("click", hideModal);
  //   CERRAR CLICKEANDO FUERA
  overlay.addEventListener("click", hideModal);

  //   CART EVENTS
  const updateBtn = document.querySelector(".update-cart"); // BOTON AÑADIR CARRITO DE MODAL
  updateBtn.addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log("id:", productId, "action:", action);
    console.log("USER:", user);
    if (user === "AnonymousUser") {
      console.log("User is not logged in.");
    } else {
      updateUserOrder(productId, action);
    }
  });

  const updateUserOrder = function (productId, action) {
    console.log("User is logged in. Sending data...");
    var url = "update_item/"; // url donde se manda la data
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        action: action,
      }),
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log("data:", data);
      });
  };
});
