var Drop = function() {
	this.x = random(width);
	this.y = random(height/2, 0);
	this.yspeed = random(4, 20);
}

Drop.prototype.fall = function(){
	this.y = this.y + this.yspeed;
	
	if (this.y > height){
		this.y = random(-200, -100);
	}
};

Drop.prototype.show = function(){
	stroke(120, 50, 150);
	line(this.x, this.y, this.x, this.y+10);
};