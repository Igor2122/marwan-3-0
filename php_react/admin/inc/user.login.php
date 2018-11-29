<?php 

if(isset($_POST['submit'])){
    
    include_once '../../classes/User.class.php';
    
   
    
    
    $user_id = $_POST['uid'];
    $user_pwd = $_POST['pwd'];
    
    
    $users = new User();
    $res= $users->getAllUsers();
    
    $users->userAuthentication($res, $user_id, $user_pwd);
    
    
    
      
    
      
      
   
   
   
      
} 

