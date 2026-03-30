const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const person1 = document.querySelector('#person1');
const person2 = document.querySelector('#person2');
const reset = document.querySelector('#reset');
const pick = document.querySelector('#pick');
const fill = document.querySelector('#fill');
const write = document.querySelector('#write');

let winnerscore = 0;
let total = 0;
let sum = 0;
let isGameOver = false;

fill.addEventListener('submit', function (e) {
    e.preventDefault();
    winnerscore = Number(pick.value);
})

person1.addEventListener('click', function (e) {

    if (isGameOver === false) {
        total++;
        span1.innerText = total;
        if (total === winnerscore) {
            isGameOver = true;
            write.innerText = 'PLAYER 1 WON !!';
            span1.classList.add('green');
            span1.classList.add('size');
            span2.classList.add('red');

        }
    }
});

person2.addEventListener('click', function (e) {

    if (isGameOver === false) {
        sum++;
        span2.innerText = sum;
        if (sum === winnerscore) {
            isGameOver = true;
            write.innerText = 'PLAYER 2 WON !!';
            span2.classList.add('green');
            span2.classList.add('size');
            span1.classList.add('red');
        }

    }
});


reset.addEventListener('click', function (e) {
    span1.innerText = 0;
    span2.innerText = 0;
    total = 0;
    sum = 0;
    pick.value = '';
    winnerscore = 0;
    isGameOver = false;
    write.innerText = 'PICK THE HIGH SCORE:';
    span1.classList.remove('red', 'green');
    span2.classList.remove('red', 'green');
})

