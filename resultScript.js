
const resultDiv = document.getElementById('level');
const imageContainer = document.getElementById('image-container');

// const resultTypeLabel = document.getElementById('result-my-type-label');
// const resultPsnLabel = document.getElementById('result-my-psn-label');
// const saveTipLabel = document.getElementById('result-save-tip-label');

const facebookShareButton = document.getElementById('facebookShareButton');
const twitterShareButton = document.getElementById('twitterShareButton');
const kakaoShareButton = document.getElementById('kakaoShareButton');
const instaShareButton = document.getElementById('instaShareButton');

const useKP = document.getElementById('move-to-kp');
// const findMonaPlan = document.getElementById('move-to-find-plan');
// const planImg = document.getElementById('recommend-plan-img');
const restartButton = document.getElementById('restart');
const copyLink = document.getElementById('result-copy-link');

const download_result = document.getElementById('download-result');

// 현재 페이지의 URL에서 매개변수 값 읽기
const urlParams = new URLSearchParams(window.location.search);
const point = urlParams.get('option');

const result_level0 = {
    charac_img_path: './Images/Question/q2.png'
};
const result_level1 = {
    charac_img_path: './Images/Question/q2.png'
};
const result_level2 = {
    charac_img_path: './Images/Question/q2.png'
};
const result_level3 = {
    charac_img_path: './Images/Question/q2.png'
};
const result_level4 = {
    charac_img_path: './Images/Question/q2.png'
};

// 공유하기 버튼
facebookShareButton.addEventListener('click', function () {
    shareOnFacebook();
});
twitterShareButton.addEventListener('click', function () {
    shareOnTwitter();
});
kakaoShareButton.addEventListener('click', function () {
    kakaoShare();
});
instaShareButton.addEventListener('click', function () {
    if (isInstagramAppInstalled()) {
        openInstagramApp();
    } else {
        redirectToInstagramWebsite();
    }
});
function isInstagramAppInstalled() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes("instagram");
}
function openInstagramApp() {
    // Instagram 앱으로 이동하는 스킴을 호출
    window.location.href = "instagram://";
}
function redirectToInstagramWebsite() {
    // 웹 브라우저에서 Instagram 사이트로 이동
    window.location.href = "https://www.instagram.com";
}

// 테스트 다시하기 버튼
restartButton.addEventListener('click', function () {
    window.location.href = 'index.html'
});
// 키라필라테스 구경하러가기 버튼
useKP.addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com/kira_pilates/'
});
// // 모나 요금제 찾아보기
// findMonaPlan.addEventListener('click', function () {
//     window.location.href = 'https://mobilemona.co.kr/view/plan/findListNext.aspx'
// });
// 결과 링크 복사
copyLink.addEventListener("click", () => {
    const currentLink = window.location.href; // 현재 페이지의 링크 가져오기

    // 가상의 텍스트 입력 상자 생성하여 복사
    const tempInput = document.createElement("input");
    tempInput.value = currentLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("링크가 복사되었습니다.");
  });

// 결과 다운로드 버튼 클릭 이벤트
download_result.addEventListener('click', function () {
    // 새로운 링크 요소 생성
    const imageUrl = './Images/level0_download.png'
    const link = document.createElement("a");
    link.href = imageUrl;

    // 다운로드할 파일 이름 설정 (선택적)
    const filename = imageUrl.split("/").pop(); // URL에서 파일 이름 추출
    link.download = filename;

    // 링크를 클릭하여 다운로드 시작
    document.body.appendChild(link);
    link.click();

    // 링크 요소 삭제
    document.body.removeChild(link);
});

// 결과 페이지
function showResult(point) {
    if(point == 5) {
        console.log("동작1");
        character_img = result_level0.charac_img_path
    } else if(point == 7) {
        console.log("동작2");
        character_img = result_level1.charac_img_path
    } else if(point == 6) {
        console.log("동작3");
        character_img = result_level2.charac_img_path
    } else if(point == 8) {
        console.log("동작4");
        character_img = result_level3.charac_img_path
    } 

    imageContainer.src = `${character_img}`
    imageContainer.style.width = '50%'
    imageContainer.style.maxWidth = '480px'

    // resultDiv.src = `${level_title_img}`
    // resultDiv.style.width = '100%'
    // resultDiv.style.maxWidth = '480px'
}


function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}
function shareOnTwitter() {
    const text = encodeURIComponent('Check out this awesome website!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// 카카오톡 공유하기 기능
Kakao.init('ff7a17f75d28483cf203553d036aa097');
function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${resultContent(point)}`,
        description: '절약 유형 테스트 결과입니다.',
        imageUrl: './Images/result_title.png',
        link: {
          mobileWebUrl: 'https://konai-kvl.github.io/TestWebPage/',
          webUrl: 'https://gom1n.github.io/KIRAPILATES/',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    })
}
function resultContent(point) {
    if(point == 5) {
        result = "동작1"
    } else if(point == 7) {
        result = "동작2"
    } else if(point == 6) {
        result = "동작3"
    } else if(point == 8) {
        result = "동작4"
    }

    return result
}

showResult(point);