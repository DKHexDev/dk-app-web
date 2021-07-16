class Carousel {

    // Constructeur de class.
    constructor(id, height, timeout) {
        // Configuration
        this.id = id;
        this.carousel = document.getElementById(id);
        this.items = this.carousel.querySelector('.carousel-items').children;
        this.itemIndex = 0;

        // On vérifie si l'option 'height' est défini.
        if (height) {
            this.height = height;
        } else {
            this.height = "50vh";
        }

        for(this.img of carousel.querySelectorAll('img')) {
            this.img.style.height = this.height;
            console.log(this.img.style);
        }

        // On vérifie si l'option timeout est défini.
        if (timeout) {
            this.timeout = timeout;
        } else {
            this.timeout = 7000;
        }

        // Ajout de l'interval pour rendre le carousel automatique.
        setInterval(() => { this.next() }, this.timeout);
        
        // Ajout des boutons.
        this.btnNext = this.carousel.querySelector('.next');
        this.btnPrev = this.carousel.querySelector('.prev');

        // Ajout des évènements
        this.btnNext.onclick = () => { this.next() };
        this.btnPrev.onclick = () => { this.prev() };


    }

    // Déclaration des méthodes.
    next() {
        this.items[this.itemIndex].children[0].classList.add('slide-out-left');
        this.items[this.itemIndex].children[1].classList.add('slide-out-left');
          
        setTimeout(() => {
            this.items[this.itemIndex].children[0].classList.remove('slide-out-left');
            this.items[this.itemIndex].children[1].classList.remove('slide-out-left');
            this.items[this.itemIndex].classList.remove('view');      

            if (this.itemIndex == this.items.length -1) {
                this.itemIndex = 0;
            } else {
                this.itemIndex++;
            }

            this.items[this.itemIndex].children[0].classList.add('slide-in-right');
            this.items[this.itemIndex].children[1].classList.add('slide-in-right');
            this.items[this.itemIndex].classList.add('view');

            setTimeout(() => {
                this.items[this.itemIndex].children[0].classList.remove('slide-in-right');
                this.items[this.itemIndex].children[1].classList.remove('slide-in-right');
            }, 500);
        }, 400);
        
    }

    prev() {
        this.items[this.itemIndex].children[0].classList.add('slide-out-right');
        this.items[this.itemIndex].children[1].classList.add('slide-out-right');

        setTimeout(() => {
            this.items[this.itemIndex].children[0].classList.remove('slide-out-right');
            this.items[this.itemIndex].children[1].classList.remove('slide-out-right');
            this.items[this.itemIndex].classList.remove('view');

            if (this.itemIndex == 0) {
                this.itemIndex = this.items.length -1;
            } else {
                this.itemIndex--;
            }

            this.items[this.itemIndex].children[0].classList.add('slide-in-left');
            this.items[this.itemIndex].children[1].classList.add('slide-in-left');
            this.items[this.itemIndex].classList.add('view');

            setTimeout(() => {
                this.items[this.itemIndex].children[0].classList.remove('slide-in-left');
                this.items[this.itemIndex].children[1].classList.remove('slide-in-left');
            }, 500);
        }, 300);
    }
}