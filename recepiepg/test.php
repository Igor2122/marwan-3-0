<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
</head>
<body>
<?php
function add($a,$b){
  $c=$a+$b;
  return $c;
}
?>
<script>
function phpadd() {
  var padd = <?php echo add(1,2);?>; // call function to insert value
  alert(padd);
}
</script>

<button onclick='phpadd()'>add</button>
</body>
</html>