var mode; 
var speed; 
var pattern = [];
var round = 0;

$(function(){

  //sets easy mode as default 
  $("#easy").click();

  //get the mode, set the speed 
  initialSetup(); 

  function initialSetup(){
    $("input[type='radio']:checked").each(function() {
      mode = $(this).attr("id");
      mode === 'easy' ? speed = 1000 : speed = 500;
    });
  }

  //settings of the game 
  var settings = {
    mode: mode, 
    speed: speed, 
    pattern: pattern, 
    round: round
  };

  function highlight(box) {
    if (box == 0) {
      // $("#blue-box").addClass("highlight");
       $("#blue-box").css("backgroundColor", "#101064")
      setTimeout(function() {
        // $("#blue-box").removeClass("highlight");
          $("#blue-box").css("backgroundColor", "blue")
      }, settings.speed);
    }
  }

  $("#blue-box").click(function(){
    highlight(0);
  });
  // highlight(0);


}); //document ready

