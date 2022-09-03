const choiceSelection = ["Rock", "Paper", "Scissors"];

function computerPlay(){ 
    const randomChoice = Math.floor(Math.random() * 3); //randomly choose an integer between 0 and 2
    const computerChoice = choiceSelection[randomChoice];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Rock"){
        return "It\'s a tie! You both pick Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return "It\'s a tie! You both pick Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return "It\'s a tie! You both pick Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors");
        //playerSelection = playerSelection.toLowerCase;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
