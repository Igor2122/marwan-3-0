<?php 

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
        $recep_arr['data'] = array();
        
        while( $row = $res->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            
            $post_item = array(
                'id' => $id,
                'name' => $name,
                'body' => html_entity_decode($body)
            );
            
            array_push($recep_arr['data'], $post_item);
        }
        
        // Turn to JSON
        
        echo json_encode($recep_arr);
        
    } else {
        echo json_encode(
            array('Message' => 'No posts Found')
            );
    }