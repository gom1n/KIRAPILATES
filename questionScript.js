const questionDiv = document.getElementById('question');
const questionImage = document.getElementById('question-image');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// 상태바 Property
const progressBar = document.getElementById('progress-bar');
const question_count = document.getElementById('question-count');
const progress_icon = document.getElementById('icon');
let progress = 0;
let point = 0;

// 질문 Array
const questions = [
    '필라테스를 한다면,\n당신의 목적은?',
    '평소 몸이',
    '무릎과 고관절에서\n반복해서 딱딱 소리가 난다.',
    '어깨 통증이',
    '이 동작 할 수 있다? 없다?',
    '필라테스 무료 1회 체험이 있다면?'
];

// 이미지 Array
const images = [
    './Images/Question/q1.png', 
    './Images/Question/q2.png', 
    './Images/Question/q3.png', 
    './Images/Question/q4.png', 
    './Images/Question/q1.png', 
    './Images/Question/q1.png'
];

const button1Text = [
    '다이어트',
    '아프다',
    '난다',
    '있다. 아파요ㅠㅠ',
    '할 수 있어!',
    '재밌겠다! 하고싶어요!'
]
const button2Text = [
    '자세교정',
    '안 아프다',
    '안난다. 말짱~',
    '통증이 없다.',
    '어려워요ㅜㅜ',
    '별로 안 하고 싶어요...',
]

// 현재 질문 Index
let currentQuestionIndex = 0;

// 버튼 2개 클릭 이벤트
button1.addEventListener('click', function () {
    // 버튼 선택함에 따라 상태바 업데이트
    updateProgressBar();
    // 질문이 끝나기 전까진 showPage, 질문이 끝난다면 showResult
    if (currentQuestionIndex < questions.length - 1) {
        if(currentQuestionIndex == 2) {
            point += 1;
        } else if(currentQuestionIndex == 3) {
            point += 4;
        }
        console.log(`${point}`)
        currentQuestionIndex++;
        showPage();
    } else {
        showResult();
    }
});

button2.addEventListener('click', function () {
    updateProgressBar();
    if (currentQuestionIndex < questions.length - 1) {
        if(currentQuestionIndex == 2) {
            point += 2;
        } else if(currentQuestionIndex == 3) {
            point += 6;
        }
        currentQuestionIndex++;
        console.log(`${point}`)
        showPage();
    } else {
        showResult();
    }
});

// 선택지 버튼 문구 변경
function updateButtonText() {
    button1.textContent = button1Text[currentQuestionIndex]
    button2.textContent = button2Text[currentQuestionIndex]
}

// 질문이 있을 때 showPage
function showPage() {
    showImage();
    showQuestion();
    updateButtonText();
}

// 이미지 보여주기
function showImage() {
    const imageUrl = images[currentQuestionIndex];
    questionImage.src = `${imageUrl}`
    questionImage.style.width = `60%`;
    questionImage.style.height = `auto`;
}

// 질문 출력하기
function showQuestion() {
    questionDiv.textContent = questions[currentQuestionIndex];
}

// 로딩 후 결과 페이지로 이동
function showResult() {
    const loadingContainer = document.getElementById("loadingContainer");

    // Show loading container
    loadingContainer.style.display = "flex";

    // Wait for a brief moment (e.g., 2 seconds)
    setTimeout(function() {
        // Hide loading container
        loadingContainer.style.display = "none";

        // Redirect to another HTML file
        window.location.href = `resultPage.html?option=${point}`;
        // 다음 페이지로 넘어갈 때 URL에 매개변수 추가
    }, 2000); // 2000 milliseconds = 2 seconds

}

// 상태바 업데이트
function updateProgressBar() {
    progress += 1; 
    if (progress >= 6) {
        progress = 6;
        question_count.textContent = `6/6`;
    } else {
        question_count.textContent = `${progress + 1}/6`;
    }
    progressBar.style.width = `${progress * 16.6}%`;
    progress_icon.style.marginLeft = `${progress * 16.6}%`;

    // 페이지 로딩이 끝나면 상태바 숨기기
    if (progress === 6) {
        setTimeout(function () {
            // progressBar.style.display = 'none';
        }, 500); // 0.5초 뒤에 상태바 숨김
    }
}


// 초기 페이지 로드 시 첫 번째 페이지 표시
showPage();

