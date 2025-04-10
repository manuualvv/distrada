var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// NO SÉ SI UTILIZARLO DE MOMENTO
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//     // } else {
//     //   entry.target.classList.remove("show");
//     // }
//   });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  // ||| MODAL_SLIDER ||| SELECCIÓN DE ITEMS
  const productCard = document.querySelector(".product_card");
  const productCloseBtn = document.querySelector(".product_closebtn");
  const container_products = document.querySelectorAll(".card");
  const overlay = document.querySelector(".overlay");

  // ||| MODAL_SLIDER ||| ITERACIÓN EN CADA PRODUCTO
  container_products.forEach((card) => {
    card.addEventListener("click", function () {
      productCard.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
  });

  // ||| MODAL_SLIDER ||| CERRAR CON BOTON X
  productCloseBtn.addEventListener("click", function () {
    productCard.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  // ||| CHANGE_STYLE ||| SELECCIÓN DE ITEMS
  const changeStyleBtns = document.querySelectorAll(".change-style-btn");
  const heroSection = document.querySelector(".section-hero"); // PROBANDO
  const heroText1 = document.querySelector(".hero-text"); // PROBANDO
  const heroImg = document.querySelector(".hero-img"); // PROBANDO

  // ||| CHANGE_STYLE ||| ON CLICK
  changeStyleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("btn--1")) {
        console.log("DEBUG BOTON 1");
        heroSection.style.backgroundImage =
          "linear-gradient( #f1f1f1, rgb(107, 30, 30))";
        heroText1.textContent = "Colección de remeras SR"; // PROBANDO
        heroImg.src = heroImg.dataset.lucas;
      } else if (btn.classList.contains("btn--2")) {
        console.log("DEBUG BOTON 2");
        heroSection.style.backgroundImage =
          "linear-gradient(rgb(123, 165, 241), #356d9b)";
        heroText1.textContent = "Colección de remeras SR"; // PROBANDO
        heroImg.src = heroImg.dataset.manu;
      } else {
        console.log("DEBUG BOTON 3");
        heroSection.style.backgroundImage =
          "linear-gradient(rgb(255, 255, 255), #f1f1f1)";
        heroText1.textContent = "Tenemos una nueva colección para ustedes"; // PROBANDO
        heroImg.src = "{% static 'img/hero-martos.png' %}";
        heroImg.src = heroImg.dataset.martos;
      }
      // PARA CADA COLOR (ESTILO), CREAR UNA CLASE Y JUGAR CON LOS ESTILOS
    });
  });
});
