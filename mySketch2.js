function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0)
	rectMode(CENTER)
	for (var x=0;x<width;x=x+100){
		for (var y=0;y<height;y=y+100){
			noFill()
			stroke("#FFB326")
			rect(x,y,100+map(mouseX,0,width,0,80))
			stroke("#12FFFF")
			ellipse(x,y,100+map(mouseX,0,width,0,80))
			stroke("#CE8CFF")
			ellipse(x+50,y+50,50+map(mouseX,0,width,0,80))
		}
	}
}