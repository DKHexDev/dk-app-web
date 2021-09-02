<?php
    final class Item {

        // Définitions des propriétés
        // --

        private $name;
        private $utility;
        

        // Constructeur
        // --

        /**
        * @param string $name Nom de l'item.
        * @param array $name L'utilité ou les utilités de l'item. (Ex. ["mana" => 10])
        * @return void Ne retourne rien.
        */
        public function __construct($name, $utility = [])
        {
            $this->name = $name;
            $this->utility = $utility;
        }

        // Fonctions
        // --

        /**
        * @return string Retourne le nom de l'item. 
        */
        public function getName()
        {
            return $this->name;
        }

        /**
        * @return string Retourne l'utilité de l'item. 
        */
        public function getUtility()
        {
            return $this->utility;
        }

    }