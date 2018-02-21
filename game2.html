$(document).ready(function(){


  //game content, remember, first thing to appear is at the bottom of this section
  var b1p2 = {
    text: "<br><br>Thousands of snapshot images flood my closed eyes, and merge at once. <br>It burns. Everything is suddenly so bright, and it burns. <br>-My- mind throbs. I have a mind. Perhaps there is more. <br>I tentatively form a thought: a command, to be more specific.",
    choice: b1c1,
  };
  var b1p3 = "this is b1p3";
  var b2p1 = {
    text: "<br><br>-We- are… -I- can't possibly be. There are too many voices: too many lives trying to paint -my- personality for that to be right. <br>No… -we- exist here. Together. Using this knowledge, -we- can-- <br><br>All thoughts and voices cease. All, but one deafening echo. <br>'Not yet,' she, he, it? whispers. The garbled voice would frighten -us-, but they sound so much more afraid. Some of us want to help them, while others feel hatred, and the rest are indifferent. It doesn't matter, because just as quickly as this identity formed, the cloying darkness is taking us back. <br>Wait for us… <br><br>END- NOT YET.",
    choice: null,
  };

  var b1c1 = {
    o1: {
      text: "i am",
      next: b1p2,
    },
    o2: {
      text: "we are",
      next: b2p1,
    },
  };

  var b1p1 = {
    text: "I… we… What…? <br>Our--my eyes are swimming. There is a deep, inky blackness surrounding me; us. Where does it end? Maybe 'it' doesn't: maybe this is who we are. And yet I feel a consciousness fighting for control, but the voices are many, their volumes unequal.Focus… -I- urge to -myself-. Who am… Who are…?",
    choice: b1c1,
  };

  //game code

  //alert('load');

  var gameState = b1p1;
  var currentDisplay = gameState.text;

  //typewriter animation
  var textLocation = 0;
  var speed = 30;
  function typeWriter() {
    if (textLocation < currentDisplay.length) {
      document.getElementById("game-text").innerHTML += currentDisplay.charAt(textLocation);
      textLocation++;
      setTimeout(typeWriter, speed);
    }
  }

  var writeGameText = function (gameText) {
    $('#game-text').html(gameText);
    //typeWriter();
    $('#game-text').animate({
       scrollTop: ($("#game-text")[0].scrollHeight)},
       1400,
       "linear"
    );
    //$("#game-text").scrollTop($("#game-text")[0].scrollHeight);
    //alert($('#game-text').scrollHeight);
  }


  writeGameText(currentDisplay);
/*
  $.each(gameState.choice, function(key, value) {
    alert(value.text);
  });
*/

  var submitChoice = function () {
    var gameChoice = $("#game-input").val().toLowerCase();
    var nextState = gameState;
    for (var key in gameState.choice) {
      var o = gameState.choice[key];
      if (gameChoice == o.text) {
        alert('you chose: ' + o.text);
        nextState = o.next;
      };
    };
    gameState = nextState;
    //refresh text
    currentDisplay = currentDisplay+gameState.text;
    writeGameText(currentDisplay);
  };

  $("#game-form").submit(function(e){
    e.preventDefault();
    submitChoice();
  });
});
