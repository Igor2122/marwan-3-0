<?php include_once '../inc/_header.php';
 
  include_once '../inc/_nav.php';
 
  include_once '../classes/addReceps.class.php';

  include_once '../classes/recep.class.php';

  $con = new Recep();

  $getAllRecep = $con->getAllRecepNoid(null);


?>


    <div class="container-fluid mt-md-5">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Integrations
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          
          
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Add Recepies 
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                <div class="container w-75">
                  <form method="post" enctype="multipart/form-data">
                      <div class="form-group">
                          <label for="usr">Name:</label>
                          <input name="name" type="text" class="form-control" id="usr">
                      </div>
                      <?php 
                        $res = $con->outputCategorisDropDown();
                      ?>
                      <div class="form-group">
                          <label for="comment">Description</label>
                          <textarea name="description" class="form-control" rows="5" id="comment" name="text"></textarea>
                      </div>
                      <div class="form-group">
                          <label for="comment">Ingridients: <small>Please input ',' separated values <br>ex: Ingr1, Ingr2, Ingr3 etc...</label>
                          <textarea name="ingredients" class="form-control" rows="5" id="comment" name="text"></textarea>
                      </div>
                      <div class="form-group">
                          <label for="comment">Directions: <small>Please input ',' separated values <br>ex: Dir1, Dir2, Dir3 etc...</small></label>
                          <textarea name="directions" class="form-control" rows="5" id="comment" name="text"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">Select Level</label>
                        <select name="level" class="form-control" id="exampleFormControlSelect1">
                          <option value="1">Easy</option>
                          <option value="2">Meium</option>
                          <option value="3">Hard</option>
                          <option value="4">Extra Hard</option>
                        </select>
                      </div>
                      <div class="form-group">
                          <label for="exampleFormControlFile1">Example file input</label>
                          <input name="image" type="file" class="form-control-file" id="exampleFormControlFile1">
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
              </div>
            </div>
          </div>
        </div>    
    
    
    
    
    
    
    
        
          
          
          
          <h2>Section title</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Category</th>
                  <th>Level</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <?php foreach($getAllRecep as $item) : ?>
                    <td><?= $item['name'] ?></td>
                    <td><?= $item['categ_id'] ?></td>
                    <td><?= $item['level'] ?></td>
                    <td>
                      <img class="img-thumbnail w-25" src="../img/<?= $item['image'] ?>  " alt="Card image cap">
                    </td>
                  <?php endforeach ?>
                </tr>
                
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>

<?php include_once '../inc/_footer.php'?>