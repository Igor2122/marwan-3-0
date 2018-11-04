<?php 

include_once 'rec.I.class.php';

class RecDB implements RecDBIntrface
{
    const DB_NAME = '../news.db';
    
    private $_db = 'null';
    
    
    function __construct()
    {
        
    }
    
    function connect()
    {
        $host = 'localhost';
        $usr = 'root';
        $pass = '';
        $dbname = 'recepies';
        
        $dsn = 'mysql:host='. $host . ';dbname='. $dbname;
        
        $pdo = new PDO($dsn, $usr, $pass);
        
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        
        $stmt = $pdo->query('SELECT * FROM posts');
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