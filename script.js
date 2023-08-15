let loopCount = 0;
let playerScore =0;
let computerScore = 0;

function yourChoice(choice){
    
    winner(choice,getComputerChoice());
    if(playerScore === 5){
        window.alert("You have won!")
    }
    else if(computerScore === 5){
        window.alert("Computer Won!")
    }
}

function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissor"];

    let randChoice = Math.floor(Math.random() * 3);

    return choice[randChoice];
}

function winner(playerSelection, computerSelection){
    if((playerSelection === "Rock") & (computerSelection === "Paper")){
        document.getElementById("plrImg").src = "images/rock.jpg";
        document.getElementById("comImg").src = "images/paper.jpg";

        document.getElementById("winner").innerHTML = "Computer won!";
        computerScore += 1;
        document.getElementById("computerScoreId").innerHTML = computerScore;
    }
    else if((playerSelection === "Rock") & (computerSelection === "Scissor")){
        playerScore += 1;
        document.getElementById("plrImg").src = "images/rock.jpg";
        document.getElementById("comImg").src = "images/scissor.jpg";
        document.getElementById("humanScoreId").innerHTML = playerScore;

        document.getElementById("winner").innerHTML = "Player won!";
    }
    else if((playerSelection === "Rock") & (computerSelection === "Rock")){
        document.getElementById("plrImg").src = "images/rock.jpg";
        document.getElementById("comImg").src = "images/rock.jpg";

        document.getElementById("winner").innerHTML = "Tied!";
    }
    else if((playerSelection === "Paper") & (computerSelection === "Rock")){
        playerScore += 1;
        document.getElementById("plrImg").src = "images/paper.jpg";
        document.getElementById("comImg").src = "images/rock.jpg";
        document.getElementById("humanScoreId").innerHTML = playerScore;
        document.getElementById("winner").innerHTML = "Player won!";

    }
    else if((playerSelection === "Paper") & (computerSelection === "Scissor")){
        computerScore += 1;
        document.getElementById("plrImg").src = "images/paper.jpg";
        document.getElementById("comImg").src = "images/scissor.jpg";
        document.getElementById("computerScoreId").innerHTML = computerScore;

        document.getElementById("winner").innerHTML = "Computer won!";
    }
    else if((playerSelection === "Paper") & (computerSelection === "Paper")){
        document.getElementById("plrImg").src = "images/paper.jpg";
        document.getElementById("comImg").src = "images/paper.jpg";
        document.getElementById("winner").innerHTML = "Tied!";
    }
    else if((playerSelection === "Scissor") & (computerSelection === "Paper")){
        playerScore += 1;
        document.getElementById("plrImg").src = "images/scissor.jpg";
        document.getElementById("comImg").src = "images/paper.jpg";
        document.getElementById("humanScoreId").innerHTML = playerScore;
        document.getElementById("winner").innerHTML = "Player won!";
    }
    else if((playerSelection === "Scissor") & (computerSelection === "Rock")){
        document.getElementById("plrImg").src = "images/scissor.jpg";
        document.getElementById("comImg").src = "images/rock.jpg";
        computerScore += 1;
        document.getElementById("computerScoreId").innerHTML = computerScore;
        document.getElementById("winner").innerHTML = "Computer won!";
    }
    else if((playerSelection === "Scissor") & (computerSelection === "Scissor")){
        document.getElementById("plrImg").src = "images/scissor.jpg";
        document.getElementById("comImg").src = "images/scissor.jpg";
        document.getElementById("winner").innerHTML = "Tied!";
    }
}
