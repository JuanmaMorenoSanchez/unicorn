/************************************************************
 *                                                            *
 *                        VARIABLES                           *
 *                                                            *
 **************************************************************/

var copyright = "Juanma Moreno Sánchez, 2018";
//var moreInfo = "Press 'i' for more information";

var bg;
var yasmina, hands;
var canvas;

var showMoreText = false;

/************************************************************
 *                                                            *
 *                            SETUP                           *
 *                                                            *
 **************************************************************/

function preload(){
	//yasmina = loadAnimation('assets/yasmina01.png', 'assets/yasmina05.png');
	if (windowWidth > windowHeight) {
		bg = loadImage("assets/background.jpg", windowWidth, windowHeight);
	} else {
		bg = loadImage("assets/backgroundmovil.jpg", windowWidth, windowHeight);
	}
} 
 
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	frameRate(40);
	
	yasmina = createSprite(windowWidth/2, windowHeight-200 );
	yasmina.addAnimation('normal', 'assets/yasmina01.png', 'assets/yasmina05.png');
	
	hands = createSprite(200, 100);
	hands.addAnimation('normal', 'assets/hands01.png', 'assets/hands04.png');
	hands.addAnimation('invert', 'assets/handsinvert01.png', 'assets/handsinvert03.png');
}

/************************************************************
 *                                                            *
 *                            DRAW                            *
 *                                                            *
 **************************************************************/

function draw() {
	clear();
	background(bg);
	
	getTexts();

	//animation(yasmina, windowWidth/2, windowHeight-yasmina.getHeight()/2);
	
	if(hands.overlap(yasmina)) {
		hands.changeAnimation('invert');
	}
	else {
		hands.changeAnimation('normal');
	}
	
	hands.position.x = mouseX;
	hands.position.y = mouseY;
	
	drawSprites();
}


/************************************************************
 *                                                            *
 *                            EVENTS                          *
 *                                                            *
 **************************************************************/

 /*
function keyPressed() {
	if (key == 'I' || keyCode == 73){
		showMoreText = ! showMoreText
	}
}*/
/*
function mousePressed() {
  //background(bg);
  getTexts()
  drawTopElements();
}*/


/************************************************************
 *                                                            *
 *                           FUNCTIONS                        *
 *                                                            *
 **************************************************************/

function getTexts() {
	fill(200);
	if (windowWidth > windowHeight) {
		textSize(16);
		text(copyright, 10, 80)
	} else {
		textSize(28);
		text(copyright, 10, 120)
	}
	/*
	if (!showMoreText) {
		//text(moreInfo, 10, 40)
	}
	else {
		//text("XXXX", 10, 60)
	}*/
}