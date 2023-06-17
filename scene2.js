function scene2() {
	let radius = 120;
	translate (width / 2 , height / 2);
	
	push()
	noStroke();
	fill(figureColorR, figureColorG, figureColorB, figureColorA);
	translate(-radius/2, -radius/2)
	rotate(-45+mouseX/2)
	ellipse(0, 0, radius/2, radius*1.25)
	pop()
	
	push()
	noStroke();
	fill(figureColorR, figureColorG /2, figureColorB /2, figureColorA /2);
	translate(-radius/2, radius/2)
	rotate(45+mouseX/2)
	ellipse(0, 0, radius/2, radius*1.25)
	pop()
	
	push()
	noStroke();
	fill(figureColorR, figureColorG /2.5, figureColorB /2.5, figureColorA /2.5);
	translate(radius/2, -radius/2)
	rotate(45+mouseX/2)
	ellipse(0, 0, radius/2, radius*1.25)
	pop()

	push()
	noStroke();
	fill(figureColorR, figureColorG /3, figureColorB /3, figureColorA /3);
	translate(radius/2, radius/2)
	rotate(-45+mouseX/2)
	ellipse(0, 0, radius/2, radius*1.25)
	pop()
}