/*
1. user enter the game
2. user roll the dice
    a. if dice = every # in score array >> user bank [score]
    b. if dice = any # score array >> user take partial >> roll again [score]
        (i) take partial >> roll 
        (ii) farkle [back to 0, the other person's turn]
        (ii) dice = any # in score array >> score [score + score in b]
        (iii) dice != any # in score array >> (ii)
    c. keep rolling until reaches the game enter #
3. if pc/user score === game enter #
    a. enter game >> the other person's turn (i)
    b. if dice = hot dice array = score in memory >> 
        (i) roll 
        (ii) farkle [back to 0, the other person's turn]
        (ii) dice = any # in score array >> score [score + score in b]
        (iii) dice != any # in score array >> (ii)



*/

// < --------------- player ----------------- >

// let player = window('Please enter your name to begin')
// if (player === true){
//     console.log(`please roll dice to start`)
// } 


// < --------------- arrays ----------------- >
// const winCombo = [1,2,3,4,5,6]
// const rolls = [] 
// const currentScore = []
const playerScoreArr = []
const computerScore = []
// const targetScore = 10000
const targetScore = Math.floor(Math.random() * (10000 - 100 + 1) + 100);
const activePlayer = 1;
// const profile = player1


// < --------------- funtions ----------------- >

const rollBtn = document.querySelector('.roll')
const output = document.querySelector('.table') // the green box - table
const bankBtn = document.querySelector('.bank')
const playerScoreBox = document.querySelector('.player-score')
const computerScoreBox = document.querySelector('.pc-score')
// const player = document.querySelector('#player')
// const npgPlayer = document.querySelector('#npg')
const newTurn = document.querySelector('.new-game')
// const gameRule = document.querySelector('.rules')
const maxPt = document.querySelector('h3')
maxPt.textContent = targetScore + ` to win`


rollBtn.addEventListener('click',game) // to start playing the game
function game () {
    output.innerHTML = " "
    for (let i = 0;i < 5; i++){ // 5 dices were rolled and printed
        const ranNum = (Math.floor(Math.random() * 6) + 1)
        const val = 9855 + ranNum
        output.innerHTML += `<span class="diceNum" value="${ranNum}">&#${val}</span>`; // value="${ranNum}" is calling the fn ranNum to compare it agian the ${val}.
    } 

    const dice = document.querySelectorAll('.diceNum')
    const trackDice = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0 
    }
    
    for (let die of dice) { // keep track of which dice # and their rolled
        const diceValue = parseInt(die.getAttribute('value'))
        trackDice[diceValue] += 1;
    }

    if (trackDice[1] === 5){
        output.innerHTML += `<p class="pt">1000</p>`
    } else if (trackDice[2] === 3){
        output.innerHTML += `<p class="pt">200</p>`
    } else if (trackDice[3] === 3) {
        output.innerHTML += `<p class="pt">300</p>`
    } else if (trackDice [4] === 3) {
        output.innerHTML += `<p class="pt">400</p>`
    } else if (trackDice[5] === 3) {
        output.innerHTML += `<p class="pt">500</p>`
    } else if (trackDice[6] === 3) {
        output.innerHTML += `<p class="pt">600</p>`
    } else if (trackDice[1] === 1){
        output.innerHTML += `<p class="pt">100</p>`
    } else if (trackDice[1] === 2){
        output.innerHTML += `<p class="pt">200</p>`
    } else if (trackDice[1] === 3){
        output.innerHTML += `<p class="pt">300</p>`
    } else if (trackDice[5] === 1){
        output.innerHTML += `<p class="pt">50</p>`    
    } else if (trackDice[5] === 2){
        output.innerHTML += `<p class="pt">100</p>`
    }
    else { 
        output.innerHTML = `<span>FARKLED</span>`
    }
    
    if (output.textContent == "FARKLED"){
        alert('FARKLED')
        rollBtn.disabled = true; // disable the roll btn
    }
}  


bankBtn.addEventListener('click', bankScore)
function bankScore () { // score need to be adde to score board
    pointEarned = document.querySelector('.pt').innerHTML; // the pt generate from rolled dice
    playerScoreArr.push(pointEarned)
    

    let sum = 0;
    for (let i = 0; i < playerScoreArr.length; i++){
        sum += parseInt(playerScoreArr[i])
    }
    playerScoreBox.textContent = sum

    if (sum > targetScore){
        alert (`FARKLED! YOU WIN! `)
        rollBtn.disabled = true;
        bankBtn.disabled = true;
        randomTimer.disabled = true;
        
    }

}
// function timer(seconds, callback) {
//     setTimeout(callback, seconds * 1000);
//   }
  
//   // Usage: start a 60-second timer
// timer(60, function() {
//     alert("FARKLED! you've ran out of time");
//     rollBtn.disabled = true;
//     bankBtn.disabled = true;
// });

function randomTimer(minSeconds, maxSeconds, callback) {
    const duration = Math.floor(Math.random() * (maxSeconds - minSeconds + 1) + minSeconds) * 1000;
    setTimeout(callback, duration);
  }
  
  // Usage: start a timer with a random duration between 30 and 120 seconds
  randomTimer(30, 120, function() {
    // console.log("Timer complete!");
    alert("FARKLED! you've ran out of time");
    rollBtn.disabled = true;
    bankBtn.disabled = true;
});


function newRoll() {
    playerScoreBox = 0;
    computerScoreBox = 0;
}

