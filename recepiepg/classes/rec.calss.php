<?php 

include_once 'rec.I.class.php';

class RecDB implements RecDBIntrface
{
    
    public  $pdo;
    
    function __construct()
    {
        
    }
    
    function query()
    {
        $host = 'localhost';
        $usr = 'root';
        $pass = '';
        $dbname = 'recepies';
        
        $dsn = 'mysql:host='. $host . ';dbname='. $dbname;
        
        $pdo = new PDO($dsn, $usr, $pass);
        
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        
        $stmt = $pdo->query('SELECT * FROM recep');
        
        return $stmt;
    }
    
    
    function saveRec($name, 
        $category, 
        $ingredients, 
        $directions, 
        $level, 
        $description){}
    function getRec(){}
    function delRec(){}
    
    
}
    

    

// $res = new RecDB();