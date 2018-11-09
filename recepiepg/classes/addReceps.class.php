<?php 

include_once 'recep.class.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    $category = $_POST['category'];
    $ingredients = $_POST['ingredients'];
    $directions = $_POST['directions'];
    $level = $_POST['level'];
    $description = $_POST['description'];
    
    echo $level;

    $addingRecep = new Recep();
    $addingRecep->insert($name, $category, $ingredients, $directions, $level, $description);
}