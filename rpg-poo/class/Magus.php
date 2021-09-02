<?php
    final class Magus extends Character {


        // Constructeur
        // --

        /**
        * @param string $name Nom du joueur attendu.
        * @return void Ne retourne rien.
        */
        public function __construct($name)
        {
            parent::__construct($name, 10, 20);
        }


        // Fonctions
        // --

        /**
        * @return object $this Retourne l'objet actuel.
        */
        public function castSpell($character) {
            if ($this->health <= 0)
            {
                echo $this->name . ' ne peut pas attaquer car il/elle est mort(e) !<br><br>';
                return;
            } else if ($character->health <= 0) {
                echo $this->name . ' ne peut pas attaquer \'' . $character->name . '\' car il/elle est déjà mort !<br><br>';
                return;
            }

            $this->checkXP($character);

            echo $this->name . " a attaqué " . $character->name . " avec son mana et a infligé " . $this->mana * 3 . " de dégâts !<br>";
            $character->health -= $this->mana * 3;
            echo $character->name . " est désormais a " . $character->health . " de vie.<br><br>";


            return $this;
        }

    }