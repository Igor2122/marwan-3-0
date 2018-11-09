<?php 

// 733838

$show = $_POST;
$postId = $_POST['id'];

include_once '../classes/recep.class.php';

$con = new Recep();
$res = $con->getAllRec($postId);
// echo $con->showListOfIngridAndRecDirectn($rec['description'], 5);

?>

<?php if($res): ?>
  <?php foreach($res as $card) : ?>
    <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top" src="img/<?= $card['image']  ?>  " alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><?= $card['name'] ?></h5>
        <p><?= $card['level'] ?></p>
        <p class="card-text"><?= $card['description'] ?></p>
        <button type="button" id="<?= $card['img_id'] ?>" class="btn btn-primary" data-toggle="modal" data-target="#id<?= $card['img_id'] ?>">
        Show Recepie
      </button>
      <span class="badge badge-light">
        <?php 
          $con->showDishCookingLevel($card['level']);
        ?>
      </span>
      </div>
    </div>
    

    <!-- Recepie Modal Window -->
    <div class="modal" id="id<?= $card['img_id'] ?>" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <h1><?= $card['name'] ?></h1>
            </h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <img src="img/<?= $card['image'] ?>" alt="<?= $card['name'] ?>">
              </div>
              <div class="col-md-8">
                <div class="w-50 m-auto">
                  <h2>Ingredients:</h2>
                  <div class="spacer m-5"></div>
                  <?php echo $con->showListOfIngridAndRecDirectn($card['ingredients'], 20) ?>
                </div>
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
    <?php endforeach; ?>
  <?php else : ?>
    <h2>No Recepies Found</h2>
  <?php endif ?>