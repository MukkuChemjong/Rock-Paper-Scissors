
let player =
{
    firstHorizontalWin1 : 0,
    secondHorizontalWin1 : 0,
    thirdHorizontalWin1 : 0,
    firstVerticalWin1: 0,
    secondVerticalWin1: 0,
    thirdVerticalWin1: 0,
    firstDiagonalWin1: 0,
    secondDiagonalWin1: 0
};
let computer = {
    firstHorizontalWin2 : 0,
    secondHorizontalWin2 : 0,
    thirdHorizontalWin2 : 0,
    firstVerticalWin2: 0,
    secondVerticalWin2: 0,
    thirdVerticalWin2: 0,
    firstDiagonalWin2: 0,
    secondDiagonalWin2:0
};
let squareChoices = [1,2,3,4,5,6,7,8,9];


function generateRandomNumber(){
    return squareChoices[Math.floor((Math.random() * squareChoices.length))];
}

function removeChoice(number){
    const index = squareChoices.indexOf(number);

    squareChoices.splice(index, 1);
}

function computerTurn(number){
    if(number === 1){
        computer.firstHorizontalWin2 += 1;
        computer.firstDiagonalWin2 += 1;
        computer.firstVerticalWin2 += 1;
        removeChoice(number);
        if(computer.firstHorizontalWin2 === 3 || computer.firstDiagonalWin2 === 3 || computer.firstVerticalWin2 === 3){
            alert("player 2 wins");
        }
    }
    
    if(number === 2){
        computer.firstHorizontalWin2 += 1;
        computer.secondVerticalWin2 += 1;
        removeChoice(number);
        if(computer.firstHorizontalWin2 === 3 || computer.secondVerticalWin2 === 3){
            alert("player 2 wins");
        }
        
    }

    if(number === 3){
        computer.firstHorizontalWin2 += 1;
        computer.secondDiagonalWin2 += 1;
        computer.thirdVerticalWin2 += 1;
        removeChoice(number);
        if(computer.firstHorizontalWin2 === 3 || computer.secondDiagonalWin2 === 3 || computer.thirdVerticalWin2 === 3){
            alert("player 2 wins");
        }
    }

    if(number === 4){
        computer.secondHorizontalWin2 += 1;
        computer.firstVerticalWin2 += 1;
        removeChoice(number);
        if(computer.secondHorizontalWin2 === 3 || computer.firstVerticalWin2 === 3){
            alert("player 2 wins");
        }
    }

    if(number === 5){
        computer.secondHorizontalWin2 += 1;
        computer.secondVerticalWin2 += 1;
        computer.firstDiagonalWin2 += 1;
        computer.secondDiagonalWin2 += 1;
        removeChoice(number);
        if(computer.secondHorizontalWin2 === 3 || computer.secondVerticalWin2 === 3 || computer.firstDiagonalWin2 === 3 || computer.secondDiagonalWin2 === 3){
            alert("player 2 wins");
        }
    }


    if(number === 6){
        computer.secondHorizontalWin2 += 1;
        computer.thirdVerticalWin2 += 1;
        removeChoice(number);
        if(computer.secondHorizontalWin2 === 3 || computer.thirdVerticalWin2 === 3){
            alert("player 2 wins");
        }
    }


    if(number === 7){
        computer.thirdHorizontalWin2 += 1;
        computer.firstVerticalWin2 += 1;
        computer.secondDiagonalWin2 += 1; 
        removeChoice(number);
        if(computer.thirdHorizontalWin2 === 3 || computer.firstVerticalWin2 === 3 || computer.secondDiagonalWin2 === 3){
            alert("player 2 wins");
        }
    }

    if(number === 8){
        computer.thirdHorizontalWin2 += 1;
        computer.secondVerticalWin2 += 1;
        removeChoice(number);
        if(computer.thirdHorizontalWin2 === 3 || computer.secondVerticalWin2 === 3){
            alert("player 2 wins");
        }
    }
        

    if(number === 9){
        computer.thirdHorizontalWin2 += 1;
        computer.thirdVerticalWin2 += 1;
        computer.firstDiagonalWin2 += 1;
        removeChoice(number);
        if(computer.thirdHorizontalWin2 === 3 || computer.thirdVerticalWin2 === 3 || computer.firstDiagonalWin2 === 3){
            alert("player 2 wins");
        }
    }

    document.getElementById(`squareId${number}`).innerHTML = "o";
    document.getElementById(`squareId${number}`).style.color = "black";
    document.getElementById(`squareId${number}`).disabled = true;
}

