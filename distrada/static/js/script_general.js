document.addEventListener('DOMContentLoaded', function () {
    // ELEMENTS
    const cartModal = document.querySelector('.cart-modal');
    const cartBtn = document.querySelector('.carro');

    cartBtn.addEventListener('click', function () {
        cartModal.classList.toggle('hidden');
    })

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Escape') cartModal.classList.add('hidden');
    })

});