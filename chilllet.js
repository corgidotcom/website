let musicbutton = document.querySelector('.musicbutton')
var audio = document.getElementById("desire");
audio.volume = 0.2
audio.paused = false

musicbutton.onclick = function(){
    let mySrc = musicbutton.getAttribute("src");
    if(mySrc == "media/pause.png")
    {
        musicbutton.setAttribute('src', "media/play.png")
    }
    else
    {
        musicbutton.setAttribute('src', "media/pause.png")
    }
    if(audio.paused == false)
    {
        audio.pause();
    }
    else
    {
        audio.play();
    }
}