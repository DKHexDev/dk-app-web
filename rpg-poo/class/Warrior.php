<?php
    final class Warrior extends Character {


        // Constructeur
        // --

        /**
        * @param string $name Nom du joueur attendu.
        * @return void Ne retourne rien.
        */
        public function __construct($name)
        {
            parent::__construct($name, 20);
        }


    }