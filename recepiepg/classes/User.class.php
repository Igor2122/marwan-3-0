<?php 

include_once 'dbh.calss.php';

class User extends RecDB
{
    function __construct(){
        $this->connect();
    }
    
    function getAllUsers(){
        
            $stmt = $this->connect()->prepare("SELECT * From users ");
            
            $stmt->execute();
            return $stmt->fetchAll();
    }
    
    function userAuthentication($user, $user_id, $user_pwd){
        
        foreach($user as $user){

            if($user_id == $user['user_email'] && $user_pwd == $user['user_pwd']){
                header('Location: ?recepies.php#');
                exit();
            } else {
                echo 'Wrong login details';
                // header("Location: recepiepg/index.php");
               
            }
    
        }
    
    }
    
    // function (){
    //     $this->connect();
        
        
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // user_first, user_last, user_email, user_uid, user_pwd
}