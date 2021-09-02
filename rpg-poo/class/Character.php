<?php
    class Character {

        // Définitons des propriétés
        // --

        private static $ptsRequiredNextLevel = [3, 6, 9];
        protected $name;
        protected $health;
        protected $strengh;
        protected $mana;
        private $inventory;
        public $level;
        public $xp;

        // Constructeur
        // --

        /**
        * @param string $name Le nom du personnage.
        * @param int $strengh La force du joueur, par défaut il est a 10.
        * @param int $mana La mana du joueur, par défaut il est a 10.
        * @return void Ne retourne rien
        */
        public function __construct($name, $strengh = 10, $mana = 10)
        {
            $this->name = $name;
            $this->health = 100;
            $this->strengh = $strengh;
            $this->mana = $mana;
            $this->inventory = [];
            $this->level = 0;
            $this->xp = 0;
        }


        // Fonctions
        // --

        /**
        * @param object $character Le joueur a attaqué.
        * @return void Ne retourne rien.
        */
        protected function checkXP($character) {
            // On vérifie si le joueur attaqué est mort.
            if ($character->health <= 0) {

                $character->health = 0;

                echo $this->name . ' a gagné 1 point d\'expérience !<br><br>';
                $this->xp++;

                // On vérifie si l'expérience du joueur est arrivé à un stade pour level UP.
                if ($this->xp == in_array($this->xp, self::$ptsRequiredNextLevel))
                {
                    $this->level++;
                    echo $this->name . ' passe au niveau ' . $this->level . ' !';
                }
            }

            return;
        }

        /**
        * @param object $character Le joueur a attaqué. 
        * @return object $this Retourne l'objet actuel.
        */
        public function attack($character)
        {
            // On vérifie si le joueur est en vie.
            if ($this->health <= 0)
            {
                echo $this->name . ' ne peut pas attaquer car il/elle est mort(e) !<br><br>';
                return;
            } else if ($character->health <= 0) {
                echo $this->name . ' ne peut pas attaquer \'' . $character->name . '\' car il/elle est déjà mort !<br><br>';
                return;
            }

            $this->checkXP($character);

            echo $this->name . " a attaqué " . $character->name . " avec sa force et a infligé " . $this->strengh * 2 . " de dégâts !<br>";
            $character->health -= $this->strengh * 2;
            echo $character->name . " est désormais a " . $character->health . " de vie.<br><br>";

            return $this;
        }

        /**
        * @param object L'item est attendu.
        * @return object Retourne l'objet actuel. 
        */
        public function pick($item)
        {
            // On vérifie si le joueur est en vie.
            if ($this->health <= 0)
            {
                echo $this->name . ' ne peut pas ramasser un item car il/elle est mort(e) !<br><br>';
                return;
            }

            echo $this->name . " ramasse un/une " . strtolower($item->getName()) . ".<br><br>";
            array_push($this->inventory, $item);
            return $this;
        }

        /**
        * @param object L'item a utilisé.
        * @return object Retourne l'objet actuel. 
        */
        public function use($item)
        {
            // On vérifie si le joueur est en vie.
            if ($this->health <= 0)
            {
                echo $this->name . ' ne peut pas utiliser \'' . $item->getName() . '\' car il/elle est mort(e) !<br><br>';
                return;
            }

            // On vérifie si le joueur posséde l'item dans son inventaire.
            if(!in_array($item, $this->inventory)) {
                echo $this->name . ' ne peut pas utiliser \'' . $item->getName() . '\' car il/elle ne posséde pas l\'item dans son inventaire.';
                return;
            }

            // On vérifie si l'item a utilisé a bien une utilité.
            if( empty($item->getUtility()) ) {
                echo $this->name . ' ne peut pas utiliser \'' . $item->getName() . '\' car l\'item n\'a aucune utilité.';
                return;
            }

            echo $this->name . ' utilise \'' . $item->getName() . '\'.<br>';

            // On applique les effets de l'item sur le joueur.
            foreach ($item->getUtility() as $key => $value) {
                
                if ($key == "mana")
                {
                    $this->mana += $value;
                    echo $this->name . ' a gagné ' . $value . ' point(s) de mana !<br>';
                    echo $this->name . " est désormais a " . $this->mana . " de mana.<br><br>";
                }
                else if ($key == "strengh")
                {
                    $this->strengh += $value;
                    echo $this->name . ' a gagné ' . $value . ' point(s) de force !<br>';
                    echo $this->name . " est désormais a " . $this->strengh . " de force.<br><br>";
                }
                else if ($key == "health")
                {
                    $this->health += $value;
                    echo $this->name . ' a gagné ' . $value . ' point(s) de vie !<br>';
                    echo $this->name . " est désormais a " . $this->health . " de vie.<br><br>";
                }
            }

            // On enlève l'item utilisé de l'inventaire du joueur.
            unset($this->inventory[array_search($item, $this->inventory)]);
            return $this;
        }

    }