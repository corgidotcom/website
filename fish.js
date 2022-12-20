let musicbutton;
let audio;
let fish;
var fishdialogue;
let nameinput;
var promptanswered;
var promptnotanswered;
var dialogueInProgress;
var fullname;
let nameinputform;
let dialogueOption1;
let dialogueOption2;
let dialogueOption3;
let dialogueOption4;
let dialogueOption5;
let nameinputformbutton;
var pressure;
var noname
var nameIsGigglemouth;
var randomvalue;
var mushroom;
var dialogue1complete;
var dialogue2complete;
var dialogue3complete;

function fadeIn(name, time) {
    return new Promise((res, rej) => {
        $(name).fadeIn(time, res);
    });
}
function fadeOut(name, time) {
    return new Promise((res, rej) => {
        $(name).fadeOut(time, res);
    });
}

async function getNameInput() {
    await fadeOut(".nameinputform", 1000)
    await fadeOut("#dialoguetext", 1000)
    nameinput = document.getElementById('nameinputform').value;
    console.log('user\'s name is', nameinput + "!")
    dialogueChoices()       
}
function niceName() {
    if (nameinput.length >= 40){
        nameinput = nameinput.slice(0, 40)
    }
    if (nameinput.toLowerCase().includes("gigglemouth")) {
        nameIsGigglemouth = true
        document.getElementById('dialoguetext').innerHTML = nameinput + "...? What a coincidence, we have the same name. What can I do for you?";
    }
    else if (nameinput.trim() == "") {
        document.getElementById('dialoguetext').innerHTML = "You don't want to tell me your name? I understand. What can I do for you?";
        noname = true
    }
    else {
        randomvalue = Math.random() * 100;
        if (randomvalue <= 1) {
            console.log("mushroom path true, random value is", randomvalue)
            document.getElementById('dialoguetext').innerHTML = nameinput + "... Interesting... Interesting... Listen, I need you to do something for me. Go to your backyard, and if you have none, go to a local park, and PLANT MUSHROOMS. I need you to grow some rare mushrooms. Come back when you are done. Now Go.";
            console.log('randomvalue is', randomvalue);
            mushroom = true
        }
        else {
                    console.log("mushroom path false, random value is", randomvalue)
            randomvalue = Math.floor(Math.random() * 4);
            console.log('randomvalue is', randomvalue)
            if (randomvalue == 0) {
                randomvalue = 1
            }
            if (randomvalue == 1) {
                document.getElementById('dialoguetext').innerHTML = nameinput + "... What a nice name. What can I do for you?";
            }
            else if (randomvalue == 2) {
                document.getElementById('dialoguetext').innerHTML = nameinput + "... What an interesting name. Is there anything I can do for you?";
            }
            else if (randomvalue == 3) {
                document.getElementById('dialoguetext').innerHTML = nameinput + "... What a unique name. Sorry, what is it you wanted?";
            }
        }
    }
}
async function dialogueChoices() {
    niceName()
    if (mushroom) {
        await fadeIn("#dialoguetext", 2500);

        document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">Ok....? I'm done.</u>";
        
        await fadeIn("#dialoguechoice1", 1500);

        dialogueOption1.onclick = async function () {
            await fadeOut("#dialoguechoice1", 1500);
            await fadeOut("#dialoguetext", 1500);

            document.getElementById('dialoguetext').innerHTML = "You're done? Perfect, okay, now the next step is simply to go into your house";

            await fadeIn("#dialoguetext", 1500);
            setTimeout(() => { window.location.reload(); }, 300);
        }
    }
    else {
        await fadeIn("#dialoguetext", 2500)

        await fadeIn("#dialoguechoice1", 1000)
        
        await fadeIn("#dialoguechoice2", 1000)

        await fadeIn("#dialoguechoice3", 1000)

        dialogueOption1.onclick = async function () {

            await fadeOut("#dialoguechoice4", 700)
            
            await fadeOut("#dialoguechoice3", 700)

            await fadeOut("#dialoguechoice2", 700)

            await fadeOut("#dialoguechoice1", 700)
            
            await fadeOut("#dialoguetext", 700);

            if (pressure == 0) {
                document.getElementById('dialoguetext').innerHTML = "...you want to know where I'm from? That's private information. I won't tell you.";
            }

            else if (pressure == 1) {
                document.getElementById('dialoguetext').innerHTML = "Stop asking. I won't tell you. I'm from a different planet, you wouldn't have heard of it anyway.";
            }

            else if (pressure == 2) {
                document.getElementById('dialoguetext').innerHTML = "Do you really want to know? Fine. I'm from Blomy World. I told you you wouldn't have heard of it. It's not relevant anyways.";
                dialogue1complete = true
            }

            else if (pressure > 2) {
                document.getElementById('dialoguetext').innerHTML = "I already told you where I'm from.";
            }

            pressure = pressure + 1
            console.log('pressure increased. Current pressure:', pressure)

            await fadeIn("#dialoguetext", 1500);

            if (pressure <= 2) {
                if (pressure == 1) {
                    document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">Come on... tell me!</u>";
                }
                else if (pressure == 2) {
                    document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">I want to know.</u>";
                }
                else if (pressure > 2 || pressure == 0) {
                    document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">Where are you from?</u>";
                }
                await fadeIn("#dialoguechoice1", 1000)

                await fadeIn("#dialoguechoice2", 1000)

                await fadeIn("#dialoguechoice3", 1000)
            }
            else {
                await fadeIn("#dialoguechoice2", 1000)
                await fadeIn("#dialoguechoice3", 1000)
            }
            if(dialogue1complete && dialogue2complete && dialogue3complete){
                await fadeIn("#dialoguechoice4", 1000)
            }
        };


        dialogueOption2.onclick = async function () {
            await fadeOut("#dialoguechoice4", 700)
            await fadeOut("#dialoguechoice3", 700)
            await fadeOut("#dialoguechoice2", 700)
            await fadeOut("#dialoguechoice1", 700)
            await fadeOut("#dialoguetext", 700)
            document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">Where are you from?</u>";
            document.getElementById('dialoguetext').innerHTML = "We're currently at an in between, or at least that's what I like to call it. Nothing really exists here. It's perfectly secluded, so it's a great spot for a conversation. Was there anything else?";
            await fadeIn("#dialoguetext", 1500)
            await fadeIn("#dialoguechoice1", 1000) 
            await fadeIn("#dialoguechoice3", 1000)
            dialogue2complete = true
            if(dialogue1complete && dialogue2complete && dialogue3complete){
                await fadeIn("#dialoguechoice4", 1000)
            }
                            
        };
                                    


        dialogueOption3.onclick = async function () {
            await fadeOut("#dialoguechoice4", 700)
            await fadeOut("#dialoguechoice3", 700)
            await fadeOut("#dialoguechoice2", 700)
            await fadeOut("#dialoguechoice1", 700)
            await fadeOut("#dialoguetext", 700)
            document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">Where are you from?</u>";
            document.getElementById('dialoguetext').innerHTML = "My name is " + fullname + " Please don't make fun of my name. I Will be Very Sad And Might Start Crying.";
            await fadeIn("#dialoguetext", 1500)
            await fadeIn("#dialoguechoice1", 1000)
            await fadeIn("#dialoguechoice2", 1000)
            dialogue3complete = true
            if(dialogue1complete && dialogue2complete && dialogue3complete){
                await fadeIn("#dialoguechoice4", 1000)
            }
        }
        dialogueOption4.onclick = async function () {
            await fadeOut("#dialoguechoice4", 700)
            await fadeOut("#dialoguechoice3", 700)
            await fadeOut("#dialoguechoice2", 700)
            await fadeOut("#dialoguechoice1", 700)
            await fadeOut("#dialoguetext", 700)
            document.getElementById('dialoguetext').innerHTML = "Welcome to my world.";
            await fadeIn("#dialoguetext", 1500)
            await fadeIn("#dialoguechoice5", 2000)
        }           
        dialogueOption5.onclick = async function () {
            location.assign('blomyworld.html');
        }           
    }
};



