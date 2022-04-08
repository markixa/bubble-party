
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
    bubbleArray=[],
    frameCount=0,
    scoreCount=0,
    level=0;

let splashScreen=document.querySelector(".first-screen");
let gameScreen=document.querySelector(".game-screen");
let gameOverScreen=document.querySelector(".end-screen");

function startGame(){        
    splashScreen.style.display="none";
    gameScreen.style.display="block";
    console.log('Button working');
    playboard=new Playboard(canvas, ctx);
    player=new Player(canvas, ctx);
    bubble=new FallingBubbles(canvas, ctx);
    bubbleArray.push(bubble);
    update();
}

//posar un comptador de frames
//fer que les bubbles surtin cada x frames (menys frames)

function update(){  
        clear();
        frameCount++;
        player.draw();
        if ((frameCount/20)%20==0) {
            bubbleArray.push(new FallingBubbles(canvas, ctx));
        }
        for(let i=0; i<bubbleArray.length; i++){
                bubbleArray[i].move();
                bubbleArray[i].draw();
        }
        scoreShow();
        levelShow();    

    if(bubbleBurst()){
        
    }

    if(bubbleBottomTouch()){
        endScreen();
    }    
    
    intervalId=requestAnimationFrame(update);
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


//function that dfetects when a bubble touches the end of the screen and ends the game
function bubbleBottomTouch() {
	let collision=false;
    for(let i=0; i<bubbleArray.length; i++){
        if(bubbleArray[i].bubblePos.y==800){
            collision=true;
        }
        if(collision){
            break;
        }
    }
    return collision;
}

//function that detects if the baby has catched a bubble
//makes bubble dissapear
function bubbleBurst(){
    let burst=false;
    for(let i=0; i<bubbleArray.length; i++){
        if(bubbleArray[i].bubblePos.y==player.playerPos.x){
            burst=true;
        }   
        if(burst){
            bubbleArray.splice(i);
            break;
        }
    }
    return burst;
}

//draw score
function scoreShow(){
    ctx.fillStyle='#ffb3ff';
	ctx.font = "bold 36px Comic Sans MS";
    calculateScore();
	ctx.fillText(`Score: ${Math.floor(scoreCount/10)}`, 20, 50); 
}

function calculateScore(){
    scoreCount=setInterval(scoreCount++,1);
    return scoreCount;
}

function levelShow(){
    ctx.fillStyle='#ffb3ff';
	ctx.font = "bold 36px Comic Sans MS";
    calculateLevel();
	ctx.fillText(`Level: ${Math.floor(level)}`, 830, 50); 
}

function calculateLevel(){
    if(scoreCount%100==0){
        level++;
    }
    return level;
}

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
    reset();
}

function reset() {
	cancelAnimationFrame(intervalId);
	playboard=null;
	player=null;
	bubbleArray=[];
	scoreCount=0;
	level=0;
}