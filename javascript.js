let cpuChoices = ["Rock", "Paper", "Scissors"]
let cpuSelect 
let playerSelect
let result
let playerScore = 0
let cpuScore = 0

const btnMenu = document.querySelector('#btnMenu')
const btnReset = document.querySelector('#Reset')
const playerScoreCard = document.querySelector('#playerScore')
const cpuScoreCard = document.querySelector('#cpuScore')
const rounds = document.querySelector('#rounds')

function getCpuSelection() {
    let cpuRoll = Math.floor(Math.random() * 3);
    cpuSelect = cpuChoices[cpuRoll];
    return cpuSelect;
}

function playRound(playerSelect, cpuSelect) {
    if (playerSelect === cpuSelect) {
        result = `You pick ${playerSelect}. You Tie! ${playerSelect} ties ${cpuSelect}.`; 
    } else if ((playerSelect === "Rock" && cpuSelect === "Paper") ||
        (playerSelect === "Paper" && cpuSelect === "Scissors") ||
        (playerSelect === "Scissors" && cpuSelect === "Rock")) {
        result = `You pick ${playerSelect}. You Lose! ${cpuSelect} beats ${playerSelect}.`;  
        cpuScore++; 
    } else {
        result = `You pick ${playerSelect}. You Win! ${playerSelect} beats ${cpuSelect}.`;
        playerScore++;
    }
}

function checkWinner() {
    if (playerScore === 5) {
        rounds.innerText += 'YOU ARE THE WINNER!';
        playerScoreCard.style.backgroundColor = "green";
        cpuScoreCard.style.backgroundColor = "red";
        btnMenu.childNodes.forEach((btn) => {
            btn.disabled = true;
        })
    }
    if (cpuScore === 5) {
        rounds.innerText += 'YOU ARE THE LOSER!';
        cpuScoreCard.style.backgroundColor = "green";
        playerScoreCard.style.backgroundColor = "red";
        btnMenu.childNodes.forEach((btn) => {
            btn.disabled = true;
        })
    }
}

btnMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        playerSelect = e.target.id.toString();
        getCpuSelection();
        playRound(playerSelect, cpuSelect);
        rounds.innerText += result + '\n'; 
        playerScoreCard.textContent = `Player Score: ${playerScore}`;
        cpuScoreCard.textContent = `CPU Score: ${cpuScore}`;
        checkWinner();
        btnReset.disabled = false;
    }    
})

btnReset.addEventListener('click', (e) => {
    btnMenu.childNodes.forEach((btn) => {
        btn.disabled = false;
    })
    playerScore = 0;
    cpuScore = 0;
    playerScoreCard.textContent = `Player Score: ${playerScore}`;
    cpuScoreCard.textContent = `CPU Score: ${cpuScore}`;
    rounds.innerText = '';
    playerScoreCard.style.backgroundColor = "transparent";
    cpuScoreCard.style.backgroundColor = "transparent";
})