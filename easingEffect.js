function easingEffect() {	
	let targetX = mouseX;
	let dx = targetX - easingX;
	easingX += dx * easing;

	let targetY = mouseY;
	let dy = targetY - easingY;
	easingY += dy * easing;

	ellipse(easingX, easingY, 260, 50);
	translate(-90,10);
	fill("lightgray");
	textSize(32);
	text('Art and Tech', easingX, easingY);
}