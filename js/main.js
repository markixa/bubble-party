window.addEventListener('load', (event) => {
    console.log('page loaded');
    splashScreen.style.display="block";
    gameScreen.style.display="none";
    gameOverScreen.style.display="none";
  });

document.getElementById("play-btn").addEventListener("click", startGame);

//getting the canvas from the html
const canvas=document.getElementById("gameCanvas");
//getting the context from the canvas element
const ctx=canvas.getContext("2d");

let playboard,
    player,
    intervalId,
    bubbleArray=[];

let splashScreen=document.querySelector(".first-screen");
let gameScreen=document.querySelector(".game-screen");
let gameOverScreen=document.querySelector(".end-screen");

function startGame(){        
    splashScreen.style.display="none";
    gameScreen.style.display="block";
    console.log('Button working');
    playboard = new Playboard(canvas, ctx);
    player=new Player(canvas, ctx);
    bubble=new FallingBubbles(canvas, ctx);
    bubbleArray.push(bubble);
    update();
}

/* function update() {
    clear();
    //background.draw();
	player.draw();
	}
intervalId = requestAnimationFrame(update); */

//posar un comptador de frames
//fer que les bubbles surtin cada x frames (menys frames)
function update(){
    intervalId = setInterval (()=>{
        clear();
        player.draw();        
        bubbleArray.forEach((element) => {
            element.move();
            element.draw();
        });
    },1000/50);
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            player.moveLeft()
            break;
        case "ArrowRight":
            player.moveRight()
            break;
    }
})
/* 


 */

//transfer to game over screen
document.getElementById("game-over-btn").addEventListener("click", endScreen);

function endScreen(){
    gameScreen.style.display="none";
    gameOverScreen.style.display="block";
}



//transfer to splash screen
document.getElementById("restart-btn").addEventListener("click", restartScreen);
 
function restartScreen(){
    gameOverScreen.style.display="none";
    splashScreen.style.display="block";
}