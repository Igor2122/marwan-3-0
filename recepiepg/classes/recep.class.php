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
    
    
    function insert($name, $category, $ingredients, $directions, $level, $description){
        
        $location = "../img/" . basename($_FILES['image']['name']);
        
        
        $img = $_FILES['image']['name'];
        
        
        $stmt = $this->connect()->query(
                
            "INSERT INTO recep(name, category, ingredients, directions, level, description, image) 
            VALUES('$name', '$category', '$ingredients', '$directions', $level, '$description', '$img')");
            
            
            if(move_uploaded_file($_FILES['image']['tmp_name'], $location)){
                echo $msg = "Image Uploaded";
                echo 'success!';
                echo $location;
            } else {
                echo $msg = " There was a problem ";
                // exit;
        }
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