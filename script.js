

var game = document.getElementById("game");
var hole = document.getElementById("hole");
var block = document.getElementById("block");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

game.style.margin = 10 + "px";
hole.addEventListener("animationiteration", ()=>{

    var random = (Math.random()*3);
    var top = ((random *100 )+ 150);
    hole.style.top = -(top) + "px";
    counter++;
});

setInterval(function(){
    var characterTop =
     parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop + 3) + "px";
    }

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)
    || ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)
    || (cTop>holeTop+130)))){
        alert("game over");
        character.style.top = 100 + "px";
        counter = 0;
    }
},10);

function jump(){
    jumping = 1;  
     var jumpCount = 0;
     let jumpInterval = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if((characterTop>6) && (counter < 15))
            {
            character.style.top = (characterTop - 2) + "px";     
            }
        
        if(jumpCount>20)
            {
                clearInterval(jumpInterval);
                jumping=0;
                jumpCount=0;
            }
        jumpCount++;
    },10)  
    }
    
    /* 
       0. creo una funcion creo una variable y la declaro con event.KeyCode
       1. event.Keycode capturara el codigo de la tecla presionada
       2. busco en google keycode info y ahi encuentro el codigo de la tecla que deseo utilizar
       3. comparo si la keycode capturada es igual a la que deseo usar
       y si es true, lanzo la funcion.
       4. Le digo a el navegador que escuche mi funcion con 
       windowonKeydown = nombrefuncion();
    */


    function touchKey(){

        space = event.keyCode;
        console.log(space);

        if(space == 32){
            jump();
        }

    }

    window.onkeydown = touchKey;