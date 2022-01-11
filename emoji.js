var showCard = document.querySelectorAll('.fas');
var Eyecard = document.getElementById('eyes-card');
var Skincard = document.getElementById('skin-card');
var mouthCard = document.getElementById('mouth-card');

showCard.forEach(function(show){
    show.addEventListener('click',function(){
        if(show.classList.contains('show-eyes-card'))
        {
            Eyecard.style.display="block";
            Skincard.style.display="none";
            mouthCard.style.display="none";
        }
        else if(show.classList.contains('show-mouth-card'))
        {
            Eyecard.style.display="none";
            Skincard.style.display="none";
            mouthCard.style.display="block";
        }
        else if(show.classList.contains('show-skin-card'))
        {
            Eyecard.style.display="none";
            Skincard.style.display="block";
            mouthCard.style.display="none";
        }
    })

});

var greenSkin = document.getElementById('green-skin');
var redSkin = document.getElementById('red-skin');
var yellowSkin = document.getElementById('yellow-skin');
var Skin = document.getElementById('skin');
var Eyes = document.getElementById('eyes');
var Mouth = document.getElementById('mouth');

greenSkin.addEventListener('click',function(){
    Skin.src="./assets/green.png";
    Eyecard.style.display="block";
    Skincard.style.display="none";
    mouthCard.style.display="none";

});
redSkin.addEventListener('click',function(){
    Skin.src="./assets/red.png";
    Eyecard.style.display="block";
    Skincard.style.display="none";
    mouthCard.style.display="none";
});
yellowSkin.addEventListener('click',function(){
    Skin.src="./assets/yellow.png";
    Eyecard.style.display="block";
    Skincard.style.display="none";
    mouthCard.style.display="none";
});

var laughing = document.getElementById('eye-laughing');
var long = document.getElementById('eye-long');
var normal = document.getElementById('eye-normal');
var winking = document.getElementById('eye-winking');
var rolling = document.getElementById('eye-rolling');
var closing= document.getElementById('eye-closed');

laughing.addEventListener('click',function(){
    Eyes.src="./assets/laughing.png";
    Eyecard.style.display="none";
    Skincard.style.display="none";
    mouthCard.style.display="block";
});
long.addEventListener('click',function(){
    Eyes.src="./assets/long.png";
    Eyecard.style.display="none";
    Skincard.style.display="none";
    mouthCard.style.display="block";
});
normal.addEventListener('click',function(){
    Eyes.src="./assets/normal.png";
    Eyecard.style.display="none";
    Skincard.style.display="none";
    mouthCard.style.display="block";
});
winking.addEventListener('click',function(){
    Eyes.src="./assets/winking.png";
    Eyecard.style.display="none";
    Skincard.style.display="none";
    mouthCard.style.display="block";
});
rolling.addEventListener('click',function(){
    Eyes.src="./assets/rolling.png";
    Eyecard.style.display="none";
    Skincard.style.display="none";
    mouthCard.style.display="block";
});
closing.addEventListener('click',function(){
    Eyes.src="./assets/closed.png";
    Eyecard.style.display="none";
    Skincard.style.display="none";
    mouthCard.style.display="block";
});

var Open = document.getElementById('mouth-open');
var sad = document.getElementById('mouth-sad');
var smiling = document.getElementById('mouth-smiling');
var straight = document.getElementById('mouth-straight');
var teeth = document.getElementById('mouth-teeth');

Open.addEventListener('click',function(){
    Mouth.src="./assets/open.png";
});
sad.addEventListener('click',function(){
    Mouth.src="./assets/sad.png";
});
smiling.addEventListener('click',function(){
    Mouth.src="./assets/smiling.png";
});
straight.addEventListener('click',function(){
    Mouth.src="./assets/straight.png";
});
teeth.addEventListener('click',function(){
    Mouth.src="./assets/teeth.png";
});