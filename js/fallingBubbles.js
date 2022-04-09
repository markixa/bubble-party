class FallingBubbles {
    constructor(canvas, ctx){
        this.canvas=canvas;
        this.ctx=ctx;
        this.bubblePos={x:this.randomX(),y:0}
		this.bubbleSize={w:this.randomSize()}
		this.bubbleVel=this.setSpeed();
        this.img=null;
        this.bubbleImgArr=[];
        this.init();
    }

    init(){     
        this.img =new Image();
        this.img.src=`images/bubbles/bub${Math.floor(Math.random()*7)+1}.png`;
    }

    draw(){
		this.ctx.drawImage(this.img, this.bubblePos.x, this.bubblePos.y, this.bubbleSize.w, this.bubbleSize.w);
	}

	move() {
		this.bubblePos.y += this.bubbleVel;
	}

    randomImg(){
        return this.bubbleImgArr[Math.floor(Math.random()*this.bubbleImgArr.length)];
    }

    randomX(){
        return Math.floor(Math.random()*(950 - 50) + 50);
    }

    randomSize(){
        return Math.floor(Math.random()+(60-30)+30);
    }

    setSpeed(){
        let speed=2;
        return speed;
    }
}