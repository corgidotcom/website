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
}
