let player1 = true;
let firstHorizontalWin1 = 0;
let secondHorizontalWin1 = 0;
let thirdHorizontalWin1 = 0;


let firstVerticalWin1 = 0;
let secondVerticalWin1 = 0;
let thirdVerticalWin1 = 0;

let firstDiagonalWin1 = 0;
let secondDiagonalWin1 = 0;


let firstHorizontalWin2 = 0;
let secondHorizontalWin2 = 0;
let thirdHorizontalWin2 = 0;


let firstVerticalWin2 = 0;
let secondVerticalWin2 = 0;
let thirdVerticalWin2 = 0;

let firstDiagonalWin2 = 0;
let secondDiagonalWin2 = 0;


function addSymbol(number){
    if(number === 1){
        console.log(player1);
        if(player1 === true){
            firstHorizontalWin1 += 1;
            firstDiagonalWin1 += 1;
            firstVerticalWin1 += 1;
            if(firstHorizontalWin1 === 3 || firstDiagonalWin1 === 3 || firstVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            firstHorizontalWin2 += 1;
            firstDiagonalWin2 += 1;
            firstVerticalWin2 += 1;
            if(firstHorizontalWin2 === 3 || firstDiagonalWin2 === 3 || firstVerticalWin2 === 3){
                alert("player 1 wins");
            }
        }
    }


    if(number === 2){
        if(player1 === true){
            firstHorizontalWin1 += 1;
            secondVerticalWin1 += 1;
            if(firstHorizontalWin1 === 3 || secondVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            firstHorizontalWin2 += 1;
            secondVerticalWin2 += 1;
            if(firstHorizontalWin2 === 3 || secondVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }


    if(number === 3){
        if(player1 === true){
            firstHorizontalWin1 += 1;
            secondDiagonalWin1 += 1;
            thirdVerticalWin1 += 1;
            if(firstHorizontalWin1 === 3 || secondDiagonalWin1 === 3 || thirdVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            firstHorizontalWin2 += 1;
            secondDiagonalWin2 += 1;
            thirdVerticalWin2 += 1;
            if(firstHorizontalWin2 === 3 || secondDiagonalWin2 === 3 || thirdVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }


    if(number === 4){
        if(player1 === true){
            secondHorizontalWin1 += 1;
            firstVerticalWin1 += 1;
            if(secondHorizontalWin1 === 3 || firstVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            secondHorizontalWin2 += 1;
            firstVerticalWin2 += 1;
            if(secondHorizontalWin2 === 3 || firstVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 5){
        if(player1 === true){
            secondHorizontalWin1 += 1;
            secondVerticalWin1 += 1;
            firstDiagonalWin1 += 1;
            secondDiagonalWin1 += 1;
            if(secondHorizontalWin1 === 3 || secondVerticalWin1 === 3 || firstDiagonalWin1 === 3 || secondDiagonalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            secondHorizontalWin2 += 1;
            secondVerticalWin2 += 1;
            firstDiagonalWin2 += 1;
            secondDiagonalWin2 += 1;
            if(secondHorizontalWin2 === 3 || secondVerticalWin2 === 3 || firstDiagonalWin2 === 3 || secondDiagonalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 6){
        if(player1 === true){
            secondHorizontalWin1 += 1;
            thirdVerticalWin1 += 1;
            if(secondHorizontalWin1 === 3 || thirdVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            secondHorizontalWin2 += 1;
            thirdVerticalWin2 += 1;
            if(secondHorizontalWin2 === 3 || thirdVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 7){
        if(player1 === true){
            thirdHorizontalWin1 += 1;
            firstVerticalWin1 += 1;
            secondDiagonalWin1 += 1; 
            if(thirdHorizontalWin1 === 3 || firstVerticalWin1 === 3 || secondDiagonalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            thirdHorizontalWin2 += 1;
            firstVerticalWin2 += 1;
            secondDiagonalWin2 += 1; 
            if(thirdHorizontalWin2 === 3 || firstVerticalWin2 === 3 || secondDiagonalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 8){
        if(player1 === true){
            thirdHorizontalWin1 += 1;
            secondVerticalWin1 += 1;
            if(thirdHorizontalWin1 === 3 || secondVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            thirdHorizontalWin2 += 1;
            secondVerticalWin2 += 1;
            if(thirdHorizontalWin2 === 3 || secondVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 9){
        if(player1 === true){
            thirdHorizontalWin1 += 1;
            thirdVerticalWin1 += 1;
            firstDiagonalWin1 += 1;
            if(thirdHorizontalWin1 === 3 || thirdVerticalWin1 === 3 || firstDiagonalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            thirdHorizontalWin2 += 1;
            thirdVerticalWin2 += 1;
            firstDiagonalWin2 += 1;
            if(thirdHorizontalWin2 === 3 || thirdVerticalWin2 === 3 || firstDiagonalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(player1 === true){
        document.getElementById(`squareId${number}`).innerHTML = "x";
        document.getElementById(`squareId${number}`).style.color = "black";
        document.getElementById(`squareId${number}`).disabled;
        player1 = false;
    }
    else{
        document.getElementById(`squareId${number}`).innerHTML = "o";
        document.getElementById(`squareId${number}`).style.color = "black";
        document.getElementById(`squareId${number}`).disabled;
        player1 = true;
    }
}
