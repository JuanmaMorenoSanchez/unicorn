/************************************************************
 *                                                            *
 *                        VARIABLES                           *
 *                                                            *
 **************************************************************/

var copyright = "Juanma Moreno Sánchez, 2018";
//var moreInfo = "Press 'i' for more information";

var bg;
var laura;
var canvas;

var showMoreText = false;

/************************************************************
 *                                                            *
 *                            SETUP                           *
 *                                                            *
 **************************************************************/

function preload(){
	laura = loadAnimation('assets/yasmina01.png', 'assets/yasmina05.png');
	bg = loadImage("assets/background.jpg", windowWidth, windowHeight);
} 
 
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	frameRate(40);
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

	animation(laura, windowWidth/2, windowHeight-laura.getHeight()/2 );
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
		textSize(18);
	} else {
		textSize(24);
	}
	text(copyright, 10, windowHeight-40);
	/*
	if (!showMoreText) {
		//text(moreInfo, 10, 40)
	}
	else {
		//text("XXXX", 10, 60)
	}*/
}