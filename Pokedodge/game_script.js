var jump = new sound("Jump.wav");
var bgm = new sound("game.mp3");
var gameover = new sound("gameover.mp3");
var gravity = 1;
var paused=0;

var pika = {
    x:30,
    y:236,
    width:60,
    height:60,
    top_reach:0,
    dodge:0,
    collide:1,
    score:0
};

var pokemons = new Array();
pokemons[0]=new Image();
pokemons[0].src='charizard.png';
pokemons[1]=new Image();
pokemons[1].src='blastoise.png';
pokemons[2]=new Image();
pokemons[2].src='blaziken.png';
pokemons[3]=new Image();
pokemons[3].src='pigeotto.png';
pokemons[4]=new Image();
pokemons[4].src='squirtle.png';
pokemons[5]=new Image();
pokemons[5].src='rapidash.png';



var poke1 = {
    x:1000,
    y:233,
    speed:2,
    width:80,
    height:80
};

var poke2 = {
    x:poke1.x+450+Math.floor((Math.random() * 21)+1),
    y:233,
    speed:2,
    width:80,
    height:80
};

window.addEventListener("keydown", move, false);
var canvas = document.getElementById("game_area");
var image1 = canvas.getContext("2d");
var image2 = canvas.getContext("2d");
var image3 = canvas.getContext("2d");

var gameObj1 = new Image();
gameObj1.src= pokemons[Math.floor(Math.random() * 6)].src;
var gameObj2 = new Image();
gameObj2.src=pokemons[Math.floor(Math.random() * 6)].src;
image1.drawImage(pokemons[0], poke1.x, poke1.y,poke1.width,poke1.height);
image2.drawImage(gameObj2, poke2.x, poke2.y, poke2.width,poke2.height);

var gameObj3 = new Image();
gameObj3.src = "pikachu.gif";
image3.drawImage(gameObj3, pika.x, pika.y, pika.width, pika.height);

function sound(src) {
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "none");
            this.sound.style.display = "none";
            document.body.appendChild(this.sound);
            this.play = function(){
            this.sound.play();
            }
            this.stop = function(){
            this.sound.pause();
            }    
            }

function animate() {
    if (pika.collide == 0) {
        reqAnimFrame = window.mozRequestAnimationFrame || //since different browsers have different names for this function
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame;

        reqAnimFrame(animate);
        draw();
    }
}

function draw() {
    image1.clearRect(poke1.x, poke1.y,poke1.width,poke1.height);
    image2.clearRect(poke2.x, poke2.y,poke2.width,poke2.height);
    image3.clearRect(pika.x, pika.y, pika.width, pika.height);

    poke1.x -= poke1.speed;
    poke2.x -= poke2.speed;
    
    
    if (poke1.x == 0) {
        poke1.x = 1300;
        pika.score+=10;
        gameObj1.src= pokemons[Math.floor(Math.random() * 6)].src;
        poke1.speed+=0.1;
        
    }

    if (poke2.x == 0) {
        poke2.x = 1300;
        pika.score+=10;
        gameObj2.src= pokemons[Math.floor(Math.random() * 6)].src;
        poke2.speed+=0.1;
    }

    if (pika.dodge == 1) { //this if part is executed if spacebar is pressed
        if ((pika.y>= 10) && (pika.top_reach == 0)) {
            pika.y-= 4-gravity;
        } else {
            pika.y+=4+gravity;
            pika.top_reach++;
        }

        if (pika.y >= 236) {
            pika.dodge = 0;
            pika.top_reach = 0;
        }
    }
    image1.drawImage(gameObj1, poke1.x, poke1.y,poke1.width,poke1.height);
    image2.drawImage(gameObj2, poke2.x, poke2.y, poke2.width,poke2.height);
    image3.drawImage(gameObj3, pika.x, pika.y, pika.width, pika.height);

    if ((((pika.x + pika.width) >= poke1.x) || (pika.x >= poke1.x)) && (poke1.y <= pika.y + pika.height)) {
        bgm.stop();
        gameover.play();
        window.alert("GAME OVER !");
        pika.collide++;
        
    }

    if ((((pika.x + pika.width) >= poke2.x) || (pika.x >= poke2.x)) && (poke2.y <= pika.y + pika.height)) {
        bgm.stop();
        gameover.play();
        window.alert("GAME OVER !");
        pika.collide++;
        
    }
    document.getElementById("score").innerHTML = "SCORE : "+pika.score;
}

function move(keypress) {
    if (keypress.keyCode == 32) { // to ensure if spacebar(event keycode=32) is entered
        pika.dodge = 1;
        jump.play();
        
    }
}

function pause(){
    pika.collide++;
    pause++;
    bgm.stop();
}

function start(){
    pika.collide=0;
    if(pause==0){
        pika.score=0;
    }
    bgm.play();
    animate();
}


