/************************************************************
 *                                                            *
 *                        VARIABLES                           *
 *                                                            *
 **************************************************************/

var copyright = "Juanma Moreno Sánchez, 2018";
var moreInfo = "Press 'i' for more information";

var bg;
var yasmina, hands;
var canvas;

var showMoreText = false;

var bitcoinPrice;
var bitcoinpriceUrl = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=MGC0QST0RZCWJ2QC";

var drops = [];

/************************************************************
 *                                                            *
 *                            SETUP                           *
 *                                                            *
 **************************************************************/

function preload(){
	if (windowWidth > windowHeight) {
		bg = loadImage("assets/background.jpg", windowWidth, windowHeight);
	} else {
		bg = loadImage("assets/backgroundmovil.jpg", windowWidth, windowHeight);
	}
} 
 
function setup() {
	loadData();
	
	canvas = createCanvas(windowWidth, windowHeight);
	noCursor();
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
	
	if(hands.overlap(yasmina)) {
		hands.changeAnimation('invert');
		
		
		var pointillize = map(mouseX, 0, width, 8, 190);
		var x = floor(random(bg.width));
		var y = floor(random(bg.height/2));
		var pix = bg.get(x, y);
		fill(pix, 128);
		ellipse(x, y, pointillize, pointillize);
		
		
	}
	else {
		hands.changeAnimation('normal');
	}
	
	hands.position.x = mouseX;
	hands.position.y = mouseY;
	
	for (var i = 0; i < drops.length; i++){
		drops[i].fall();
		drops[i].show();
	}
	
	drawSprites();
}


/************************************************************
 *                                                            *
 *                            EVENTS                          *
 *                                                            *
 **************************************************************/

 
function keyPressed() {
	if (key == 'I' || keyCode == 73){
		showMoreText = ! showMoreText
	}
	getTexts();
}
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

 function loadData() {
	loadJSON(bitcoinpriceUrl, getBitcoin);
    frameCount = -1;
}

function getBitcoin(price){
	bitcoinPrice = price["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
	
	//no es elegante ponerlo aquí
	for (var i = 0; i < bitcoinPrice; i++){
		drops[i] = new Drop();
	}
}
 
function getTexts() {
	fill(200);
	if (windowWidth > windowHeight) {
		textSize(16);
	} else {
		textSize(28);
	}
	
	text(copyright, 10, 100);
	
	if (!showMoreText) {
		text(moreInfo, 10, 120)
	}
	else {
		if (bitcoinPrice){
			text(round(bitcoinPrice) + " rain drops. One for each dollar is in a Bitcoin today.", 10, 120);
		}
	}
}