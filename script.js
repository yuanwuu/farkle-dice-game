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
const winCombo = [1,2,3,4,5,6]
const rolls = [] 
const playerScore = []
const currentScore = []
const pcScore = []
const targetScore = 10000
// const profile = player1


// < --------------- funtions ----------------- >

const rollBtn = document.querySelector('.roll')
const output = document.querySelector('.table')
const bankBtn = document.querySelector('.bank')
const pScore = document.querySelector('.player-score')

const newTurn = document.querySelector('.new-game')
// const gameRule = document.querySelector('.rules')



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
        output.innerHTML += `<p>1000</p>`
    } else if (trackDice[2] === 3){
        output.innerHTML += `<p>200</p>`
    } else if (trackDice[3] === 3) {
        output.innerHTML += `<p>300</p>`
    } else if (trackDice [4] === 3) {
        output.innerHTML += `<p>400</p>`
    } else if (trackDice[5] === 3) {
        output.innerHTML += `<p>500</p>`
    } else if (trackDice[6] === 3) {
        output.innerHTML += `<p>600</p>`
    } else if (trackDice[1] === 1){
        output.innerHTML += `<p>100</p>`
    } else if (trackDice[1] === 2){
        output.innerHTML += `<p>200</p>`
    } else if (trackDice[1] === 3){
        output.innerHTML += `<p>300</p>`
    } else if (trackDice[5] === 1){
        output.innerHTML += `<p>50</p>`    
    } else if (trackDice[5] === 2){
        output.innerHTML += `<p>100</p>`
    }
    else { 
        output.innerHTML = `<span>FARKLED</span>`
    }
    

}

bankBtn.addEventListener('click', bankScore)
function bankScore () { // score need to be adde to score board
    let sum = 0;
    // pScore.innerHTML = sum + 
    pScore.textContent = 'banked'
}


function newRoll() {
    //score = 0;
    // numTurns = 0;
    pScore = 0;
}

function winGame (){
    if (pScore > targetScore){
        console.log (`FARKLED! YOU WON! `)
    } else {
        console.log (`FARKLED! YOU WON! `)
    }
}

function playerTurn() {
    let dice = rollDice(6);
    let score = checkCombination(dice);
    if (score > 0) {
      updateScore(pScore);
      if (currentScore >= targetScore) {
        endGame();
      }
    } else {
      currentScore = 0;
      switchPlayer();
    }
  }
 
  function switchPlayer() {
    if (currentPlayer === 1) {
      currentPlayer = 2;
    } else {
      currentPlayer = 1;
    }
    document.getElementById("profile").innerHTML = "profile" + currentPlayer + "'s turn";
  }


// newTurn.addEventListener('click',newRoll)


// const farkle = () => { // lose function, this round of score will go back to 0
//     console.log(`FARKLE!`)
// }

// let hotDice = () => { // winning hand, hotDice can roll another turn
//     if (diceRoll) {
//         console.log(`roll again or bank score`)
//     } 
// }




