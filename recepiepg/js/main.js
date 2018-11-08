$(document).ready(function () {

    
        var req = '$_POST';
        $(".show").click(function () {
            var id = $(this).prop("id");
            $(".qurResult").load("queryData/load-recepies.php", {
                req,
                id
            });
        });



});



































// // codes works on all bootstrap modal windows in application
// $('.modal').on('hidden.bs.modal', function(e)
// { 
//     $(this).removeData();
// }) ;