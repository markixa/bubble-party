class Player {
	constructor(canvas, ctx){
		this.canvas=canvas;
		this.ctx=ctx;
		this.playerPos={x:500,y:690}
		this.playerSize={w:100,h:100}
		this.playerVel=10;
		//this.image=null;
		this.imageRight=null;
		this.imageLeft=null;
		this.side="right"
		this.init()
	}

	init(){
		this.imageRight=new Image;
		this.imageRight.src="images/cuteBabyRight.png"
		this.imageLeft=new Image;
		this.imageLeft.src="images/cuteBabyLeft.png"
	}

	draw(){
		this.ctx.drawImage(this.side === "right" ? this.imageRight : this.imageLeft, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
	}

	moveLeft(){
		if (this.playerPos.x>0) {
			this.playerPos.x-=this.playerVel;
		}
	}

	moveRight() {
		if (this.playerPos.x<this.canvas.width-this.playerSize.w){
			this.playerPos.x+=this.playerVel;
		}
	}
}