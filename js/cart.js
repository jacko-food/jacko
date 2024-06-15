checkCartItemsCount()

function openCart() {
    document.body.style.overflow = 'hidden';
    console.log("cart opened")
    document.querySelector('.cart').classList.add("active");
    setTimeout(function () {
        document.querySelector('.cart .cart-inner').classList.add("active");
    }, 1)
    checkAddressStatus();
}

function closeCart() {
    console.log("cart closed")
    document.querySelector('.cart .cart-inner').classList.remove("active");
    setTimeout(function () {
        document.querySelector('.cart').classList.remove("active");
        document.body.style.overflowY = 'scroll';
    }, 200)
}

function checkCartItemsCount() {
    let count = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key.startsWith('productID:')) {
            count++;
        }
    }

    const cart = document.querySelector(".menu-buttons button:nth-child(2) span")
    cart.textContent = count;
}

function productCount(state, productId) {
    const productCountElement = document.querySelector(`.cart-container #cart-item-${productId} #current-product-counter`);
    let currentCount = parseInt(productCountElement.textContent);

    if (state === 'plus') {
        currentCount++;
    } else {
        currentCount--;
        if (currentCount < 1) {
            currentCount = 1;
        }
    }

    productCountElement.textContent = currentCount;
}

function updateAllProductsPrice() {
    checkAddressStatus();
    const productsPrices = document.querySelectorAll('.cart-item .cart-info .price-and-buy');
    console.log(productsPrices);
    let TotalPrice = 0

    productsPrices.forEach(productPrice => {
        const countElement = productPrice.querySelector('.product-count #current-product-counter');
        const priceElement = productPrice.querySelector('.price');
        if (priceElement && countElement) {
            const count = countElement.textContent.trim();
            const price = priceElement.textContent.trim();
            TotalPrice = TotalPrice + (price * count);
        }
    });

    document.querySelector('.order-info-title #order-all-price').textContent = TotalPrice + "֏";
}

function removeProductsByPrefix(prefix) {
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            localStorage.removeItem(key);
        }
    }
}

function orderNow() {
    const productsInCart = document.querySelectorAll('.cart-item');
    let orderObject = {
        products: [],
        only: 0
    };

    productsInCart.forEach(productsInfo => {
        const productNameElement = productsInfo.querySelector('.cart-info strong');
        const countElement = productsInfo.querySelector('.product-count #current-product-counter');
        const priceElement = productsInfo.querySelector('.price');
        const idElement = productsInfo.getAttribute('id');

        if (productNameElement && countElement && priceElement && idElement) {
            const id = idElement.trim();
            const name = productNameElement.textContent.trim();
            const count = parseInt(countElement.textContent.trim(), 10);
            const price = parseFloat(priceElement.textContent.trim());

            if (!isNaN(count) && !isNaN(price)) {
                orderObject.products.push({
                    productId: id,
                    productName: name,
                    productPrice: price,
                    productCount: count
                });

                orderObject.only += price * count;
            }
        }
    });

    console.log(orderObject);
    removeProductsByPrefix('productID:')
    localStorage.setItem('orderObject', JSON.stringify(orderObject));
    window.location.href = 'order.html';
}


