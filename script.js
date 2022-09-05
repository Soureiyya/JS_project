const choiceSelection = ["Rock", "Paper", "Scissors"];

function computerPlay(){ 
    let randomChoice = Math.floor(Math.random()*3);
    return choiceSelection[randomChoice];
}

function playerPlay() {
    playerInput = prompt("Rock Paper Scissors").toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput;
    }
    else {
        console.log("Please try again!");
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "It\'s a tie!";
    } 
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It\'s a tie!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It\'s a tie!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper";
    } 
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock";
    } 
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors";
    } 
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock";
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        if(playerSelection === undefined){             
            i--;
            continue;   
        }

        let finalScore = playRound(playerSelection,computerSelection);
        console.log(`Computer: ${computerSelection} You: ${playerSelection}`);
       
        if(finalScore === "Computer"){
            computerScore++;
            console.log("You lost!");
            console.log(`Computer: ${computerScore} You: ${playerScore}`);
        }
        if(finalScore === "Player"){
            playerScore++;
            console.log("Congrats!! You won!");
            console.log(`Computer: ${computerScore} You: ${playerScore}`);
        }
        if(finalScore === "Tie"){
            console.log("It\'s a tie!");
            computerScore = computerScore;
            playerScore = playerScore;
            console.log(`Computer: ${computerScore} You: ${playerScore}`);
        } 
    }
    
    finalScore(computerScore,playerScore);       
}

function finalScore(computerScore,playerScore){

    if(computerScore > playerScore){ 
        console.log("You lost!", `Computer: ${computerScore} You: ${playerScore}`);
    }
    else if(playerScore > computerScore){ 
        console.log("Congrats!! You won!",`Computer: ${computerScore} You: ${playerScore}`);
    }
    else{
        console.log("It\'s a tie!",`Computer: ${computerScore} You: ${playerScore}`);
    }
}

game();