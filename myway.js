// 주문이 뭐더라? 열기
const ulRemindOrder = document.querySelector('ul.remindOrder');
const btnRemindOrder = document.querySelector('button.remindOrder');
function openUlRemindOrder() {
  ulRemindOrder.classList.toggle('remindOrderOpen');
  btnRemindOrder.classList.toggle('remindOrderOpen');
};
btnRemindOrder.addEventListener('click', openUlRemindOrder);

// 버튼 누를 때 효과
const btnlist = document.querySelectorAll('button');
btnlist.forEach((btn, i) => {
  function addBtnPressed() {
    btn.classList.add('btnPressed')
  };
  function removeBtnPressed() {
    btn.classList.remove('btnPressed')
  };
  btn.addEventListener('touchstart',addBtnPressed);
  btn.addEventListener('touchend',removeBtnPressed);
  btn.addEventListener('mousedown',addBtnPressed);
  btn.addEventListener('mouseup',removeBtnPressed);
});

// 소스 checkbox 선택 제한
const sauceChkbox = document.getElementsByName('chooseSauce');
function limitChecked() {
  let countChecked = 0;
  for (var i = 0; i < sauceChkbox.length; i++) {
    if (sauceChkbox[i].checked) {
      countChecked++;
    }
  };
  if (countChecked > 3) {
    alert("???: 소스는 3가지까지 가능합니다 고객님…");
    this.checked = false;
    return false;
  }
};
for (var i = 0; i < sauceChkbox.length; i++) {
  sauceChkbox[i].addEventListener('click', limitChecked);
};

// form 제출
const form = document.querySelector('form');
const input = document.querySelectorAll('.chooseIngredients');
function getSum(event) {
  let sum = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      sum += parseInt(input[i].value, 10);
    }
  };
  const nextpg = "clear.html";
  event.preventDefault();
  if (sum === 1000) {
    alert("너 겸잘알이구나?🥰 완벽한 샌드위치야. 고마워!");
    window.location.href = nextpg;
  } else if (sum >= 950) {
    alert("맛있네!😋 거의 완벽했어. 통과!");
    window.location.href = nextpg;
  } else {
    alert("주문서를 제대로 안 읽은 것 같은데…?🤔");
  }
};
form.addEventListener('submit', getSum);
