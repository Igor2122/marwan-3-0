<?php 

include_once 'inc/_header.php';

// include_once 'inc/_nav.php';
 
 
include_once 'classes/recep.class.php';
        
        $con = new Recep();
        $res = $con->getAllRec();
        // $con->insert('test' , 'item1, item2, item3', 'tram.jpeg');
        
        // $count = $con->getUsersWithCountCheck();
        
        // echo $count['name'];
?>

    
      
      
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
            
        <?php foreach($res as $rec) :?>
        
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="img/<?= $rec['image'] ?>" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"><?= $rec['name']?></h5>
                    <p class="card-text">
                      <?php 
                        $con->showListOfIngridAndRecDirectn($rec['description'], 5);
                      ?>
                    </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
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

