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


      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <?php 
                include_once 'queryData/load-categor.php';
               ?>
              </div>
              <div class="col-md-8">
                <div class="row qurResult">
                  <!-- lodading the reslult recepie data -->
                  <script src="js/main.js"></script>
                </div>
              </div>
            </div>
          </div>
        </div>

  </main>

    <?php include_once 'inc/_footer.php' ?>

