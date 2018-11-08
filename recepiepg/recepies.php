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

   <!--<div class="container"></div>-->
   <button class="show" id="1">Show data </button>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <script>
                $(document).ready(function(){
                   var show = '$_POST';
                   $(".show").click(function(){
                      var id = $(this).prop("id")
                       $(".col-md-4").load("load-data.php", {show, id});
                   });
                });
             </script>
            </div>
      
            
          </div>
        </div>
      </div>

    </main>

    <?php include_once 'inc/_footer.php' ?>

