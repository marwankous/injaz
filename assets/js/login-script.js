$(document).ready(function(){
  $(".signin").click(function(){
    $(".overlay").css({"transform": "translate(-50%)", "transition-duration":"1.5s", "border-radius": "0.25rem 0rem 0rem 0.25rem"});
    $( ".nt1" ).animate({opacity: 0 }, 500 );
    $( ".nt2" ).animate({opacity: 1 }, 1000 );
  });
});
$(document).ready(function(){
  $(".signup").click(function(){
    $(".overlay").css({"transform": "translate(50%)", "transition-duration":"1.5s","border-radius": "0rem 0.25rem 0.25rem 0rem"});
    $( ".nt1" ).animate({opacity: 1 }, 1000 );
    $( ".nt2" ).animate({opacity: 0 }, 500 );
  });
});

$(window).on('load', function(){

  $('#pageloader-overlay').fadeOut(1000);

})  