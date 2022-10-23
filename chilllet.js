let musicbutton;
var audio;

window.onload = () => {
    musicbutton = document.querySelector('.musicbutton')
    audio = document.getElementById("desire");
    audio.volume = 0.2
    audio.paused = false
    if (audio.paused) {
        musicbutton.setAttribute('src', "media/play.png")
    } else {
        musicbutton.setAttribute('src', "media/pause.png")
    }

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
}
