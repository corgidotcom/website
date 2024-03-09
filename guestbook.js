let musicbutton;
var audio;

async function getNames(){
    let res = await fetch('https://corgidot.com/guestbook/json');
    let obj = await res.json();
    let objlength = Object.keys(obj[0]).length
    for(let i = 0; i < objlength; i++) {
        let newdiv = document.createElement("div")
        let newfieldset = document.createElement("fieldset")
        newdiv.setAttribute("class", "guestbookentries")
        newdiv.setAttribute("id", "div" + i.toString())
        newfieldset.setAttribute("class", "entryfieldset guestbook")
        newfieldset.setAttribute("id", "fs" + i.toString())
        document.getElementById("entries").appendChild(newdiv)
        document.getElementById("div" + i.toString()).appendChild(newfieldset)
        document.getElementById("fs" + i.toString()).appendChild(document.createElement("label")).innerHTML = "Date: " + Object.values(obj[3])[i].toString()
        document.getElementById("fs" + i.toString()).appendChild(document.createElement("label")).innerHTML = "Name: " + Object.values(obj[0])[i].toString()
        document.getElementById("fs" + i.toString()).appendChild(document.createElement("label")).innerHTML = "Location: " + Object.values(obj[1])[i].toString()
        document.getElementById("fs" + i.toString()).appendChild(document.createElement("label")).innerHTML = "Comment: " + Object.values(obj[2])[i].toString()
    }
}
window.onload = () => {
    musicbutton = document.querySelector('.musicbutton')
    audio = document.getElementById("guestroomsong");
    minus = document.querySelector('.minusbutton')
    plus = document.querySelector('.plusbutton')
    audio.volume = 0.25
    audio.paused = false
    $("a").addClass("clickables");
    $("u").addClass("clickables");
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

    musicbutton.onclick = function(){
        Onbuttoninteraction()
    }
    function Onbuttoninteraction(){
        if(audio.paused == false)
        {
            audio.pause();
            musicbutton.setAttribute('src', "media/play.png");
            console.log("Music Paused")
        }
        else
        {
            audio.play();
            musicbutton.setAttribute('src', "media/pause.png");
            console.log("Music Played")
        }
    }
    if(audio.paused) {
        musicbutton.setAttribute('src', "media/play.png")
    } else {
        musicbutton.setAttribute('src', "media/pause.png")
    }
    getNames()
}

async function uploadForm(){
    let res = await fetch('https://corgidot.com/guestbook/json')
    let formData = {}
    const name = document.getElementById("nameform").value
    const location = document.getElementById("locform").value
    const comment = document.getElementById("comform").value
    const date = new Date()
    const mmddyyyy = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
    formData["name"] = name
    formData["location"] = location
    formData["comment"] = comment
    formData["date"] = mmddyyyy
    if((comment == '' || comment === null) && (location == '' || location === null) && (name == '' || name === null)){
        alert("No value was inputted!")
    }
    else if(comment.length > 200 || name.length > 50 || location.length > 50){
        alert("One of your inputs is too long!")
    }
    else{
        await fetch('https://corgidot.com/guestbook/handleJSON', {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(formData),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    document.getElementById("nameform").value = ""
    document.getElementById("locform").value = ""
    document.getElementById("comform").value = ""
}
