<?php 

// 733838

$show = $_POST;
echo $postId = $_POST['id'];

include_once 'classes/recep.class.php';
        
        $con = new Recep();
        $res = $con->getAllRec(23);

        if ($res) {
         # code...
         foreach ($res as $rec ) {
            // echo "<div class='col-md-4'>";
              echo "<div class='card mb-4 box-shadow'>";
              echo "<img class='card-img-top' src=" . 'img/' .  $rec['image']  . " alt='Card image cap'>";
                echo "<div class='card-body'>";
                  echo "<h5 class='card-title'>" . $rec['name'] . " </h5>";
                    echo "<p class='card-text'>";
                      echo "<h5 class='text-muted'>IGRIDIENTS</h5>";
                     //   echo $con->showListOfIngridAndRecDirectn($rec['description'], 5);
                       echo $con->showListOfIngridAndRecDirectn($rec['description'], 5);
                    echo "</p>";
                  echo "<div class='d-flex justify-content-between align-items-center'>";
                  echo "<div class='btn-group'>";
                  echo "<button type='button' class='btn btn-primary' data-toggle='modal data-target='#exampleModal'>Launch demo modal </button>";
                      echo "<button type='button' class='btn btn-sm btn-outline-secondary'>Edit</button>";
                    echo "</div>";
                    echo "<small class='text-muted'>9 mins</small>";
                  echo "</div>";
                echo "</div>";
              echo "</div>";
            // echo "</div>";
         }
      } else {
         echo 'There are no recepies';
      } 
