// answerboard 클릭 시 토글
const answerboard = document.querySelectorAll('div.answerboard');
answerboard.forEach((answerboardItem, i) => {
  function clickAnswerboard() {
    answerboardItem.classList.toggle('clicked');
  };
  answerboardItem.addEventListener('click', clickAnswerboard);
});

// Hint 열기
const btnH1 = document.querySelector('#btnH1');
const btnH2 = document.querySelector('#btnH2');
const hint1 = document.querySelector('#hint1');
const hint2 = document.querySelector('#hint2');
function openHint1() {
  if (hint1.classList.contains('hidden')) {
    if (confirm("자네 정말로… 힌트를 보겠나…?") == true) {
      hint1.classList.remove('hidden');
      btnH2.classList.remove('hidden');
    }
  } else {
    btnH1.disabled = true;
  }
}
btnH1.addEventListener('click', openHint1);
function openHint2() {
  if (hint2.classList.contains('hidden')) {
    if (confirm("자네가… 반나절도 고민 안 하고 힌트 달라는 건 말이 되고…?") == true) {
      hint2.classList.remove('hidden');
    }
  } else {
    btnH2.disabled = true;
  }
}
btnH2.addEventListener('click', openHint2);

// 비밀번호 form submit
const form = document.querySelector('form');
const password = document.querySelector('input[type=text]');
function onSubmit(event) {
  event.preventDefault();
  if (password.value === '재버워키') {
    location.href = 'clear.html';
  } else {
    alert('여왕은 사나운 짐승처럼 앨리스를 노려보다가 소리쳤다. "이 아이의 목을 쳐라! 목을 쳐라!"');
  }
};
form.addEventListener('submit', onSubmit);
