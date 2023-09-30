const startButton = document.getElementById('startButton');
const link_share = document.getElementById('link_share');

// 테스트 시작하기 버튼 클릭 이벤트
startButton.addEventListener('click', function () {
    window.location.href = 'question.html';
});
// 테스트 공유하기 버튼 클릭 이벤트
link_share.addEventListener('click', function () {
    const currentURL = window.location.href;

  const tempInput = document.createElement("input");
  tempInput.value = currentURL;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("링크가 복사되었습니다.");
});

startButton.addEventListener("mouseenter", () => {
    startButton.src = "./Images/Start/start_button_hover.png"; // 호버시 이미지 변경
});
  
  startButton.addEventListener("mouseleave", () => {
    startButton.src = "./Images/Start/start_button.png"; // 마우스가 벗어났을 때 이미지 원래대로 변경
});
link_share.addEventListener("mouseenter", () => {
    link_share.src = "./Images/Start/share_test_button_hover.png"; // 호버시 이미지 변경
});
  
link_share.addEventListener("mouseleave", () => {
    link_share.src = "./Images/Start/share_test_button.png"; // 마우스가 벗어났을 때 이미지 원래대로 변경
});


