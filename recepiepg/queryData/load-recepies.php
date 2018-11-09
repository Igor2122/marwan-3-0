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
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  <?php endforeach; ?>
<?php else : ?>
  <h2>No Recepies Found</h2>
<?php endif ?>