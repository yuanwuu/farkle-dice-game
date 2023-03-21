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

const diceNum =[1,2,3,4,5,6]
const hDArr = []

const typeOfKind = [
    [1,1,1,1],[1,1,1,1,1],[1,1,1,1,1,1],
    [2,2,2,2],[2,2,2,2,2],[2,2,2,2,2,2],
    [3,3,3,3],[3,3,3,3,3],[3,3,3,3,3,3],
    [4,4,4,4],[4,4,4,4,4],[4,4,4,4,4,4],
    [5,5,5,5],[5,5,5,5,5],[5,5,5,5,5,5],
    [6,6,6,6],[6,6,6,6,6],[6,6,6,6,6,6],
]

const score = [1,5]
const playerScore = []




// < --------------- funtions ----------------- >

const rollBtn = document.querySelector('.roll')
// const output = document.querySelector('.table')

rollBtn.addEventListener('click',diceRoll)
function diceRoll () {
    const ranNum = (Math.floor(Math.random() * 6) + 1)
    console.log(ranNum)
}

const bankBtn = document.querySelector('.bank')
bankBtn.addEventListener('click', bankScore)
function bankScore () { // score need to be adde to score board
    console.log('score added')
}


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




// < --------------- functioning ----------------- >

