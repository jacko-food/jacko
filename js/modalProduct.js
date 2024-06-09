async function modalProduct(id) {
    document.body.style.overflow = 'hidden';
    document.querySelector(".modal-product").style.display = 'block';

    async function openModalProduct(data) {
        console.log(data)
        const menuContainer = document.querySelector('.modal');
        return menuContainer.innerHTML = `
            <div class="modal-top-banner"> <button onclick="closeProductModal()"><i class="fa-regular fa-circle-xmark"></i></button></div>
            <div class="modal-content">
                <div class="modal-image"><img src="${data.image1}" alt=""></div>
                <div class="modal-content-info">
                 <h2>${data.titleAm}</h2>
                 <p>${data.descriptionAm}</p>
                 <p class="modal-product-price">${data.price}</p>
                 <button>Պատվիրել հիմա</button>
                </div>
            </div>  
        `;
    }

    async function openModal() {
        document.querySelector('.modal').style.display = 'block';
        setTimeout(function () {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.modal').classList.add('active');
        }, 200)
    }

    async function fetchJSON(id) {
        return fetch('inc/menu.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.menu.find(item => item.id === id);
            })
            .catch(error => {
                console.error(error);
            });
    }

    await fetchJSON(id)
        .then(async product => {
            // console.log(product);
            await openModalProduct(product);
            await openModal();
        });


}

function closeProductModal() {
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('.loading').style.display = 'none';
    setTimeout(function () {
        document.querySelector('.modal').style.display = 'none';
        document.body.style.overflowY = 'scroll';
        document.querySelector(".modal-product").style.display = 'none';
        document.querySelector('.loading').style.display = 'flex';
    }, 300)
}