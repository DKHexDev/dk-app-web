var table = document.querySelector('table');
var btnRemoveAll = document.getElementById('BtnRemoveAllCart')

if (localStorage.length > 0) {
    for (key in localStorage) {
        var product = JSON.parse(localStorage.getItem(key));

        if(product) {
            var tbody = document.querySelector('table tbody');

            tbody.innerHTML += `<tr>
                                    <th scope="row">${product.id}</th>
                                    <td><img src="${product.image}" class="CartIMG"></td>
                                    <td>${product.title}</td><td>${product.description}</td>
                                    <td>${product.price}</td>
                                    <td>
                                        <button type="button" id="BtnAddRemove" class="btn btn-danger btn-sm">
                                            <i class="bi bi-cart-dash-fill"></i> Supprimer
                                        </button>
                                    </td>
                                </tr>`;
        }
    }
} else {
    table.innerHTML = "<h4 class='text-center'>Votre panier est vide !</h4>";
};

table.addEventListener("click", function(evenement) {
    if (evenement.target.localName == 'button') {
        localStorage.removeItem(evenement.target.parentNode.parentNode.querySelector('th').textContent);
        evenement.target.parentNode.parentNode.remove();

        if (localStorage.length <= 0) {
            table.innerHTML = "<h4 class='text-center'>Votre panier est vide !</h4>";
        }
    }
});

btnRemoveAll.addEventListener("click", function(evenement) {
    localStorage.clear();
    if (evenement.target.querySelector('tr')) {
        evenement.target.remove();
    }
    table.innerHTML = "<h4 class='text-center'>Votre panier est vide !</h4>";
    evenement.target.remove();
});