function rotateText() {
	textSize(32); // 텍스트 크기 설정
  textAlign(CENTER, CENTER); // 텍스트 정렬 설정
  
  // 마우스 포인터와 캔버스의 중앙 사이의 각도 계산
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let targetAngle = atan2(dy, dx);
  
  // 부드러운 회전을 위해 현재 각도를 조금씩 조정
  let delta = targetAngle - angle;
  if (abs(delta) > 180) {
    if (delta > 0) {
      delta -= 360;
    } else {
      delta += 360;
    }
  }
  angle += delta * 0.05;

  // 마우스 포인터 중심을 따라 원을 그리며 텍스트 출력
  translate(mouseX, mouseY); // 마우스 포인터 중심으로 이동
  rotate(angle);

  for (let i = 0; i < numTexts; i++) {
    let x = radius * cos(i * 360 / numTexts + angle); // 원 위의 x 좌표
    let y = radius * sin(i * 360 / numTexts + angle); // 원 위의 y 좌표
    fill("gray"); // 텍스트 색상 설정
    text(texts[i], x, y); // 텍스트 출력
  }
}