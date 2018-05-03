

$("h1").hover(function(){

$(this).css({"background-color":"pink","color": "white", "text-transform":"lowercase"});
// $("h1").toggleClass("new-style");
},
function(){
    $(this).css({"background-color":"","color": "", "text-transform":""});


});
