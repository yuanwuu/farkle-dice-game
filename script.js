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







// < --------------- funtions ----------------- >
const score = {
    ones: 100,
    fives: 50,
    'triple one': 1000,
    'triple two': 200,
}

const diceArr =[1,2,3,4,5,6]



farkle = () => { // lose function, score go back to 0
    return 0;
}

hotDice = () => { // winning hand, hotDice can roll another turn
    if (diceRoll) {
        console.log(`roll again`)
    } else {
        bankScore
    }
}

bankScore = () => {
    score += ;
}


// < --------------- functioning ----------------- >
const diceNum = (Math.floor(Math.random() * 6) + 1) // generate random # from 1 to 6

