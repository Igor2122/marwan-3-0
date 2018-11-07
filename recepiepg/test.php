<?php 
   include_once 'classes/recep.class.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
   <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   </head>
   <script src="js/main.js"></script>
</head>
<body>
   <script>
      $(document).ready(function(){
         var show = '$_POST';
         $(".show").click(function(){
             $(".container").load("load-data.php", {show});
         });
      });
   </script>
   <div class="container"></div>
   <button class="show">Show data </button>
</body>
</html>