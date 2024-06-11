document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".reviews-items", {
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
