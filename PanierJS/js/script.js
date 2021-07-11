// Les variables.
var productList = document.querySelector('.card-deck');

// Les évenements.
productList.onclick = function(evenement) {
    if (evenement.target.localName == 'button') {
        var btnAdd = evenement.target;
        var product = evenement.target.offsetParent;

        // On construi l'objet du produit.
        var productObject = {
            id: product.id,
            image: product.querySelector('img').src,
            title: product.querySelector('.card-title').innerText,
            description: product.querySelector('.card-text').innerText,
            price: product.querySelector('.card-footer h3').innerText
        };

        // Transformation de l'objet en string.
        var productObjectString = JSON.stringify(productObject);

        // On stock le produit dans le localStorage.
        localStorage.setItem(product.id, productObjectString);
    };
};