<?php 

include_once 'dbh.calss.php';

class Recep extends RecDB 
{
    function __construct(){
        $this->connect();
    }
    
    // Fetching all recep with PDO
    function getAllRec(){
        $stmt = $this->connect()->prepare("SELECT * FROM recep");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    
    function insert($name, $description, $image){
        $stmt = $this->connect()->query(
            "INSERT INTO recep(name, description , image) 
            VALUES('$name', '$description', '$image')");
    }
    
    
    
    
    
    
    
    
    
    
    // public function getUsersWithCountCheck(){
    //     $id = 2;
    //     $stmt = $this->connect()->prepare("SELECT * FROM recep WHERE img_id=?");
    //     $stmt->execute([$id]);
        
    //     if($stmt->rowCount()){
    //         return $stmt->fetch();
    //     } else {
            
    //     }
    // }
}