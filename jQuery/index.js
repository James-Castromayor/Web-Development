$("h1").css("color","red");

$(".iintro").keypress(function(event)
{
  $(".intro").text( $(".intro").text() + event.key);
})


$("button").on("click", function(){
  $("h1").toggle();
})
