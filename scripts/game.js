$(document).ready(function(){


  //game content, remember, first thing to appear is at the bottom of this section
  var end = {
    text: "",
  }

var b1p20 = {
  text: "His ears perk up and the all-encompassing grin returns.",
  next: false,
}

var bf2a2 = {
  text: "'Pffffffbbbbbbbbbtttttt.'<br><br> Wait, what?",
  next: b1p20
}

var bf2a1 = {
  text: "I exhale, forcing the air through my larynx, the pressure eliciting vibrations from the surrounding tissue. Not quite sure how I know these things, I press on.<br>I imagine the tone I wish to imbue, and move the contours of my mouth, tongue and teeth. <br>With this, surely my sentiment will reach him.<br>All things in place, the air escapes my lips.",
  next: bf2a2,
}

var bf1a2 = {
  text: "First, I need a tone.<br><br>What reaction would I like to convey to him?<br><br>'High', to convey happiness<br>'Low', to convey anger<br>'Neutral', to be safe",
  next: false,
  choice: {
    o1: {
      text: "high",
      next: bf2a1,
    },
    o2: {
      text: "low",
      next: bf2a1,
    },
    o3: {
      text: "neutral",
      next: bf2a1,
    }
  },
}

var bf1a1 = {
  text: "This guy, I swear. I haven’t even really spoken to him, and I’m already tired of our interactions. It’s best to speak quickly, so I can put him in his place! <br><br>I inhale the substance surrounding us, and store it deep inside my… lungs?",
  next: bf1a2,
}

var bf1b1 = {
  text: "I send a command down through my spine, feeling it tingle along the way, ending in my stubby limbs. I replicate the motion from earlier, wiggling my fingers.",
  next: false,
}

var b1p19 = {
  text: "What should I focus on first?<br><br>'Speak'<br>'Move'",
  next: false,
  choice: {
    o1: {
      text: "speak",
      next: bf1a1,
    },
    o2: {
      text: "move",
      next: bf1b1,
    },
  },
}

var b1p18 = {
  text: "'If you’re not gonna talk, I’ll leave you,' he sighed. Unbelievable.",
  next: b1p19,
}

var b1p17 = {
  text: "Air escaped between his teeth, slowly and deliberately, a mix between hissing and growling. This is to convey… annoyance, I guessed. This person really should be more patient with someone who’s injured.",
  next: b1p18,
}

var b1p16 = {
  text: "'Hey,' he asserted. 'You really should talk back when someone’s talkin’ to ya!'<br><br>The voice was deep, characteristic of a male, though I shouldn’t assume. Until I ask, I can’t help that the presumption took hold of my characterisation. I can’t help it, I asserted to myself, silently.",
  next: b1p17,
}

var b1p15 = {
  text: "Too many things to take in from one moment. Their touch wasn’t smooth; rather, it was somehow rough with texture. The other thing was, I’m apparently missing an integral part of basic anatomy. I should really be concerned about that. I should be concerned about a lot of things, really. Like, who am—",
  next: b1p16,
}

var b1p14 = {
  text: "'Boop,' a tentative, padded appendage momentarily presses against the tip of my snout. 'You have no nose,' and then it leaves me.",
  next: b1p15,
}

var b1p13 = {
  text: "Their body seemed large, yet small all at once. The top of their head crowned with two short triangles. <br><br>Ears? They’re hunched over, reaching a long, slender arm out towards me.<br><br>Their skin(?) is dark, I notice as it approaches, but I don’t yet know how to move to avoid their touch.",
  next: b1p14,
}

var b1p12 = {
  text: "I pull my attention away from the mental and the limbs and form a narrow focus on them. My eyes struggle through a dizzying fog, but I find their form: a wide face, with a somehow even wider grin painting its features. <br>Painted in shadow, I can only make out slight characteristics, and their silhouette.",
  next: b1p13,
}

var b1p11 = {
  text: "My ears are ringing. 'Hey,' reverberated within them, followed by an excited, 'You’re not dead!'<br><br>I can’t tell what the tone they’re using means. <br>Is it relief? Is it mere amusement?",
  next: b1p12,
}

var b1p10 = {
  text: "Wait, body…? My attention stopped being focused on the mental, primordial formation, and more on the short, fat limbs I could feel weighing me down in a whole new way.",
  next: b1p11,
}

var b1p9 = {
  text: "My eyes flash open, and the dim light they found flooded my senses anew, but the feeling left me comforted. Before, in the pitch blackness, it felt like I was struggling not to drown; pulled back into the depths. Now, while disoriented, it’s more like my -body- was flung against a shore: beaten and exhausted, but now able to rest.",
  next: b1p10,
}

var b1p8 = {
  text: "'If you don't wake up, I'll eat you!' The concern was replaced with annoyance. -I- very much wanted to -be-, so being eaten just would not do.",
  next: b1p9,
}

var b1p7 = {
  text: "'Hey!' the voice called out. The alarm buried in its waves flooded my senses, until it became everything.",
  next: b1p8,
}

var b1p6 = {
  text: "I want to know. I need to know. This hunger unleashes a torrent of desire, exploding in electricity down my spine.<br><br> Okay, so I have a spine, too. What else?<br><br>But I don't have the time to find out.",
  next: b1p7,
}

var b1p5 = {
  text: "Claws…? What am -I-?",
  next: b1p6,
}

var b1p4 = {
  text: "Move, I urge to my fingers. Do I have 'fingers'? Why do -I- even know of their concept?<br><br>A jolt. I feel a movement, unlike the sinking heaviness of the pitch blackness. I hold onto that feeling, and force it to be more. My fist forms a ball, and my claws pierce my skin from the force.",
  next: b1p5,
}

var b3p1 = {
  text: "Just as quickly as -I- felt I was starting to understand just who that -I- is, the pull returns. Suddenly, the all-encompassing feeling is so heavy that -I- forget the -I-. The pitch colours what was left of -me- and all thoughts spill into its expanse.<br><br>END1- ABORT",
  next: end,
}

  var b1p3 = {
    text: "Trying proves exceedingly difficult, and I'm starting not to care as much about the result.<br> What should I do?<br><br>'Move'<br>'Give in'",
    next: false,
    choice: {
      o1: {
        text: "move",
        next: b1p4,
      },
      o2: {
        text: "give in",
        next: b3p1,
      },
    },
  }

  var b1p2 = {
    text: "Thousands of snapshot images flood my closed eyes, and merge at once. <br>It burns. Everything is suddenly so bright, and it burns. <br>-My- mind throbs. I have a mind. Perhaps there is more. <br>I tentatively form a thought: a command, to be more specific.",
    next: b1p3,
    choice: false,
  };

  var b2p2 = {
    text: "'Not yet,' she, he, it? whispers. The garbled voice would frighten -us-, but they sound so much more afraid. Some of us want to help them, while others feel hatred, and the rest are indifferent. It doesn't matter, because just as quickly as this identity formed, the cloying darkness is taking us back. <br>Wait for us… <br><br>END- NOT YET.",
    next: end,
  }

  var b2p1 = {
    text: "-We- are… -I- can't possibly be. There are too many voices: too many lives trying to paint -my- personality for that to be right. <br>No… -we- exist here. Together. Using this knowledge, -we- can-- <br><br>All thoughts and voices cease. All, but one deafening echo.",
    next: b2p2,
    choice: false,
  };

  var b1p1 = {
    text: "Focus… -I- urge to -myself-. Who am… Who are…?<br><br>'I am'<br>'We are'",
    next: false,
    choice: {
      o1: {
        text: "i am",
        next: b1p2,
      },
      o2: {
        text: "we are",
        next: b2p1,
      },
    },
  };
  var b1p0 = {
    text: "I… we… What…? <br>Our--my eyes are swimming. There is a deep, inky blackness surrounding me; us. Where does it end? Maybe 'it' doesn't: maybe this is who we are. And yet I feel a consciousness fighting for control, but the voices are many, their volumes unequal.",
    next: b1p1,
    choice: false,
  }

  //game code

  var gameState = b1p0;
  var currentDisplay = gameState.text;
  var onChoice = false;
  var oldText = gameState.text;

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
    if (gameState.choice) {
      $('#game-input').attr("placeholder", "Enter your choice");
    }
    else if (gameState.next!==end){
      $('#game-input').attr("placeholder", "Press enter to continue");
    }
    else {
      $('#game-input').attr("disabled", true);
      $('#game-input').attr("placeholder", "Refresh the page to try again");
    }
  }


  writeGameText(currentDisplay);
/*
  $.each(gameState.choice, function(key, value) {
    alert(value.text);
  });
*/

  var submitChoice = function () {
    var newText = "";
    if (gameState.choice) {
      var gameChoice = $("#game-input").val().toLowerCase();
      var nextState = gameState;
      for (var key in gameState.choice) {
        var o = gameState.choice[key];
        if (gameChoice == o.text) {
          nextState = o.next;
        };
      };
      if (nextState == gameState) {
        newText = "<br><br>What does that even mean?<br>No, I need to -focus-. I can -do- this.<br>I'll try again.";
      }
      gameState = nextState;
    }
    else {
      gameState = gameState.next;
    }
    //refresh text
    newText = newText+gameState.text;
    currentDisplay = "<span id='grey'>"+oldText+"</span><br><br><span id='periwinkle'>"+newText+"</span>";
    writeGameText(currentDisplay);
    oldText = oldText+newText;

    $("#game-input").val("");
  };

  $("#game-form").submit(function(e){
    e.preventDefault();
    submitChoice();
  });

});

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
