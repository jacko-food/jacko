function openCart() {
    document.body.style.overflow = 'hidden';
    document.querySelector('.cart').classList.add("active");
    setTimeout(function () {
        document.querySelector('.cart .cart-inner').classList.add("active");
    }, 1)
}

function closeCart() {
    document.querySelector('.cart .cart-inner').classList.remove("active");
    setTimeout(function () {
        document.body.style.overflowY = 'scroll';
        document.querySelector('.cart').classList.remove("active");
    }, 200)
}