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
    
    // user_first, user_last, user_email, user_uid, user_pwd
}