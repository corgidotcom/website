let musicbutton;
var audio;



window.onload = () => {
    musicbutton = document.querySelector('.musicbutton')
    audio = document.getElementById("realitysurf");
    audio.volume = 0.2
    audio.paused = false
    if (audio.paused) {
        musicbutton.setAttribute('src', "media/play.png")
    } else {
        musicbutton.setAttribute('src', "media/pause.png")
    }

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
}
