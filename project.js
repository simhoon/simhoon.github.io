let figureSize = 100;
let figureEffect = 200;
let figureColorR = 203;
let figureColorG = 72;
let figureColorB = 183;
let figureColorA = 150;

let figureShape;
let sizeSlider, shapeSlider, effectSlider;
let colorSliderR, colorSliderG, colorSliderB, colorSliderA;
let screenType = 0;

let easingX = 1;
let easingY = 1;
let easing = 0.05;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);

	// Scene 버튼 생성
	createButton("Scene 1")
		.position(20, 20)
		.mousePressed(btn1);
	
	createButton("Scene 2")
		.position(100, 20)
		.mousePressed(btn2);
	
	createButton("Scene 3")
		.position(180, 20)
		.mousePressed(btn3);

	createButton("Scene 4")
		.position(20, 60)
		.mousePressed(btn4);
	
	createButton("Scene 5")
		.position(100, 60)
		.mousePressed(btn5);
	
	createButton("Scene 6")
		.position(180, 60)
		.mousePressed(btn6);
	
	// 효과 슬라이더 생성
	// 세로 슬라이더
	sizeSlider = createSlider(50, 200, figureSize);
	sizeSlider.position(-10, 150);
	sizeSlider.style('transform', 'rotate(-45deg)');

	effectSlider = createSlider(0, 255, figureEffect);
	effectSlider.position(10, 150);
  effectSlider.style('transform', 'rotate(-45deg)');
	
	shapeSlider = createSlider(0, 2, 0, 1);
	shapeSlider.position(30, 150);
	shapeSlider.style('transform', 'rotate(-45deg)');

	// 가로 슬라이더
	colorSliderR = createSlider(0, 255, figureColorR);
	colorSliderR.position(20, 240);

	colorSliderG = createSlider(0, 255, figureColorG);
	colorSliderG.position(20, 260);

	colorSliderB = createSlider(0, 255, figureColorB);
	colorSliderB.position(20, 280);
	
	colorSliderA = createSlider(0, 255, figureColorA);
	colorSliderA.position(20, 300);

}

function draw() {
	background(250);
	// drawGrid(20); // 모눈종이표
	// showCoordinateNum(); // 마우스 현재 위치 좌표값

	// Scene 버튼 - 장면 전환
	push();
	// Scene 1 버튼을 누르면 실행
	if (screenType === 0) {
		background(255, 255, 200, figureColorA);
	
	// scene1 함수 불러옴_가운데 텍스트 함수
		scene1 ();
	}

	// Scene 2 버튼을 누르면 실행
	else if (screenType === 1) {
		background(240, 200, 200, figureColorA);
		
		scene2 ();
	}

	// Scene 3 버튼을 누르면 실행
	else if (screenType === 2) {
		background(60, 140, 160, figureColorA);
		
		scene1 ();
	}

	// Scene 4 버튼을 누르면 실행
	else if (screenType === 3) {
		background(255, 204, 0, figureColorA);
		
		scene2 ();
	}
	
	// Scene 5 버튼을 누르면 실행
	else if (screenType === 4) {
		background(60, 140, 160, figureColorA);
		
		scene1 ();
	}
	
	// Scene 6 버튼을 누르면 실행
	else if (screenType === 5) {
		background(255, 204, 0, figureColorA);
		
		scene2 ();
		// window.open("https://p5js.org/ko/");	// 버튼으로 새로운 창열기 코드
	}
	
	pop();

	// 슬라이더 - 배경 효과 (나중에 bgEffect 적용)
	// 슬라이더 값 가져오기
	figureSize = sizeSlider.value();
	figureEffect = effectSlider.value();
	figureShape = shapeSlider.value();
	
	figureColorR = colorSliderR.value();
	figureColorG = colorSliderG.value();
	figureColorB = colorSliderB.value();
	figureColorA = colorSliderA.value();

	// 슬라이더 이름_슬라이더 값
	fill(0);
	text("sizeSlider: " + figureSize, 160, 112);
	text("effectSlider: " + figureEffect, 160, 132);
	text("shapeSlider: " + figureShape, 160, 152);
	
	text("colorSliderR: " + figureColorR, 160, 252);
	text("colorSliderG: " + figureColorG, 160, 272);
	text("colorSliderB: " + figureColorB, 160, 292);
	text("colorSliderA: " + figureColorA, 160, 312);

	// shapeSlider 슬라이더 도형 선택
	push();
	if (figureShape === 0) {
		// 상단 도형
		noStroke();
		fill(figureColorR, figureColorG * 2, figureColorB / 2, figureEffect / 2);
		arc(width / 3.5, height / 5, figureSize, figureSize, 0, mouseY / 2);
		
		fill(figureColorR / 1.5, figureColorG * 3, figureColorB / 3, figureEffect / 3);
	  arc(width / 2.4, height / 5, figureSize, figureSize, 0, mouseX);
		
		fill(figureColorR / 2, figureColorG * 4, figureColorB / 4, figureEffect / 4);
		arc(width / 1.8 , height / 5, figureSize, figureSize, 0, mouseY);
		
		// 마우스 따라 다니는 텍스트
			push()
			easingEffect ();
			pop()
	} 
	
	else if (figureShape === 1) {
		noStroke();
		fill(figureColorR, figureColorG / 3, figureColorB / 3, figureEffect / 3);
		triangle(width / 2.5, height / 5 - figureSize,
						 width / 2.5 - mouseY, height / 5 + mouseY,
						 width / 2.5 + mouseX, height / 5 + mouseX);
		
		// 마우스 따라 다니는 텍스트
		push()
		easingEffect ();
		pop()
	} 
	
	else if (figureShape === 2) {
		noStroke();
		fill(figureColorR, figureColorG, figureColorB, figureEffect / 2);
		rect(width / 2.5 - figureSize / 2.5, height / 5 - figureSize / 5, figureSize / mouseX * 100, figureSize / mouseY * 100);
		
		// 마우스 따라 다니는 텍스트
		push()
		easingEffect ();
		pop()
	}
	pop();

}

// Scene-button 함수 정리 (나중에 js 파일에 따로 넣기)
function btn1() {
	screenType = 0;
}

function btn2() {
	screenType = 1;
}

function btn3() {
	screenType = 2;
}

function btn4() {
	screenType = 3;
}

function btn5() {
	screenType = 4;
}

function btn6() {
	screenType = 5;
}