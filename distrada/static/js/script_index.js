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
  // SELECCIÓN DE ITEMS
  const productCard = document.querySelector(".product_card");
  const productCloseBtn = document.querySelector(".product_closebtn");
  const container_products = document.querySelectorAll(".card");
  const overlay = document.querySelector(".overlay");

  // ITERACIÓN EN CADA PRODUCTO
  container_products.forEach((card) => {
    card.addEventListener("click", function () {
      productCard.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
  });
});
