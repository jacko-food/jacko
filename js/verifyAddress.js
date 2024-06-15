async function openAddress() {
    closeCart();
    console.log("open address")
    document.querySelector('.verify-address').style.display = 'block';
    document.querySelector('.verify-address .address').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.verify-address .loading').style.display = 'none';
        document.querySelector('.verify-address .address').classList.add('active');
        document.body.style.overflowY = 'hidden';
    }, 200)

}

function closeAddress() {
    document.querySelector('.verify-address .address').classList.remove('active');
    document.querySelector('.verify-address .loading').style.display = 'none';
    setTimeout(function () {
        document.querySelector('.verify-address .address').style.display = 'none';
        document.querySelector(".verify-address").style.display = 'none';
        document.querySelector('.verify-address .loading').style.display = 'flex';
        document.body.style.overflowY = 'scroll';
    }, 300)
}

function submitAddress(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const addressObject = {
        "username": username,
        "phone": phone,
        "address": address
    }

    localStorage.setItem('address', JSON.stringify(addressObject));
    closeAddress();
    checkAddressStatus();
    openCart();
}

function fillAddressForm() {
    const addressObject = JSON.parse(localStorage.getItem('address'));

    if (addressObject) {
        document.querySelector('.address-form #username').value = addressObject.username;
        document.querySelector('.address-form #phone').value = addressObject.phone;
        document.querySelector('.address-form #address').value = addressObject.address;
    }
    checkAddressStatus();
}

document.addEventListener('DOMContentLoaded', () => {
    fillAddressForm();
});

function checkAddressStatus() {
    const currentAddress = JSON.parse(localStorage.getItem('address'));
    const cartContainer = document.querySelector('.products-container .cart-item');
    if (currentAddress) {
        document.querySelector(".order .order-no-loc").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${currentAddress.address}`;
        console.log(cartContainer)
        if (cartContainer) {
            document.querySelector('.order .start-order-button').removeAttribute('disabled');
        } else {
            document.querySelector('.order .start-order-button').setAttribute('disabled', 'disabled');
        }
    }
}

