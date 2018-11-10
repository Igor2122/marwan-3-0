<?php 



if(isset($_POST['submit'])){
    $user_id = $_POST['uid'];
    $user_pwd = $_POST['pwd'];
    header('Location: https://marwan-3-0-updated-recepies-igdevelopers.c9users.io/recepiepg/recepies.php');
}

echo $user_id, $user_pwd;
