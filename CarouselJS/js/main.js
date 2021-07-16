// On récupère tous les carousels.
let carousels = document.querySelectorAll('.carousel');

// On boucle sur la liste des carousels.
for (carousel of carousels) {
    // On instancie les class Carousel.
    new Carousel(carousel.id, "30vh", 5000);
}
