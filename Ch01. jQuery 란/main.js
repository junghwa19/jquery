/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> */

// $(document).ready(function(){});
// $(function(){});
// $(window).on(load)

$(document).ready(function(){
    $("h1").css("color","red");
});

$(window).on("load",function(){
    let h = $("img").height();
    $(".load").html(h);
});