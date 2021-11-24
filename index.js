/*PLAYER SELECTION*/
function playerSelection(x) {
    
    if (!/^[a-zA-Z]+$/.test(x) || !x) {
        alert("Invalid Input");
    }else{
            uGuess = x;
            return uGuess.toLowerCase();
    }
    
}

// let uAns = playerSelection(prompt("ENTER YOUR SELECTION"));
// console.log(uAns);

// /*COMPUTER PLAY*/
function computerPlay() {
    const selections = ["Paper", "Rock", "Scissors"];

    const random = Math.floor(Math.random() * selections.length);
    return selections[random].toLowerCase();
    
}
// let cAns = computerPlay();
// console.log(cAns);

// /*CHECK GUESS*/
function playRound(player, computer) {

    if (player === computer) {
        return "Tie";
    }
    else if (player === "rock" && computer === "scissors") {
        return "Win";
    }else if (player === "scissors" && computer === "rock") {
        return "Lose";
    }else if (player === "paper" && computer === "rock") {
        return "Win";
    }else if (player === "rock" && computer === "paper") {
        return "Lose";
    }else if (player === "scissors" && computer === "paper") {
        return "Win";
    }else if (player === "paper" && computer === "scissors") {
        return "Lose";
    }else{
        return "Invalid Input";
    }
    
}

let cAns = computerPlay();
let uAns = playerSelection(prompt("ENTER YOUR SELECTION"));
console.log(`You ${playRound(uAns, cAns)}. ${uAns} vs ${cAns}`);

// function game() {
    
//     for (let rounds = 0; rounds < 5; rounds++) {
        // let cAns = computerPlay();
        // let uAns = playerSelection(prompt("ENTER YOUR SELECTION"));
        
//         let score = playRound(uAns, cAns);

//         // if (score === "Win") {
//         //     let Win;
//         //     Win++;
//         //     return Win;
//         // }else if (score === "Lose") {
//         //     let Lose;
//         //     Lose++;
//         //     return Lose;
//         // }else if (score === "Tie") {
//         //     let Tie;
//         //     Tie++;
//         //     return Tie;
//         // }

//         // return win || Lose || Tie;
        
//     }
// }
// game();

// function countScore(score) {
//     if (score === "Win") {
//         let Win = 0;
//         Win++;
//         return Win;
//     }
//     if (Win > Lose) {
//         return "Win";
//     }
// }