var humanPoints = 0;
var computerPoints = 0;
function getComputerChoice(choice){
    const choices = ["rock", "paper", "scissor"];
    var number = Math.floor(Math.random() * 3);
    
    document.getElementById("output-id").innerHTML = choices[number];;
    

    if((choice === "paper") & (choices[number] === "rock") ){
        humanPoints += 1;
        console.log(humanPoints + "humanPoints");
        document.getElementById("human-id").innerHTML = humanPoints;
    }

    else if((choice === "paper") & (choices[number] === "scissor") ){
        computerPoints += 1;
        console.log(computerPoints + "computerpoints");
        document.getElementById("computer-id").innerHTML = computerPoints;
    }
};

