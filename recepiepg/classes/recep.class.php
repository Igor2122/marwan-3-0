<?php 

include_once 'dbh.calss.php';

class Recep extends RecDB
{
    function __construct()
    {
        $this->connect();
    }
    
    // Fetching all recep with PDO
    function getAllRec($id)
    {
        $stmt = $this->connect()->prepare("SELECT * FROM recep WHERE categ_id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    function getAllCategries()
    {
        $stmt = $this->connect()->prepare("SELECT categ_id, name FROM category");
        $stmt->execute();
        return $stmt->fetchAll();
    }


    function insert($name, $category, $ingredients, $directions, $level, $description)
    {

        $location = "../img/" . basename($_FILES['image']['name']);

        $img = $_FILES['image']['name'];

        $stmt = $this->connect()->query(

            "INSERT INTO recep(name, categ_id, ingredients, directions, level, description, image) 
            VALUES('$name', '$category', '$ingredients', '$directions', $level, '$description', '$img')"
        );


        if (move_uploaded_file($_FILES['image']['tmp_name'], $location)) {
            echo $msg = "Image Uploaded";
            echo 'success!';
            echo $location;
            // prevent form submission on page reload
            // header("Location: " . $_SERVER['REQUEST_URI']);
            // exit();
        } else {
            echo $msg = " There was a problem ";
                // exit;
        }

    }

    function outputCategorisDropDown()
    {
        $categ = $this->getAllCategries();

        echo "<div class='form-group'>";
        echo "<label for='exampleFormControlSelect1'>Select Category</label>";
        echo "<select name='category' class='form-control' id='exampleFormControlSelect1'>";
        foreach ($categ as $cat) {
            echo "<option value=" . $cat['categ_id'] . " >" . $cat['name'] . "</option>";
        }
        echo "</select>";
        echo "</div>";

    }
    
    
        
        
        // Helper functions 
    function showListOfIngridAndRecDirectn($val, $count)
    {
        $li = explode(",", $val);
        $loop = 0;
        foreach ($li as $l) {
            $loop++;
            echo "<ul class='list-group list-group-flush'>";
                echo "<li class='list-group-item'>$l</li>";
            echo "</ul>";
            
            if ($count - 1 == $loop) {
                break;
            }
        }
    }
}
    
    
