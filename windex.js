const date = new Date()
var day = date.getDate()
var month = date.getMonth()+1
var year = date.getFullYear()
var fulldate = "undefined"
var pauseplaybutton = document.getElementById('pauseplaybutton')
var numbers = document.getElementsByTagName('span')
var animationstate = 'running'
var animalphoto = document.getElementById('animalphoto')
var body = document.getElementById('body')
var animal = 'dog'
var prompt = document.getElementById('prompt')
var img = document.createElement("img");
window.onload = () => {
    year = year.toString()
    year = year.slice(2,4)
    fulldate = month + "/" + day + "/" + year
    console.log(fulldate)
    document.getElementById('datebox').textContent = "Today is " + fulldate
    console.log(numbers)
    if(numbers[0].style.animationPlayState == 'paused'){
        animationstate = 'paused'
        console.log(animationstate)
    }
    else{
        animationstate = 'running'
        console.log(animationstate)
    }
}
pauseplaybutton.onclick = function(){
    if(animationstate == 'running'){
    numbers[0].style.animationPlayState = 'paused';
    numbers[1].style.animationPlayState = 'paused';
    numbers[2].style.animationPlayState = 'paused';
    numbers[3].style.animationPlayState = 'paused';
    numbers[4].style.animationPlayState = 'paused';
    numbers[5].style.animationPlayState = 'paused';
    animalphoto.style.animationPlayState = 'paused';
    body.style.animationPlayState = 'paused';
    animationstate = 'paused'
    console.log('animation is now ' + animationstate)
    pauseplaybutton.textContent = "Play animations"
    }
    else{
    numbers[0].style.animationPlayState = 'running';
    numbers[1].style.animationPlayState = 'running';
    numbers[2].style.animationPlayState = 'running';
    numbers[3].style.animationPlayState = 'running';
    numbers[4].style.animationPlayState = 'running';
    numbers[5].style.animationPlayState = 'running';
    animalphoto.style.animationPlayState = 'running';
    body.style.animationPlayState = 'running';
    animationstate = 'running'
    console.log('animation is now ' + animationstate)
    pauseplaybutton.textContent = "Pause animations"
    }
   
}
function formsubmit(){
    const button = document.getElementById('input')
    const form = document.getElementById('form')
    if(form.value.includes("rickroll")){
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else{
        prompt.style.display = 'inline-flex';
        mushroom("media/mushroom.webp", 40, 40)
        setTimeout(function(){
            prompt.style.display = 'none';
            document.body.removeChild(img)
        }, 2000);
    }
}
document.addEventListener('keydown', event => {
    if(event.key == "Enter"){
        formsubmit()
    }
})
animalphoto.onclick = function(){
    console.log('animal clicked')
    if(animal === 'dog'){
        animalphoto.setAttribute('src', 'media/cat.png')   
        animal = 'cat'
    }
    else if(animal === 'cat'){
        animalphoto.setAttribute('src', 'media/dog.png')
        animal = 'dog'
    }
}
function mushroom(src, width, height) {
    var randomizer
    img.src = src;
    img.width = width;
    img.height = height;
    
    // set the position
    img.style.position = 'absolute';
    img.style.zIndex = 10
    randomizer = document.body.clientHeight * Math.random();
    console.log(randomizer)
    if(randomizer > 550){
        img.style.top = 550 + 'px';
    }
    else{
        img.style.top = randomizer + 'px'
    }
    img.style.left = document.body.clientWidth * Math.random() + 'px';

    console.log("mushroom created at " + img.style.top  +  img.style.left)

    document.body.appendChild(img);
  }