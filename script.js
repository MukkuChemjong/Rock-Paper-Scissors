let loopCount = 0;
let playerScore =0;
let computerScore = 0;

function yourChoice(choice){
    if(playerScore === 5){
        window.alert("You have won!")
    }
    else if(computerScore === 5){
        window.alert("Computer Won!")
    }
    else{
        winner(choice,getComputerChoice());
    }

}

function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];

    let randChoice = Math.floor(Math.random() * 3);

    return choice[randChoice];
}

function winner(playerSelection, computerSelection){
    if((playerSelection === "Rock") & (computerSelection === "Paper")){
        computerScore += 1;
        document.getElementById("computerScoreId").innerHTML = computerScore;
        return "You lose Paper beats Rock.";
    }
    else if((playerSelection === "Rock") & (computerSelection === "Scissor")){
        playerScore += 1;
        document.getElementById("humanScoreId").innerHTML = playerScore;
        return "You win Rock beats Scissor.";
    }
    else if((playerSelection === "Rock") & (computerSelection === "Rock")){
        return "You tied";
    }
    else if((playerSelection === "Paper") & (computerSelection === "Rock")){
        playerScore += 1;
        document.getElementById("humanScoreId").innerHTML = playerScore;
        return "You win Paper beats Rock";
    }
    else if((playerSelection === "Paper") & (computerSelection === "Scissor")){
        computerScore += 1;
        document.getElementById("computerScoreId").innerHTML = computerScore;
        return "You lose Scissor beats Paper";
    }
    else if((playerSelection === "Paper") & (computerSelection === "Paper")){
        return "You tied";
    }
    else if((playerSelection === "Scissor") & (computerSelection === "Paper")){
        
        playerScore += 1;
        document.getElementById("humanScoreId").innerHTML = playerScore;
        return "You win Scissor beats Paper.";
    }
    else if((playerSelection === "Scissor") & (computerSelection === "Rock")){

        computerScore += 1;
        document.getElementById("computerScoreId").innerHTML = computerScore;
        return "You lose Rock beats Scissor";
    }
    else if((playerSelection === "Scissor") & (computerSelection === "Scissor")){
        return "You tied.";
    }
}
