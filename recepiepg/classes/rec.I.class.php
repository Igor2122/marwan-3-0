<?php 


interface RecDBIntrface 
{
    function saveRec(
        $name, 
        $category, 
        $ingredients, 
        $directions, 
        $level, 
        $description);
    function getRec();
    function delRec();
}
