class Player {
	constructor(canvas, ctx){
		this.canvas=canvas;
		this.ctx=ctx;
		this.playerPos={x:500,y:690}
		this.playerSize={w:100,h:100}
		this.playerVel=10;
		this.image=null;
		this.init()
	}

	init(){
		this.image=new Image();
		this.image.src="../images/cuteBabyLeft.png";
		
	}

	draw(){
		this.ctx.drawImage(this.image, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
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
/* 	constructor() {
		this.image=null;
		this.playerVel=2;
		this.width=50;
		this.height=20;		
		this.x = (canvas.width - this.width) / 2;
        this.y=canvas.height-this.width;
		this.init();
	}

	init(){
		this.image=new Image();
		this.image.src="images/cuteBabyLeft.png";
	}

	draw(){
		if(this.image){
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		}
	}

	moveLeft(){
		if (this.x>0) {
			this.x-=this.playerVel;
		}
	}

	moveRight() {
		if (this.x<this.canvas.width-this.width){
			this.x+=this.playerVel;
		}
	} */
}