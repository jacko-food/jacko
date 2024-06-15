function foodBuy(productId, productTitle, productPrice, productMass, productImageUrl, productImageAlt) {
    const product = {
        productId: productId,
        productTitle: productTitle,
        productPrice: productPrice,
        productMass: productMass,
        productImageUrl: productImageUrl,
        productImageAlt: productImageAlt
    }

    if (localStorage.getItem(`productID: ${productId}`) === null) {
        localStorage.setItem(`productID: ${productId}`, JSON.stringify(product));
        checkCartItemsCount();
        addCartItem(productId);
        updateAllProductsPrice();
    }
}