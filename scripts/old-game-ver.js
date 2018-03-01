var user = prompt("You meet him in the alleyway and catch a glint of light no doubt reflecting from either barred fangs or a sadistic smile. Your legs all but crumple beneath you. Frozen in fear, your mind races for a reaction. Grasping onto coherency just long enough to allow your body to move, you realize that you should either: wait, attack, or run. Which do you decide upon?", "Choose wisely. Your life could very well hang in the balance of this choice.").toLowerCase();

switch(user) {
    case 'wait':
        var suave = prompt("You wait silently for him to approach you, pouring over every movement you make out with the limited light source. Suddenly, he's kneeling down in front of you, or at least you think he is, as the twinkling light of his teeth are now even with your line of sight. He exhales and you suddenly feel warmed by the close proximity. 'Well hello, little rat. You didn't run from me. Why is that?' His last words were coated in amusement. 'Don't you know we eat your kind?'","Your reply.").toLowerCase();
        if (suave.includes("eat me")){
            console.log("Congratulations! You got the super secret GAY END");
        }
        else {
            console.log("You were too overcome by his suavacity. Up your game and come back later.");
        }
        break;
    case 'attack':
        var damage = prompt("You push forward, trying to take out his legs as he approaches. Do you cling there?").toLowerCase();
        var bite = prompt("Do you then bite down?").toLowerCase();
        if (damage && bite== "yes") {
            console.log("You managed to hold on and draw blood from a now tender leg muscle. He does his best to kick you away, yowling as though his life depended on it. Congratulations, you just attacked someone who had never done you any harm and was only guilty of being different from you. RACIST END");
        }
        else{
            console.log("He chuckles at your attempt and then proceeds to help you up. 'You alright there? It's okay... I'm not going to harm you. What's your name? Mine is...' You made a friend! I mean, eventually, right? There's a lot of development that no doubt takes place between these two, but this sure kicks it off! UNFORSEEN FRIENDSHIP END aka MAYBE (one day) SURPRISE BUTT SEX END");
        }
        break;
    case 'run':
        var kickoff = prompt("You first have to get up. It's crucial that you do so without any problems. In your hazy state, do you manage?").toLowerCase();
        if (kickoff=="no") {
            alert("Although you have difficulties, you still manage to reach your feet, uneasily as they may be.");
        }
        var speed = prompt("You spring as hard and far as you possibly can, but none of that matters until your speed is any sort of decent. Let's face it: rats have short, stubby legs. Do you manage any distance?").toLowerCase();
        if (kickoff||speed=="yes") {
            console.log("You hear a voice call out from behind you but it sounds too kind to be coming from your would-be attacker. You shrug it off and assure yourself that it couldn't possibly be the same person. You run and never turn back, thus closing yourself off from any potential character arcs or growth. IGNORANT END");
        }
        else {
            console.log("You failed both attempts and just fall to your feet once again. It's then that you feel arms suddenly  engulf your shoulders, pulling you in close. 'Come now, isn't it time that you stopped trying to escape the loop? Even if you get away now, it all resets in the end, you know? Just accept it, like all of us have. It's so much easier once you do...' With each of his words, you feel your mind break apart more and more until the last shred of your sanity shatters, leaving your body an empty husk and a perfect puppet for 'her'. ENDLESS LOOP END");
        }
        break;
    default:
        console.log("It seems your mind was unable to form the coherency with which to reasonably react. With what little that runs through your mind going black, you reach out for him. What your intention is, not even you yourself know, but whatever it was or could have been will forever be lost to you now. Your vision registers only blackness, until it can no longer recognize even that. BAD END");
}
