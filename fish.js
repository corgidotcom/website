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
var prompt;
var prompttext;
var popupIsUp;
var entrancement;
var mushroomgif;
var inFormDialogue;
var entranced;
var namechecked;

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

async function popuptext(entranced, time){
    if(popupIsUp == false){
    let randomvalue = Math.floor(Math.random() * 7);
    if(randomvalue == 1){
        prompttext.textContent = "I love this one!"
    }
    else if(randomvalue == 2){
        prompttext.textContent = "That one's perfect."
    }
    else if(randomvalue == 3){
        prompttext.textContent = "Good find!"
    }
    else if(randomvalue == 4){
        prompttext.innerHTML = "Such a <br> beautiful fungus."
    }
    else if(randomvalue == 5){
        prompttext.innerHTML = "I wish I <br> could touch it."
    }
    else if(randomvalue == 6){
        prompttext.textContent = "Splendid!"
    }
    else{
        prompttext.textContent = "I love this one!"
    }
    if(entranced){
        prompttext.innerHTML = "You've become <br> entranced."
        prompt.style.display = 'inline-flex';
        await fadeOut("#dialoguetext", 1000)
        document.getElementById('dialoguetext').textContent = 'Now look what you\'ve done. Good job.'
        await fadeIn('#dialoguetext', 1000)
    }
    prompt.style.display = 'inline-flex';
    entrancement += 1
    popupIsUp = true
    if(entranced){
        setInterval(function (){
            createMushroom("media/mushroom2.gif", 40, 40)
        }, 300)
    }
    if(entranced == false){
        setTimeout(function(){
            prompt.style.display = 'none';
            popupIsUp = false
        }, time);
    }
    }
        
}

function createMushroom(src, width, height) {
        var img = document.createElement('img')
        img.setAttribute('src', src);
        img.setAttribute('width', width);
        img.setAttribute('height', height);   
        var randomx = Math.floor(document.body.clientWidth * Math.random())
        var randomy = Math.floor(2 * document.body.clientHeight * Math.random())
        img.setAttribute('style', 'position:absolute;' + 'top:' + randomy + 'px;' + 'left:' + randomx + 'px;zIndex:10');
        document.body.appendChild(img)
    }

function mushroomclicked(time){
    console.log('mushroom was definitely clicked')
    if(entrancement < 10){ // value should be 10
        popuptext(false, time)
    }
    else{
        popuptext(true, time)
    }
}
document.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        if(inFormDialogue){
            inFormDialogue = false
            getNameInput()
        }
    }
})
async function getNameInput() {
    if(namechecked == false){
        namechecked = true
        await fadeOut(".nameinputform", 1000)
        await fadeOut("#dialoguetext", 1000)
        nameinput = document.getElementById('nameinputform').value;
        console.log('user\'s name is', nameinput + "!")
        dialogueChoices()
    }
}
function niceName() {
    if (nameinput.length >= 40){
        nameinput = nameinput.slice(0, 40)
    }
    if (nameinput.toLowerCase().includes("gigglemouth")) {
        nameIsGigglemouth = true
        document.getElementById('dialoguetext').textContent = nameinput + "...? What a coincidence, we have the same name. What can I do for you?";
    }
    else if (nameinput.trim() == "") {
        document.getElementById('dialoguetext').textContent = "You don't want to tell me your name? I understand. What can I do for you?";
        noname = true
    }
    else {
        randomvalue = Math.random() * 100;
        if (randomvalue <= 10) { // should be 10 (value = percentage chance of mushroom)
            console.log("mushroom path true, random value is", randomvalue)
            document.getElementById('dialoguetext').textContent = nameinput + ", I want you to have these ancient spores. You can grow them wherever you like as long as it is not populated since these mushrooms are very deadly. Come back when you are done, and be careful.";
            mushroom = true
        }
        else {
            mushroom = false
            console.log("mushroom path false, random value is", randomvalue)
            randomvalue = Math.floor(Math.random() * 4);
            console.log('randomvalue is', randomvalue)
            if (randomvalue == 0) {
                randomvalue = 1
            }
            if (randomvalue == 1) {
                document.getElementById('dialoguetext').textContent = nameinput + "... What a nice name. What can I do for you?";
            }
            else if (randomvalue == 2) {
                document.getElementById('dialoguetext').textContent = nameinput + "... What an interesting name. Is there anything I can do for you?";
            }
            else if (randomvalue == 3) {
                document.getElementById('dialoguetext').textContent = nameinput + "... What a unique name. Sorry, what is it you wanted?";
            }
        }
    }
}
async function dialogueChoices() {
    namechecked = true
    niceName()
    if (mushroom) {
        await fadeIn("#dialoguetext", 2500);

        document.getElementById('dialoguechoice1').innerHTML = "<u class=\"clickables\">...oops?</u>";
        
        await fadeIn("#dialoguechoice1", 1500);

        dialogueOption1.onclick = async function () {
            await fadeOut("#dialoguechoice1", 1500);
            await fadeOut("#dialoguetext", 1500);

            document.getElementById('dialoguetext').textContent = "... how ... how could you drop them? I gave you a single task and you ruined it. Don't listen to it, whatever it says.";
            prompttext.textContent = "I love this one!"

            await fadeIn("#dialoguetext", 1500);

            await fadeIn("#mushroomgif2", 1500)
        }
    }
    else {
        await fadeIn("#dialoguetext", 2500)

        await fadeIn("#dialoguechoice1", 1000)
        
        await fadeIn("#dialoguechoice2", 1000)

        await fadeIn("#dialoguechoice3", 1000)

        dialogueOption1.onclick = async function () {
            let intransition = false;

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

            if(intransition == false){pressure = pressure + 1}
            intransition = true
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
            intransition = false
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
    minus = document.querySelector('.minusbutton')
    plus = document.querySelector('.plusbutton')
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
    mushroomgif = document.getElementById('mushroomgif2')
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
    inFormDialogue = false
    entrancement = 0
    entranced = false
    prompt = document.getElementById('prompt')
    popupIsUp = false
    prompttext = document.getElementById('prompttext');
    img = document.createElement("img");
    fullname = "Gigglemouth Twigglemoth-Thirdqueszit."
    origin = "The 9th ring in the squwy thunk sapharunq eliky oribetabitas sytas"
    audio.volume = 0.5
    audio.paused = false
    namechecked = false
    function lowervolume(){
            if(audio.volume <=0.05){
            console.log('minus pressed; at minimum volume');
            }
            else{
            console.log('minus pressed; volume decreased');
            }
            if(audio.volume <= 0.05){
                audio.volume = 0.05
            }
            else{
                audio.volume = audio.volume - 0.05
            }
    }
    function raisevolume(){
        if(audio.volume >= 0.95){
            console.log('plus pressed; at max volume');
        }
        else{
            console.log('plus pressed; volume increased')
        }
        if(audio.volume >= 0.95){
            audio.volume = 0.95
        }
        else{
            audio.volume = audio.volume + 0.05
        }
    }
    document.addEventListener('keydown', event => {
        if (event.key === "=" || event.key === "+" ) {
            raisevolume()
        }
    })
    document.addEventListener('keydown', event => {
        if (event.key === "-") {
            lowervolume()
        }
    })

    minus.onclick = function(){
        lowervolume()
    }
    plus.onclick = function(){
        raisevolume()
    }
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
            inFormDialogue = true
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
