<?php 

if(isset($_POST['submit'])){
    
    include_once '../../classes/User.class.php';
    

    $user_nameF = $_POST['first'];
    $user_nameN = $_POST['last'];
    $user_email = $_POST['email'];
    $user_uid = $_POST['uid'];
    $user_pwd = $_POST['pwd'];
    
    $users = new User();
    
    if($users->addNewUser($user_nameF, $user_lastN, $user_email, $user_uid, $user_pwd)){
        header("Location: https://marwan-3-0-updated-recepies-igdevelopers.c9users.io/recepiepg/admin/admin.page.php");
        exit();
    };
 
}