window.onload = () => {
    musicbutton = document.querySelector('.musicbutton')
    audio = document.getElementById("bgm3");
    fish = document.getElementById('fish')
    document.getElementById('dialoguetext').style.display = "none"
    document.getElementById('dialoguechoice1').style.display = "none"
    fishdialogue = 1
    mushroom = false
    promptanswered = false
    pressure = 0
    promptnotanswered = true
    nameIsGigglemouth = false
    noname = false
    $("a").addClass("clickables");
    $("u").addClass("clickables");
    nameinputformbutton = document.getElementById('nameinputformbutton')
    dialogueOption1 = document.getElementById('dialoguechoice1')
    dialogueOption2 = document.getElementById('dialoguechoice2')
    dialogueOption3 = document.getElementById('dialoguechoice3')
    dialogueOption4 = document.getElementById('dialoguechoice4')
    dialogueOption5 = document.getElementById('dialoguechoice5')
    dialogue1complete = false
    dialogue2complete = false
    dialogue3complete = false
    fullname = "Gigglemouth Twigglemoth-Thirdqueszit."
    origin = "The 9th ring in the squwy thunk sapharunq eliky oribetabitas sytas"
    audio.volume = 0.5
    audio.paused = false
    document.addEventListener('keydown', event => {
        if (event.key === "=" || event.key === "+") {
            if (audio.volume >= 0.95) {
                console.log('plus pressed; at max volume');
            }
            else {
                console.log('plus pressed; volume increased')
            }
            if (audio.volume >= 0.95) {
                audio.volume = 0.95
            }
            else {
                audio.volume = audio.volume + 0.05
            }
        }
    })
    document.addEventListener('keydown', event => {
        if (event.key === "-") {
            if (audio.volume <= 0.05) {
                console.log('minus pressed; at minimum volume');
            }
            else {
                console.log('minus pressed; volume decreased');
            }
            if (audio.volume <= 0.05) {
                audio.volume = 0.05
            }
            else {
                audio.volume = audio.volume - 0.05
            }
        }
    })
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            if (audio.paused == false) {
                audio.pause();
                musicbutton.setAttribute('src', "media/play.png")
                console.log('Music Paused');
            }
            else {
                audio.play();
                musicbutton.setAttribute('src', "media/pause.png")
                console.log('Music Unpaused');
            }
        }
    })

    musicbutton.onclick = function () {
        if (audio.paused == false) {
            audio.pause();
            musicbutton.setAttribute('src', "media/play.png")
        }
        else {
            audio.play();
            musicbutton.setAttribute('src', "media/pause.png")
        }
    }
    fish.onclick = async function () {
        console.log('fish clicked')
        if (fishdialogue == 1) {
            dialogueInProgress = true
            await fadeOut("#instruction", 1500)
            await fadeIn("#dialoguetext", 3000);
            fishdialogue = 2
            dialogueInProgress = false
        }
        else if (fishdialogue == 2 && dialogueInProgress == false) {
            dialogueInProgress = true
            await fadeOut("#dialoguetext", 1500)
            document.getElementById('dialoguetext').innerHTML = "What is your name... user?";
            await fadeIn("#dialoguetext", 1500)
            await fadeIn(".nameinputform", 1500)
                
        }
    }
    if (audio.paused) {
        musicbutton.setAttribute('src', "media/play.png")
    } 
    else {
        musicbutton.setAttribute('src', "media/pause.png")
    }
}

