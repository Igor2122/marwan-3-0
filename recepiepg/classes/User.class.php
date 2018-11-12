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
<<<<<<< HEAD
                header('Location: https://marwan-3-0-updated-recepies-igdevelopers.c9users.io/recepiepg/admin/admin.page.php');
=======
                header('Location: ?recepies.php#');
>>>>>>> 5cc8ec8bd4647f166ba5a856acdefad3cc5acc44
                exit();
            } else {
                echo 'Wrong login details';
                // header("Location: recepiepg/index.php");
               
            }
    
        }
    
    }
    
    function addNewUser ($user_first, $user_last, $user_email, $user_uid, $user_pwd){
        
        
        $sql = "INSERT INTO users(user_first, user_last, user_email, user_uid, user_pwd)
        VALUES('$user_first', '$user_last', '$user_email', '$user_uid', '$user_pwd')";
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        
        // ['user_first'=> $title, ['user_last'] => $user_last, ['user_email'] = > $user_email, ['user_uid'] => $user_uid, ['user_pwd'] => $user_pwd
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // user_first, user_last, user_email, user_uid, user_pwd
}