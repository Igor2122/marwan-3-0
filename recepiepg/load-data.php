<?php 



$show = $_POST;

include_once 'classes/recep.class.php';
        
        $con = new Recep();
        $res = $con->getAllRec();

        if ($res) {
         # code...
         foreach ($res as $l ) {
            echo $l['name'];
         }
      } else {
         echo 'There are no recepies';
      } 
