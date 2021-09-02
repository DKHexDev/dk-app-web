<?php
    final class Hunter extends Character {


        // Constructeur
        // --

        /**
        * @param string $name Nom du joueur attendu.
        * @return void Ne retourne rien.
        */
        public function __construct($name)
        {
            parent::__construct($name);
        }


        // Fonctions
        // --

        /**
        * @return object $this Retourne l'objet actuel.
        */
        public function rangedAttack($character) {
            // On vérifie la vie du joueur qui attaque.
            if ($this->health <= 0)
            {
                echo $this->name . ' ne peut pas attaquer car il/elle est mort(e) !<br><br>';
                return;
            } else if ($character->health <= 0) {
                echo $this->name . ' ne peut pas attaquer \'' . $character->name . '\' car il/elle est déjà mort !<br><br>';
                return;
            }

            $this->checkXP($character);
            
            echo $this->name . " a attaqué à distance " . $character->name . " avec sa force et a infligé " . $this->strengh * 3 . " de dégâts !<br>";
            $character->health -= $this->strengh * 3;
            echo $character->name . " est désormais a " . $character->health . " de vie.<br><br>";


            return $this;
        }

    }