// Scroll Animation
let saTriggerMargin = 300;
const saElementArr = document.querySelectorAll('.scrollAnimation');

function saFunc () {
    for (const saElement of saElementArr) {
        if (!saElement.classList.contains('visible')) {
            if (saElement.dataset.saMargin) {
                saTriggerMargin = window.innerHeight / +saElement.dataset.saMargin;
            }
            if (saTriggerMargin > saElement.getBoundingClientRect().top) {
                saElement.classList.add('visible');
            }
        }
    }
}
window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


// 레시피 클릭하면 열기
const recipeClosed = document.querySelector('.recipeImg');
const recipeOpened = document.querySelector('.recipeContainer');
const recipeContent = document.querySelector('.recipeWrapper');
const alphabet = document.querySelectorAll('.alphabet');

function openRecipe () {
    if (recipeOpened.classList.contains('hidden')) {
        recipeClosed.style.display = "none";
        recipeOpened.classList.remove('hidden');
        // 레시피 펼쳐지는 애니메이션
        recipeOpened.style.animation = "openRecipe 0.5s linear";
        recipeContent.style.animation = "openRecipe 0.5s linear";
        for (let i = 0; i < alphabet.length; i++) {
            alphabet[i].style.animation = `show 0.05s step-end both ${0.5/12 * i}s`;
        }
    }
}
recipeClosed.addEventListener('click', function () {
    setTimeout(openRecipe, 100); // 0.1초 후 실행
});


// 비밀번호 입력값 대문자로 바꾸기
const password = document.querySelector('input[type="text"].password');
password.addEventListener('input', function () {
    password.value = password.value.toUpperCase();
});

// 비밀번호 form submit
const form = document.querySelector('form');
const textAndHint = document.querySelectorAll('.text, .hint');
const drumImg = document.querySelector('img.bookImg');
const drumstick = document.querySelectorAll('.drumstick');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (password.value == 'URDRUMMEDOUT') {
        // 다 숨기고 drum img만 보이기
        form.classList.add('hidden');
        textAndHint.forEach(element => {
            element.style.display = 'none';
        });
        recipeOpened.style.display = "none";
        recipeClosed.style.display = "none";
        drumImg.style.display = 'block';
        
        // 드럼스틱 치는 애니메이션
        for (let i = 0; i < drumstick.length; i++) {
            const element = drumstick[i];
            element.innerHTML = 'U R DRUMMED OUT';
            element.style.padding = '0 15px';
            element.style.color = 'var(--ivory)';
            element.style.backgroundColor = 'var(--strongYellow)';
            element.style.transition = 'all 2s cubic-bezier(0.7, 0, 0.8, 0.2)'; // 드럼스틱 위치로
            element.style.animation = `beatDrum${i+1} 0.1s 30 ease-in alternate forwards 2s`; // 드럼스틱 치기
        }
        drumstick[0].style.transform = 'rotate(10deg) translate(-20%, 300%)';
        drumstick[1].style.transform = 'rotate(-72deg) translate(35%, 250%)';

        // 5초 후 다음 페이지로 이동
        setTimeout(() => {
            location.href = 'clear.html';
        }, 5000);
    } else {
        alert('"이건 불공평하잖아!"');
    }
})


// 힌트 열기
const hintBtn = document.querySelectorAll('button.hint');
const hintText = document.querySelectorAll('div.hint');

function openHint1 () {
    if (hintText[0].classList.contains('hidden')) {
        if (confirm('힌트를 보시겠습니까?') == true) {
            hintText[0].classList.remove('hidden');
            hintBtn[1].classList.remove('hidden');
        }
    } else {
        hintBtn[0].disabled = true;
    }
}
hintBtn[0].addEventListener('click', openHint1);

function openHint2 () {
    if (hintText[1].classList.contains('hidden')) {
        if (confirm('정말 모르시는 거죠? 생각하기 귀찮은 건 아니시겠죠? 🤔') == true) {
            hintText[1].classList.remove('hidden');
        }
    } else {
        hintBtn[1].disabled = true;
    }
}
hintBtn[1].addEventListener('click', openHint2);