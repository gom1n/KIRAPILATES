
const resultDiv = document.getElementById('level');
const imageContainer = document.getElementById('image-container');

const resultTitleLabel = document.getElementById('level-title');
const resultDescriptionLabel = document.getElementById('level-desc');
const resultHowToLabel = document.getElementById('level-howto');

const facebookShareButton = document.getElementById('facebookShareButton');
const twitterShareButton = document.getElementById('twitterShareButton');
const kakaoShareButton = document.getElementById('kakaoShareButton');
const instaShareButton = document.getElementById('instaShareButton');

const download_result = document.getElementById('download-result');
const copyLink = document.getElementById('result-copy-link');

const useKP = document.getElementById('move-to-kp');
const restartButton = document.getElementById('restart');
const onceButton = document.getElementById('once');



// 현재 페이지의 URL에서 매개변수 값 읽기
const urlParams = new URLSearchParams(window.location.search);
const point = urlParams.get('option');

const result_level1 = {
    charac_img_path: './Images/Result/Level1/lv1_result.png',
    title_img_path: './Images/Result/Level1/lv1_title.png',
    type_img_path: './Images/Result/Level1/lv1_type.png',
    howto_img_path: './Images/Result/Level1/lv1_howto.png',
    download_img_path: './Images/Result/Level1/lv1_download.png',
    kakao_share_img_path: './Images/Result/Level1/lv1_share_kakao.png'
};
const result_level2 = {
    charac_img_path: './Images/Result/Level2/lv2_result.png',
    title_img_path: './Images/Result/Level2/lv2_title.png',
    type_img_path: './Images/Result/Level2/lv2_type.png',
    howto_img_path: './Images/Result/Level2/lv2_howto.png',
    download_img_path: './Images/Result/Level2/lv2_download.png',
    kakao_share_img_path: './Images/Result/Level2/lv2_share_kakao.png'
};
const result_level3 = {
    charac_img_path: './Images/Result/Level3/lv3_result.png',
    title_img_path: './Images/Result/Level3/lv3_title.png',
    type_img_path: './Images/Result/Level3/lv3_type.png',
    howto_img_path: './Images/Result/Level3/lv3_howto.png',
    download_img_path: './Images/Result/Level3/lv3_download.png',
    kakao_share_img_path: './Images/Result/Level3/lv3_share_kakao.png'
};
const result_level4 = {
    charac_img_path: './Images/Result/Level4/lv4_result.png',
    title_img_path: './Images/Result/Level4/lv4_title.png',
    type_img_path: './Images/Result/Level4/lv4_type.png',
    howto_img_path: './Images/Result/Level4/lv4_howto.png',
    download_img_path: './Images/Result/Level4/lv4_download.png',
    kakao_share_img_path: './Images/Result/Level4/lv4_share_kakao.png'
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
// 1회 무료체험하러가기 버튼
onceButton.addEventListener('click', function () {
    window.location.href = 'https://m.place.naver.com/place/1145418497/home?type=photoView'
});
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
    if(point == 5) {
        imageUrl = result_level1.download_img_path
        filename = "풋워크"
    } else if(point == 7) {
        imageUrl = result_level2.download_img_path
        filename = "런지"
    } else if(point == 6) {
        imageUrl = result_level3.download_img_path
        filename = "로우"
    } else if(point == 8) {
        imageUrl = result_level4.download_img_path
        filename = "티저"
    }
    const link = document.createElement("a");
    link.href = imageUrl;
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
        character_img = result_level1.charac_img_path
        title_img = result_level1.title_img_path
        type_img = result_level1.type_img_path
        howto_img = result_level1.howto_img_path
    } else if(point == 7) {
        character_img = result_level2.charac_img_path
        title_img = result_level2.title_img_path
        type_img = result_level2.type_img_path
        howto_img = result_level2.howto_img_path
    } else if(point == 6) {
        character_img = result_level3.charac_img_path
        title_img = result_level3.title_img_path
        type_img = result_level3.type_img_path
        howto_img = result_level3.howto_img_path
    } else if(point == 8) {
        character_img = result_level4.charac_img_path
        title_img = result_level4.title_img_path
        type_img = result_level4.type_img_path
        howto_img = result_level4.howto_img_path
    } 

    imageContainer.src = `${character_img}`
    imageContainer.style.width = '85%'
    imageContainer.style.maxWidth = '480px'

    resultTitleLabel.src = `${title_img}`
    resultDescriptionLabel.src = `${type_img}`
    resultHowToLabel.src = `${howto_img}`
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
Kakao.init('ea73ab816ec2bea23b0b8eeeee3e8cd8');
function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${resultContent(point)}`,
        description: 'KIRA PILATES 필라테스 테스트 결과입니다.',
        imageUrl: `${kakaoShareImageUrl(point)}`,
        link: {
          mobileWebUrl: 'https://gom1n.github.io/KIRAPILATES/',
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
// 카카오 공유 시 문구 설정
function resultContent(point) {
    if(point == 5) {
        result = "풋워크 동작을 추천할게요!"
    } else if(point == 7) {
        result = "런지 동작을 추천할게요!"
    } else if(point == 6) {
        result = "로우 동작을 추천할게요!"
    } else if(point == 8) {
        result = "티저 동작을 추천할게요!"
    }

    return result
}
// 카카오 공유 시 이미지 설정
function kakaoShareImageUrl(point) {
    if(point == 5) {
        result = result_level1.kakao_share_img_path
    } else if(point == 7) {
        result = result_level2.kakao_share_img_path
    } else if(point == 6) {
        result = result_level3.kakao_share_img_path
    } else if(point == 8) {
        result = result_leve41.kakao_share_img_path
    }

    return result
}

showResult(point);