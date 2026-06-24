const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const person1 = document.querySelector('#person1');
const person2 = document.querySelector('#person2');
const reset = document.querySelector('#reset');
const pick = document.querySelector('#pick');
const fill = document.querySelector('#fill');
const write = document.querySelector('#write');
const gameSelect = document.querySelector('#gameSelect');

let score1 = 0;
let score2 = 0;
let isGameOver = false;
let currentGame = 'custom';

const rules = {
    badminton: { baseScore: 21, winByTwo: true, cap: 30 },
    tt: { baseScore: 11, winByTwo: true, cap: Infinity },
    volleyball: { baseScore: 25, winByTwo: true, cap: Infinity },
    custom: { baseScore: 0, winByTwo: false, cap: Infinity }
};

gameSelect.addEventListener('change', function () {
    if (this.value === 'custom') {
        pick.style.display = 'inline-block';
    } else {
        pick.style.display = 'none';
        pick.value = '';
    }
});

fill.addEventListener('submit', function (e) {
    e.preventDefault();
    currentGame = gameSelect.value;

    if (currentGame === 'custom') {
        let customScore = Number(pick.value);
        if (customScore <= 0) return; // Prevent setting a 0 or negative score
        rules.custom.baseScore = customScore;
    }

    resetScores();
    write.innerText = `${currentGame.toUpperCase()} SET. PLAY!`;
});

function checkWinCondition() {
    let rule = rules[currentGame];
    if (rule.baseScore === 0) return; // Game hasn't been set yet

    let leaderScore = Math.max(score1, score2);
    let trailerScore = Math.min(score1, score2);
    let pointDiff = leaderScore - trailerScore;

    if (leaderScore >= rule.cap) {
        endGame();
    }
    else if (leaderScore >= rule.baseScore) {
        if (!rule.winByTwo || pointDiff >= 2) {
            endGame();
        }
    }
}

function endGame() {
    isGameOver = true;
    if (score1 > score2) {
        write.innerText = 'PLAYER 1 WON !!';
        span1.classList.add('green', 'size');
        span2.classList.add('red');
    } else {
        write.innerText = 'PLAYER 2 WON !!';
        span2.classList.add('green', 'size');
        span1.classList.add('red');
    }
}

person1.addEventListener('click', function (e) {
    if (!isGameOver && rules[currentGame].baseScore > 0) {
        score1++;
        span1.innerText = score1;
        checkWinCondition();
    }
});

person2.addEventListener('click', function (e) {
    if (!isGameOver && rules[currentGame].baseScore > 0) {
        score2++;
        span2.innerText = score2;
        checkWinCondition();
    }
});

function resetScores() {
    score1 = 0;
    score2 = 0;
    span1.innerText = 0;
    span2.innerText = 0;
    isGameOver = false;
    span1.classList.remove('red', 'green', 'size');
    span2.classList.remove('red', 'green', 'size');
}

reset.addEventListener('click', function (e) {
    resetScores();
    currentGame = 'custom';
    gameSelect.value = 'custom';
    pick.style.display = 'inline-block';
    pick.value = '';
    rules.custom.baseScore = 0;
    write.innerText = 'SELECT GAME OR CUSTOM SCORE:';
});