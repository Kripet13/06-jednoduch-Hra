// mini hra generátor
function generateRandomNumber(min, max) {
    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(guess);
    return guess;
}
//mini hra tlačítko pro zahájení
let generatedNumber;
let attempts;

function startButton() {
    generatedNumber = generateRandomNumber(1, 100);
    attempts = 0;

    document.getElementById("containerTwo").hidden = false;
    document.getElementById("generator").textContent = "Hra zahájena! Hádejte číslo mezi 1 a 100.";
    document.getElementById("hint").textContent = "";
    document.getElementById("guess").value = "";
    document.querySelector("button[onclick='restartGame()']").hidden = true;
}
//mini hra tlačítko pro kontrolu odhadu
function check() {
    const guess = parseInt(document.getElementById("guess").value, 10);

    if (isNaN(guess)) {
        document.getElementById("hint").textContent = "Prosím, zadejte platné číslo.";
        return;
    }

    attempts++;

    if (guess < generatedNumber) {
        document.getElementById("hint").textContent = "Zkuste větší číslo.";
    } else if (guess > generatedNumber) {
        document.getElementById("hint").textContent = "Zkuste menší číslo.";
    } else {
        document.getElementById("hint").textContent = `Gratuluji! Uhodl jsi číslo ${generatedNumber} po ${attempts} pokusech.`;
        document.querySelector("button[onclick='restartGame()']").hidden = false;
    }
    document.querySelector("button[onclick='startButton()']").hidden = true;
}
//mini hra tlačítko pro restart hry
function restartGame() {
    
    document.getElementById("containerTwo").hidden = true;
    document.getElementById("generator").textContent = '';
    document.getElementById("hint").textContent = '';
    document.getElementById("guess").value = '';
    document.querySelector("button[onclick='restartGame()']").hidden = true;
    document.querySelector("button[onclick='startButton()']").hidden = false;
}


//mini hra 2 tlačítko pro zahájení
function startGame() {
    document.getElementById('containerOne').hidden = false;
    document.getElementById('startGame').hidden = true;

}
//mini hra 2 výběr
function play(playerChoice) {
    const choices = ['Kámen', 'Nůžky', 'Papír'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = winner(playerChoice, computerChoice);

    document.getElementById('result').innerText = `Vybrali jste: ${playerChoice} Počítač vybral: ${computerChoice} ${result}`;
    document.getElementById('restartGameTwo').hidden = false;
}
//mini hra 2 určení výherce
function winner(player, computer) {
    if (player === computer) {
        return 'Remíza';
    } else if (
        (player === 'Kámen' && computer === 'Nůžky') ||
        (player === 'Nůžky' && computer === 'Papír') ||
        (player === 'Papír' && computer === 'Kámen')
    )  {
        return 'vyhráli jste!';
    } else {
        return 'Počítač vyhrál!';
    }

}
//mini hra 2 restart hry tlačítko
function restartGameTwo() {
    
    document.getElementById('containerOne').hidden = true;
    document.getElementById('result').textContent = '';
    document.getElementById('startGame').hidden = false;
    document.getElementById('restartGameTwo').hidden = true;
}


//mini hra 3 tlačítko pro zahájení
let time = 10;
let count = 0;
let timeInterval;
let gameActive = false;


function start() {
    document.getElementById('containerThree').hidden = false;
    document.getElementById('start').hidden = true;
    document.getElementById('restartGameThree').hidden = true;

    count = 0;
    time = 10;
    gameActive = true;
    updateCountdown();
    document.getElementById("showClicks").textContent = `Počet kliknutí: ${count}`;

    clearInterval(timeInterval);
    timeInterval = setInterval(updateCountdown, 1000);
}

//mini hra 3 časovač
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("timer").textContent = `${minutes}:${seconds}`;

    if (time> 0){
    time--;
    } else {
        clearInterval(timeInterval);
        endGame();
    }
}
//mini hra 3 počet kliknutí
function clickCount() {
    if (gameActive) {
        count++;
        document.getElementById("showClicks").textContent = `Počet kliknutí: ${count}`;
    }
}
//mini hra 3 ukončení
function endGame(){
    gameActive = false;
    document.getElementById('restartGameThree').hidden = false;
}
//mini hra 3 restart tlačítko
function restartGameThree() {
    document.getElementById("containerThree").hidden = true;
    document.getElementById("start").hidden = false;
    document.getElementById("restartGameThree").hidden = true;
}