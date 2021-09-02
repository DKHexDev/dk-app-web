<?php
    require_once './class/Item.php';
    require_once './class/Character.php';
    require_once './class/Warrior.php';
    require_once './class/Hunter.php';
    require_once './class/Magus.php';

    $potion = new Item('Potion de soin', ["health" => 20]);
    $sword = new Item('Épée', ["strengh" => 30]);
    $superpotion = new Item('Super Potion', ["health" => 50, "mana" => 50, "strengh" => 50]);
    $supersword = new Item('Super Sword', ["strengh" => 100]);

    $aragorn = new Warrior('Aragorn');
    $legolas = new Hunter('Legolas');
    $gandalf = new Magus('Gandalf');
    $orc = new Warrior('Orc');
    $wereWolf = new Magus('Loup-Garou');
    
    echo '<br><br><hr> Aragorn : <pre>';
    print_r($aragorn);

    echo '</pre><hr><br> Legolas : <pre>';
    print_r($legolas);

    echo '</pre><hr><br> Gandalf : <pre>';
    print_r($gandalf);

    echo '</pre><hr><br><br>';

    $aragorn->attack($legolas);

    $aragorn->pick($sword);

    $aragorn->attack($wereWolf)->attack($wereWolf)->attack($wereWolf);
    $aragorn->attack($orc)->attack($orc)->attack($orc);
    $aragorn->attack($gandalf)->attack($gandalf)->attack($gandalf);

    echo '<br>L\'experience de Aragorn : ' . $aragorn->level . '<br>';

    echo 'Le niveau de Aragorn : ' . $aragorn->level . '<br>';

    $orc->attack($aragorn);

    $aragorn->pick($potion)->use($potion);

    $aragorn->attack($orc);

    $legolas->pick($superpotion)->use($superpotion);

    $legolas->pick($supersword);

    $legolas->use($supersword);