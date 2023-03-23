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

const rolls = [] 
const doubles = 0 
const typeOfKind = [
    [1,1,1,1,1],
    [2,2,2,],
    [3,3,3,],
    [4,4,4,],
    [5,5,5,],
    [6,6,6,],
]
const single = [1, 5]
const score = [1,5]
const playerScore = []


// < --------------- funtions ----------------- >

const rollBtn = document.querySelector('.roll')
const output = document.querySelector('.table')
const bankBtn = document.querySelector('.bank')
const pScore = document.querySelector('.player-score')
// const numOfDice = document.querySelector('.diceNum')
const newTurn = document.querySelector('.new-game')



rollBtn.addEventListener('click',game) // to start playing the game

function newRoll() {
    // score = 0;
    numTurns = 0;
    pScore = 0;
}
 
function game () {
    output.innerHTML = " "
    for (let i = 0;i < 5; i++){ // 5 dices were rolled and printed
        const ranNum = (Math.floor(Math.random() * 6) + 1)
        const val = 9855 + ranNum
        output.innerHTML += `<span class="diceNum" value="${ranNum}">&#${val}</span>`; // value="${ranNum}" is calling the fn ranNum to compare it agian the ${val}.

    }
    

    bankBtn.addEventListener('click', bankScore)
       function bankScore () { // score need to be adde to score board
       let sum = 0;


       if (ranNum === single[0]){
        pScore.textContent = sum += 100;
    } else if (ranNum === single[1]){
        pScore.textContent = sum += 50;
    } else if (ranNum === 5) {
        pScore.textContent = sum += 50;
    } else if (ranNum === typeOfKind[1]) {
        pScore.textContent = sum += 200;
    } else if (ranNum === typeOfKind[2]) {
        pScore.textContent = sum += 300;
    } else if (ranNum === typeOfKind[3]) {
        pScore.textContent = sum += 400;
    } else if (ranNum === typeOfKind[4]) {
        pScore.textContent = sum += 500;
    } else if (ranNum === typeOfKind[5]) {
        pScore.textContent = sum += 600;
    } else if (ranNum === typeOfKind[0]){
        pScore.textContent = sum += 1000;
     } 
     if (ranNum != single || ranNum != typeOfKind){
         pScore.textContent = 'FARKLED'
     }
    }

    }



//finding doubles
    //first sort: you can use any way to sort doesnt matter
rolls.sort(function(a,b){
    return (a>b?1:(a<b)?0:-1);
  });
  
  for (var i =0; i < rolls.length; i++) {
      if (rolls[i] == rolls[i+1]) {
          doubles++;
          i++;
      }
  }
  if (doubles>0) log("You rolled " + doubles + " doubles");



// newTurn.addEventListener('click',newRoll)


// const farkle = () => { // lose function, this round of score will go back to 0
//     console.log(`FARKLE!`)
// }

// let hotDice = () => { // winning hand, hotDice can roll another turn
//     if (diceRoll) {
//         console.log(`roll again or bank score`)
//     } 
// }

// bankScore = (score) => {
//     if (diceRoll === score) {
//         console.log(`Roll Dice or Bank Score`)
//     } else {
//         return farkle
//     }
// }


