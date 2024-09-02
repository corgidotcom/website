let musicbutton;
var audio;



window.onload = () => {
    musicbutton = document.querySelector('.musicbutton')
    audio = document.getElementById("beatroomsong");
    minus = document.querySelector('.minusbutton')
    plus = document.querySelector('.plusbutton')
    twinfantasycover = document.getElementById('twinfantasycover')
    icedancercover = document.getElementById('icedancercover')
    frailtycover = document.getElementById('frailtycover')
    madvillainycover = document.getElementById('madvillainycover')
    exhibitionmodecover = document.getElementById('exhibitionmodecover')
    bratcover = document.getElementById('bratcover')
    iusedtojustcryaboutitcover = document.getElementById('iusedtojustcryaboutitcover')
    theglowpt2cover = document.getElementById('theglowpt2cover')
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
    function switchsong(song){
        audio.pause();
        audio = song;
        audio.play();
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
    function pauseplay(){
        if(audio.paused == false)
            {
                audio.pause();
                musicbutton.setAttribute('src', "media/play.png")
            }
            else
            {
                if(audio != document.getElementById("beatroomsong")){
                    switchsong(document.getElementById("beatroomsong"));
                } else{
                    audio.play();
                }
                musicbutton.setAttribute('src', "media/pause.png");
            }
    }
    function playpreview(previewsong){
        oldvolume = audio.volume;
        oldtime = audio.currentTime;
        switchsong(previewsong);
        audio.volume = oldvolume;
        audio.currentTime = 0;
        audio.paused = false;
        audio.addEventListener("ended", function(){
            switchsong(document.getElementById("beatroomsong"));
            audio.currentTime = oldtime;
       });
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
            pauseplay();
            console.log('Space pressed');
        }
    })
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

    // Album Cover Onclick events
    twinfantasycover.onclick = function(){
        playpreview(document.getElementById("twinfantasypreview"))
    }
    icedancercover.onclick = function(){
        playpreview(document.getElementById("icedancerpreview"))
    }
    frailtycover.onclick = function(){
        playpreview(document.getElementById("frailtypreview"))
    }
    madvillainycover.onclick = function(){
        playpreview(document.getElementById("madvillainypreview"))
    }
    exhibitionmodecover.onclick = function(){
        playpreview(document.getElementById("exhibitionmodepreview"))
    }
    bratcover.onclick = function(){
        playpreview(document.getElementById("bratpreview"))
    }
    iusedtojustcryaboutitcover.onclick = function(){
        playpreview(document.getElementById("iusedtojustcryaboutitpreview"))
    }
    theglowpt2cover.onclick = function(){
        playpreview(document.getElementById("theglowpt2preview"))
    }
}
