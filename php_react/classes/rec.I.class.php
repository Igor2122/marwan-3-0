<?php 


interface RecDBIntrface
{
    function saveRec(
        $name,
        $category,
        $ingredients,
        $directions,
        $level,
        $description,
        $image
    );
    function getRec();
    function delRec();
}
