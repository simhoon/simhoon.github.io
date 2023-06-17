function scene1() {
	// 알파벳 T
	push();
	translate(50, 200);
	stroke("gray");
	strokeWeight(20);
	line(50, 150, 150, 150);
	rect(100, 150, 2, 100, 10);
	pop();

	// 알파벳 H
	push();
	translate(200, 200);
	noStroke();
	fill("yellowgreen");
	rect(60, 190, 80, 20, 20);
	stroke("pink");
	strokeWeight(20);
	line(50, 150, 50, 250);
	line(150, 150, 150, 250);
	pop();

	// 알파벳 A
	push();
	translate(350, 200);
	noStroke();
	fill("yellowgreen");
	rect(70, 220, 60, 20, 20);
	stroke("gray");
	strokeWeight(20);
	line(100, 150, 50, 250);
	line(100, 150, 150, 250);
	pop();

	// 알파벳 N
	push();
	translate(500, 200);
	stroke("pink");
	strokeWeight(20);
	line(50, 150, 50, 250);
	line(50, 150, 150, 250);
	line(150, 150, 150, 250);
	pop();

	// 알파벳 K
	push();
	translate(650, 200);
	stroke("gray");
	strokeWeight(20);
	line(50, 150, 50, 250);
	line(50, 200, 125, 175);
	line(50, 200, 125, 250);
	pop();

	// 알파벳 S
	push();
	translate(800, 200);
	noFill();
	stroke("yellowgreen");
	strokeWeight(20);
	arc(50, 190, 40, 40, 90, 330);
	arc(50, 230, 40, 40, 270, 160);
	pop();
}