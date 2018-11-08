<?php 

include_once '../classes/recep.class.php';

$cat = new Recep();
$result = $cat->getAllCategries();

foreach ($result as $li) {

   echo "<ul class='nav flex-column'>";
   echo "<li class='nav-item'>";
   echo "<a class='nav-link' id=" . $li[categ_id]. "> " . $li['name'] . "</a>";
   echo "</li>";
   echo "</ul>";
} 

