<?php 

include_once 'dbh.calss.php';

class Recep extends RecDB 
{
    function __construct(){
        $this->connect();
    }
    
    function getAllRec(){
        $stmt = $this->connect()->query("SELECT * FROM recep");
        $this->insert();
        return $stmt;
    }
    
    function insert(){
        $stmt = $this->connect()->query("INSERT INTO recep(name, description , image) VALUES('Mini', 'The bast car', 'mini.jpeg')");
    }
}