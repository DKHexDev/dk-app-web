// On déclare les variables
const BtnLeft = document.getElementById("BtnLeft");
const BtnTop = document.getElementById("BtnTop");
const BtnBottom = document.getElementById("BtnBottom");
const BtnRight = document.getElementById("BtnRight");
const BtnReset = document.getElementById("BtnReset");
const element = document.getElementById("elementCube");
const inputSpeed = document.getElementById("vitesse");

// Variables des coordonnées X et Y.
let x = 0;
let y = 0;

// Fonction qui sert à bouger le cube.
function Utilities(args, speed = parseInt(inputSpeed.value)) {
    switch (args) {
        case 'ArrowLeft': x -= speed; element.style.transform = `translate(${x}px, ${y}px)`; break;
        case 'ArrowRight': x += speed; element.style.transform = `translate(${x}px, ${y}px)`; break;
        case 'ArrowUp': y -= speed; element.style.transform = `translate(${x}px, ${y}px)`; break;
        case 'ArrowDown': y += speed; element.style.transform = `translate(${x}px, ${y}px)`; break;
        case ' ': x = 0; y = 0; element.style.transform = `translate(0px, 0px)`; element.classList.toggle("animation-square-reset"); setTimeout(function() { element.classList.toggle("animation-square-reset"); }, 500); break;
    }
    
};

// Quand on clique sur le bouton de la gauche.
BtnLeft.onclick = function() {
    Utilities('ArrowLeft');
};

// Quand on clique sur le bouton du haut.
BtnTop.onclick = function() {
    Utilities('ArrowUp');
};

// Quand on clique sur le bouton du bas.
BtnBottom.onclick = function() {
    Utilities('ArrowDown');
};

// Quand on clique sur le bouton de la droite.
BtnRight.onclick = function() {
    Utilities('ArrowRight');
};

// Quand on clique sur le bouton reset.
BtnReset.onclick = function() {
    Utilities(' ');
};

// Quand on appuie sur Gauche, Droite, Haut, Bas ou Espace sur le clavier.
document.onkeyup = function(evenement) {
    Utilities(evenement.key);
};

// Enlève la classe 'animation-square' du cube après le chargement de la page. (0.5s après que la page soit charger)
setTimeout(function() {
    element.classList.toggle("animation-square-reset");
}, 500);