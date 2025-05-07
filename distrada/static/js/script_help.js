document.addEventListener('DOMContentLoaded', function () {
    faqTitle = document.querySelectorAll(".faq-title");
    faqText = document.querySelector(".faq-collapsible");
    faqTitle.forEach((title) => {
        title.addEventListener('click', function () {
            const collapsible = this.parentElement.querySelector('.faq-collapsible');
            collapsible.classList.toggle('faq-open');
        })
    });
})