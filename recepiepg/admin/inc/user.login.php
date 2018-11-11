<?php 

    
    


if(isset($_POST['submit'])){
    
    include_once '../../classes/User.class.php';
    
    $users = new User();
    $res= $users->getAllUsers();
    
    
    $user_id = $_POST['uid'];
    $user_pwd = $_POST['pwd'];
    
    
    foreach($res as $user){

        if($user_id == $user['user_email'] && $user_pwd == $user['user_pwd']){
            header('Location: https://marwan-3-0-updated-recepies-igdevelopers.c9users.io/recepiepg/recepies.php');
            exit();
        } else {
            echo 'Wrong login details';
            // header("Location: recepiepg/index.php");
           
        }
    
    }
    
    
    
      
    
      
      
   
   
   
      
} 

