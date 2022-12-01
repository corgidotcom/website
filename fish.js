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
let nameinputformbutton;
var pressure;
var inotherdialogue;
function getNameInput(){
    $(".nameinputform").fadeOut(1000, function(){
        $("#dialoguetext").fadeOut(1000, function(){
            nameinput = document.getElementById('nameinputform').value; 
            console.log('prompt answered was set to true and promptnotanswered was set to false')
            dialogueChoices()
        })
    })
}
function niceName(){
    if(nameinput.toLowerCase().includes("gigglemouth"))
    {
    document.getElementById('dialoguetext').innerHTML = nameinput + "...? What a coincidence, we have the same name. What can I do for you?";
    }
    else if(nameinput.trim() == ""){
    document.getElementById('dialoguetext').innerHTML = "You don't want to tell me your name? I understand. What can I do for you?";
    }
    else{
    document.getElementById('dialoguetext').innerHTML = nameinput + "... What a nice name. What can I do for you?";
    }
}
function dialogueChoices() {
    console.log('user presented with dialogue choices')
    niceName()
    $("#dialoguetext").fadeIn(2500, function(){
        $("#dialoguewherefrom").fadeIn(1000, function(){
            $("#dialoguewhereami").fadeIn(1000, function(){
                $("#dialoguewhatsyourname").fadeIn(1000, function(){
                    dialogueOption1.onclick = function(){
                        $("#dialoguewhatsyourname").fadeOut(700, function(){
                            $("#dialoguewhereami").fadeOut(700, function(){
                                $("#dialoguewherefrom").fadeOut(700, function(){
                                    $("#dialoguetext").fadeOut(700, function(){
                                        if(pressure == 0){
                                        document.getElementById('dialoguetext').innerHTML = "...you want to know where I'm from? That's private information. I won't tell you."; 
                                        }
                                        else if(pressure == 1){
                                            document.getElementById('dialoguetext').innerHTML = "Stop asking. I won't tell you. I'm from a different planet, you wouldn't have heard of it anyway.";
                                        }
                                        else if(pressure == 2){
                                            document.getElementById('dialoguetext').innerHTML = "Do you really want to know? Fine. I'm from Heptinuputus. I told you you wouldn't have heard of it. It's not relevant anyways.";
                                        }
                                        else if(pressure > 2){
                                        document.getElementById('dialoguetext').innerHTML = "I already told you where I'm from.";
                                        }
                                        pressure = pressure + 1
                                        console.log('pressure increased. Current pressure:', pressure)
                                        $("#dialoguetext").fadeIn(1500, function(){
                                            if(pressure <= 2){
                                                if(pressure == 1){
                                                    document.getElementById('dialoguewherefrom').innerHTML = "<u>Come on... tell me!</u>";
                                                    }
                                                else if(pressure == 2){
                                                    document.getElementById('dialoguewherefrom').innerHTML = "<u>I want to know.</u>";
                                                }
                                                else if(pressure > 2 || pressure == 0){
                                                    document.getElementById('dialoguewherefrom').innerHTML = "<u>Where are you from?</u>";
                                                }
                                                $("#dialoguewherefrom").fadeIn(1000, function(){
                                                    $("#dialoguewhereami").fadeIn(1000, function(){
                                                        $("#dialoguewhatsyourname").fadeIn(1000, function(){
                                                        })
                                                    })
                                                })
                                            }
                                            else{
                                                $("#dialoguewhereami").fadeIn(1000, function(){
                                                    $("#dialoguewhatsyourname").fadeIn(1000, function(){
                                                        })
                                                    })
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    }
                    dialogueOption2.onclick = function(){
                        $("#dialoguewhatsyourname").fadeOut(700, function(){
                            $("#dialoguewhereami").fadeOut(700, function(){
                                $("#dialoguewherefrom").fadeOut(700, function(){
                                    $("#dialoguetext").fadeOut(700, function(){
                                        document.getElementById('dialoguewherefrom').innerHTML = "<u>Where are you from?</u>";
                                        document.getElementById('dialoguetext').innerHTML = "We're currently at an in between, or at least that's what I like to call it. Nothing really exists here. It's perfectly secluded, so it's a great spot for a conversation. Was there anything else?";
                                        $("#dialoguetext").fadeIn(1500, function(){
                                            $("#dialoguewherefrom").fadeIn(1000, function(){
                                                $("#dialoguewhatsyourname").fadeIn(1000, function(){
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                    dialogueOption3.onclick = function(){
                        $("#dialoguewhatsyourname").fadeOut(700, function(){
                            $("#dialoguewhereami").fadeOut(700, function(){
                                $("#dialoguewherefrom").fadeOut(700, function(){
                                    $("#dialoguetext").fadeOut(700, function(){
                                        document.getElementById('dialoguewherefrom').innerHTML = "<u>Where are you from?</u>";
                                        document.getElementById('dialoguetext').innerHTML = "My name is" + fullname + " Please don't make fun of me or my name. I Will be Very Sad And Might Start Crying.";
                                        $("#dialoguetext").fadeIn(1500, function(){
                                            $("#dialoguewherefrom").fadeIn(1000, function(){
                                                $("#dialoguewhereami").fadeIn(1000, function(){
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                })
            })
        })

    });

}


window.onload = () => {
    musicbutton = document.querySelector('.musicbutton')
    audio = document.getElementById("bgm3");
    fish = document.getElementById('fish')
    document.getElementById('dialoguetext').style.display = "none"
    document.getElementById('dialoguewherefrom').style.display = "none"
    fishdialogue = 1
    promptanswered = false
    pressure = 0
    promptnotanswered = true
    nameinputformbutton = document.getElementById('nameinputformbutton')
    dialogueOption1 = document.getElementById('dialoguewherefrom')
    dialogueOption2 = document.getElementById('dialoguewhereami')
    dialogueOption3 = document.getElementById('dialoguewhatsyourname')
    fullname = "Gigglemouth Twigglemoth-Thirdqueszit."
    origin = "The 9th ring in the squwy thunk sapharunq eliky oribetabitas sytas"
    audio.volume = 0.5
    audio.paused = false
    if (audio.paused) {
        musicbutton.setAttribute('src', "media/play.png")
    } else {
        musicbutton.setAttribute('src', "media/pause.png")
    }
    document.addEventListener('keydown', event => {
        if (event.key === "=" || event.key === "+" ) {
            if(audio.volume >= 0.95){
                console.log('plus pressed; at max volume');
                }
                else{
                console.log('plus pressed; volume increased')
                }
            if(audio.volume >= 0.95)
            {
                audio.volume = 0.95
            }
            else
            {
                audio.volume = audio.volume + 0.05
            }
        }
    })
    document.addEventListener('keydown', event => {
        if (event.key === "-") {
            if(audio.volume <=0.05){
                console.log('minus pressed; at minimum volume');
                }
                else{
                console.log('minus pressed; volume decreased');
                }
            if(audio.volume <= 0.05)
            {
                audio.volume = 0.05
            }
            else
            {
                audio.volume = audio.volume - 0.05
            }
        }
    })
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            console.log('Space pressed');
            if(audio.paused == false)
            {
                audio.pause();
                musicbutton.setAttribute('src', "media/play.png")
            }
            else
            {
                audio.play();
                musicbutton.setAttribute('src', "media/pause.png")
            }
        }
    })

    musicbutton.onclick = function(){
        if(audio.paused == false)
        {
            audio.pause();
            musicbutton.setAttribute('src', "media/play.png")
        }
        else
        {
            audio.play();
            musicbutton.setAttribute('src', "media/pause.png")
        }
    }
    fish.onclick = function(){
        console.log('fish clicked')
        if(fishdialogue == 1)
        {
            dialogueInProgress = true
            $("#instruction").fadeOut(1500, function(){
                $("#dialoguetext").fadeIn(3000);
            })
            fishdialogue = 2
            dialogueInProgress = false
        }
        else if(fishdialogue == 2 && dialogueInProgress == false)
        {
            dialogueInProgress = true
            $("#dialoguetext").fadeOut(1500, function(){
                document.getElementById('dialoguetext').innerHTML = "What is your name... user?";
                console.log('fish asked for name')
            });
            $("#dialoguetext").fadeIn(1500, function(){
                $(".nameinputform").fadeIn(1500, function(){
                    console.log('user prompted')
                })
            });
        }
    }
}

