<?php 

    class Recepies {
        // DB stuff 
        private $conn;
        private $table = 'recep';
        
        public $id;
        public $name;
        public $category;
        public $ingredients;
        public $directions;
        public $level;
        public $description;
        public $image;
        
        public function __construct($db) {
            $this->conn = $db;
        }
        
        
        // Query method
        public function read() {
            $query = 'SELECT 
            img_id, 
            name, 
            categ_id, 
            ingredients, 
            directions, 
            level, 
            description, 
            image
            FROM 
            FROM recep';
            
        // Query
        $stmt = $this->conn->prepare($query);
        
        // Execute Query
        
        $stmt->execute();
        
        return $stmt;
        
        }   
    }