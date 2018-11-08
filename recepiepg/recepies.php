<?php 

include_once 'inc/_header.php';

include_once 'inc/_nav.php';
 
include_once 'classes/recep.class.php';
        
        // $con = new Recep();
        // $res = $con->getAllRec();
?>

<!--<script src="https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"></script>-->


    
      
      
    <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>
<script>
      $(document).ready(function(){
         var show = '$_POST';
         $(".show").click(function(){
            var id = $(this).prop("id")
             $(".container").load("load-data.php", {show, id});
         });
      });
   </script>
   <div class="container"></div>
   <button class="show" id="1">Show data </button>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            
        <?php foreach($res as $rec) :?>
        <h5><?= $rec['img_id']?></h5>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="img/<?= $rec['image'] ?>" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><?= $rec['name']?></h5>
                    <p class="card-text">
                      <h5 class="text-muted">IGRIDIENTS</h5>
                      <?php 
                        $con->showListOfIngridAndRecDirectn($rec['description'], 5);
                      ?>
                    </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <!--<button type="button" class="btn btn-sm btn-outline-secondary">-->
                        
                      <!--</button>-->
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
            
            <!-- Modals -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><?= $rec['name']?></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <img class="card-img-top" src="img/<?= $rec['image'] ?>" alt="Card image cap">
                      </div>
                      <div class="col-md-6">
                        <?php 
                          $con->showListOfIngridAndRecDirectn($rec['description'], 15);
                        ?>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8">
                        <h3>Directions</h3>
                        <!--$con->showListOfIngridAndRecDirectn($rec['description'], 5);-->
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        <?php endforeach?>
            
          </div>
        </div>
      </div>

    </main>

    <?php include_once 'inc/_footer.php' ?>

