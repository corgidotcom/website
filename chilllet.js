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
}