function addSymbol(number){
    if(number === 1){
        player.firstHorizontalWin1 += 1;
        player.firstDiagonalWin1 += 1;
        player.firstVerticalWin1 += 1;
        removeChoice(number);
        if(player.firstHorizontalWin1 === 3 || player.firstDiagonalWin1 === 3 || player.firstVerticalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    if(number === 2){
        player.firstHorizontalWin1 += 1;
        player.secondVerticalWin1 += 1;
        removeChoice(number);
        if(player.firstHorizontalWin1 === 3 || player.secondVerticalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }


    if(number === 3){
        player.firstHorizontalWin1 += 1;
        player.secondDiagonalWin1 += 1;
        player.thirdVerticalWin1 += 1;
        removeChoice(number);
        if(player.firstHorizontalWin1 === 3 || player.secondDiagonalWin1 === 3 || player.thirdVerticalWin1 === 3){
            
            alert("player 1 wins");
            return;
        }
    }


    if(number === 4){
       
        player.secondHorizontalWin1 += 1;
        player.firstVerticalWin1 += 1;
        removeChoice(number);
        if(player.secondHorizontalWin1 === 3 || player.firstVerticalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    if(number === 5){
        
        player.secondHorizontalWin1 += 1;
        player.secondVerticalWin1 += 1;
        player.firstDiagonalWin1 += 1;
        player.secondDiagonalWin1 += 1;
        removeChoice(number);
        if(player.secondHorizontalWin1 === 3 || player.secondVerticalWin1 === 3 || player.firstDiagonalWin1 === 3 || player.secondDiagonalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    if(number === 6){
       
        player.secondHorizontalWin1 += 1;
        player.thirdVerticalWin1 += 1;
        removeChoice(number);
        if(player.secondHorizontalWin1 === 3 || player.thirdVerticalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    if(number === 7){
       
        player.thirdHorizontalWin1 += 1;
        player.firstVerticalWin1 += 1;
        player.secondDiagonalWin1 += 1; 
        removeChoice(number);
        if(player.thirdHorizontalWin1 === 3 || player.firstVerticalWin1 === 3 || player.secondDiagonalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    if(number === 8){
        player.thirdHorizontalWin1 += 1;
        player.secondVerticalWin1 += 1;
        removeChoice(number);
        if(player.thirdHorizontalWin1 === 3 || player.secondVerticalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    if(number === 9){
        player.thirdHorizontalWin1 += 1;
        player.thirdVerticalWin1 += 1;
        player.firstDiagonalWin1 += 1;
        removeChoice(number);
        if(player.thirdHorizontalWin1 === 3 || player.thirdVerticalWin1 === 3 || player.firstDiagonalWin1 === 3){
            alert("player 1 wins");
            return;
        }
    }

    document.getElementById(`squareId${number}`).innerHTML = "x";
    document.getElementById(`squareId${number}`).style.color = "black";
    document.getElementById(`squareId${number}`).disabled = true;

    computerTurn(generateRandomNumber());
}

function newGame(){
    player.firstHorizontalWin1 = 0;
    player.secondHorizontalWin1 = 0;
    player.thirdHorizontalWin1 = 0;
    player.firstVerticalWin1= 0;
    player.secondVerticalWin1= 0;
    player.thirdVerticalWin1= 0;
    player.firstDiagonalWin1= 0;
    player.secondDiagonalWin1=0;

    computer.firstHorizontalWin2 = 0;
    computer.secondHorizontalWin2 = 0;
    computer.thirdHorizontalWin2 = 0;
    computer.firstVerticalWin2 = 0;
    computer.secondVerticalWin2 = 0;
    computer.thirdVerticalWin2 = 0;
    computer.firstDiagonalWin2 = 0;
    computer.secondDiagonalWin2 = 0;
    squareChoices = [1,2,3,4,5,6,7,8,9];

    for(var i = 0; i < 9; i++){
        document.querySelectorAll(".square")[i].innerHTML = 0;
        document.querySelectorAll(".square")[i].style.color = "white";
        document.querySelectorAll(".square")[i].disabled = false;
    }
}
