// 화면 사이즈 맞추기
function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();
window.addEventListener('resize', setScreenSize);


// input color value 따라 배경색 바꾸기
const body = document.querySelector('body');
const gradientBorder = document.querySelector('.gradientBorder');

const bgdColorPicker = document.querySelector('#bgdColorPicker');
bgdColorPicker.value = "#000000";

body.style.backgroundColor = bgdColorPicker.value;

function changeBgdColor(event) {
  gradientBorder.classList.remove('onload');
  body.style.backgroundColor = event.target.value;
  gradientBorder.style.backgroundColor = event.target.value;

  // input color value 따라 text 색 바꾸기
  const hintText = document.querySelectorAll('div.hint');
  const tryThis = document.querySelector('label[for=bgdColorPicker]');

  if (parseInt(bgdColorPicker.value.charAt(1)) <= 7) {
    for (let hintTextEle of hintText) {
      hintTextEle.style.color = "white";
    }
    tryThis.style.color = "white";
  } else {
    for (let hintTextEle of hintText) {
      hintTextEle.style.color = "black";
    }
    tryThis.style.color = "black";
  }
}
bgdColorPicker.addEventListener('input', changeBgdColor);


// 힌트 열기
const hintBtnList = document.querySelectorAll('button.hint');
const hint = document.querySelectorAll('div.hint');
const message = ["첫", "두", "세"];

function openHint(i) {
  if (hint[i].classList.contains('hidden')) {
    if (confirm(message[i] + " 번째 힌트를 보시겠습니까?")) {
      if (i>0 && hint[i-1].classList.contains('hidden')) {
        alert('아직 이전 힌트를 열지 않았습니다.');
      } else {
        hint[i].classList.remove('hidden');
      }
    }
  }
}
hintBtnList.forEach((hintBtn, i) => {
  hintBtn.addEventListener('click', event => openHint(i));
});


// 정답 입력
const colorPicker = document.querySelector('#colorPicker');
function openNextpg(event) {
  if (event.target.value.toUpperCase() === "#B596DC") {
    location.href = "clear.html";
  }
}
colorPicker.addEventListener('change', openNextpg);
