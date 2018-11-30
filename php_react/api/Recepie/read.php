<?php 


    // location: http://localhost:8888/marwan4.0/php_react/api/Recepie/read.php 
    // Headers 
    
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    
    include_once '../../classes/dbh.calss.php';
    include_once '../../models/Recepies.php';
    
    
    // instantiate DB & connect 
    
    $database = new RecDB ();
    $db = $database->connect();
    
    // instantiate Recepie obj
    
    $recep = new Recepies($db);
    
    // Blog Post Query 
    
    $res = $recep->read();
    
    // Get row count 
    $num = $res->rowCount();
    
    // Check to see if there any recepies 
    
    if($num > 0) { // there are some recepies
        $recep_arr = array();
        $recep_arr['recepies'] = array();
        
        while( $row = $res->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            
            $post_item = array(
                'img_id' => $img_id,
                'name' => $name,
                'categ_id' => $categ_id,
                'ingredients' => html_entity_decode($ingredients),
                'directions' => html_entity_decode($directions),
                'level' => $level,
                'description' => html_entity_decode($description),
                'image' => $image,
            );
            
            array_push($recep_arr['recepies'], $post_item);
        }
        
        // Turn to JSON
        
        echo json_encode($recep_arr);
        
    } else {
        echo json_encode(
            array('Message' => 'No posts Found')
            );
    }