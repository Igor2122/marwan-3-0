<?php 

include_once '../classes/recep.class.php';

include_once '../js.main.js';

$cat = new Recep();
$result = $cat->getAllCategries();

?>
   <?php if($result) :?>
      <ul class="nav flex-column">
         <li class="nav-item">
            <?php foreach($result as $li) :?>
               <h1><a class="nav-link" id="<?= $li['categ_id']?>" href="#"> <?= $li['name'] ?></a></h1>
            <?php endforeach ?>
         </li>
      </ul>
   <?php else : ?>
      <h2>No Results Found</h2>
   <?php endif ?>