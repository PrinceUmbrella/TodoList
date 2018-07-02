$("ul").on("click", "li", function(){

    $(this).toggleClass("strike");
});
$("ul").on("click", "span", function(evt){
    $(this).parent().fadeOut(500, function(){
        $(this).remove;
    }) ;
    evt.stopPropagation();
   
})
$("input[type='text']").on("keypress",function (evnt) { 
    if (evnt.which === 13) {
        var todoText = $(this).val();
        $(this).val("");

        $("ul").append("<li> <span class='deleteTd'> <i class='far fa-trash-alt'></i>  </span>" + todoText + " </li>");

    }
});
$(".fa-plus").on("click", function () {
    $("input").toggleClass("hideToDo");

});