class FallingBubbles {
    constructor(canvas, ctx){
        this.canvas=canvas;
        this.ctx=ctx;
        this.bubblePos={x:this.randomX(),y:0}
		this.bubbleSize={w:this.randomSize(),h:this.randomSize()}
		this.bubbleVel=this.setSpeed();
        this.img=null;
        this.bubbleImgArr=[];
        this.init();
    }

    init(){
        this.addImages();
        /* this.img=this.randomImg(); */
    }

    addImages(){
        let image1=new Image();
        image1.src="../images/bubbles/bub1.png"
        this.bubbleImgArr.push(image1);

        let image2=new Image();
        image1.src="../images/bubbles/bub2.png"
        this.bubbleImgArr.push(image2);

        let image3=new Image();
        image1.src="../images/bubbles/bub3.png"
        this.bubbleImgArr.push(image3);

        let image4=new Image();
        image1.src="../images/bubbles/bub4.png"
        this.bubbleImgArr.push(image4);

        let image5=new Image();
        image1.src="../images/bubbles/bub5.png"
        this.bubbleImgArr.push(image5);

        let image6=new Image();
        image1.src="../images/bubbles/bub6.png"
        this.bubbleImgArr.push(image6);

        let image7=new Image();
        image1.src="../images/bubbles/bub7.png"
        this.bubbleImgArr.push(image7);
    }

    

    draw(){
		this.ctx.drawImage(this.randomImg(), this.bubblePos.x, this.bubblePos.y, this.bubbleSize.w, this.bubbleSize.h);
        console.log(this.img);
	}

	move() {
		this.bubblePos.y += this.bubbleVel;
	}




    randomImg(){
        return this.bubbleImgArr[Math.floor(Math.random()*this.bubbleImgArr.length)]
    }

    randomX(){
        return Math.floor(Math.random()*(990 - 10) + 10);
    }

    randomSize(){
        return Math.floor(Math.random()+(50-20)+20);
    }

    setSpeed(){
        return 5;
    }
}