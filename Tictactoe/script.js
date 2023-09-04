let player1 = true;
let topHorizontalWin1 = 0;
let midHorizontalWin1 = 0;
let botHorizontalWin1 = 0;

let topVerticalWin1 = 0;
let midVerticalWin1 = 0;
let botVerticalWin1 = 0;


let topDiagonalWin1 = 0;
let midDiagonalWin1 = 0;
let botDiagonalWin1 = 0;

let topDiagonalWin2 = 0;
let midDiagonalWin2 = 0;
let botDiagonalWin2 = 0;


let topVerticalWin2 = 0;
let midVerticalWin2 = 0;
let botVerticalWin2 = 0;

let topHorizontalWin2 = 0;
let midHorizontalWin2 = 0;
let botHorizontalWin2 = 0;

function addSymbol(number){
    if(number === 1){
        console.log(player1);
        if(player1 === true){
            topHorizontalWin1 += 1;
            topDiagonalWin1 += 1;
            topVerticalWin1 = topVerticalWin1 + 1;
            console.log(topVerticalWin1);
            if(topHorizontalWin1 === 3 || topDiagonalWin1 === 3 || topVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            topHorizontalWin2 += 1;
            topDiagonalWin2 += 1;
            topVerticalWin2 += 1;
            if(topHorizontalWin2 === 3 || topDiagonalWin2 === 3 || topVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }


    if(number === 2){
        if(player1 === true){
            topHorizontalWin1 += 1;
            topVerticalWin1 += 1;
            if(topHorizontalWin1 === 3 || topVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            topHorizontalWin2 += 1;
            topVerticalWin2 += 1;
            if(topHorizontalWin2 === 3 || topVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }


    if(number === 3){
        if(player1 === true){
            topHorizontalWin1 += 1;
            topDiagonalWin1 += 1;
            topVerticalWin1 += 1;
            if(topHorizontalWin1 === 3 || topDiagonalWin1 === 3 || topVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            topHorizontalWin2 += 1;
            topDiagonalWin2 += 1;
            topVerticalWin2 += 1;
            if(topHorizontalWin2 === 3 || topDiagonalWin2 === 3 || topVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }


    if(number === 4){
        if(player1 === true){
            midHorizontalWin1 += 1;
            topVerticalWin1 = topVerticalWin1 + 1;
            console.log(topVerticalWin1);
            if(midHorizontalWin1 === 3 || midVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            midHorizontalWin2 += 1;
            midVerticalWin2 += 1;
            if(midHorizontalWin2 === 3 || midVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 5){
        if(player1 === true){
            midHorizontalWin1 += 1;
            midVerticalWin1 += 1;
            midDiagonalWin1 += 1;
            if(midHorizontalWin1 === 3 || midVerticalWin1 === 3 || midDiagonalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
           midHorizontalWin2 += 1;
            midVerticalWin2 += 1;
            midDiagonalWin2 += 1;
            if(midHorizontalWin2 === 3 || midVerticalWin2 === 3 || midDiagonalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 6){
        if(player1 === true){
            midHorizontalWin1 += 1;
            midVerticalWin1 += 1;
            if(midHorizontalWin1 === 3 || midVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            midHorizontalWin2 += 1;
            midVerticalWin2 += 1;
            if(midHorizontalWin2 === 3 || midVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 7){
        if(player1 === true){
            botHorizontalWin1 += 1;
            topVerticalWin1 = topVerticalWin1 + 1;
            botDiagonalWin1 += 1;
            console.log(topVerticalWin1);   

            if(botHorizontalWin1 === 3 || botVerticalWin1 === 3 || botDiagonalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            botHorizontalWin2 += 1;
            botVerticalWin2 += 1;
            botDiagonalWin2 += 1;
            if(botHorizontalWin2 === 3 || botVerticalWin2 ===3 || botDiagonalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 8){
        if(player1 === true){
            botHorizontalWin1 += 1;
            botVerticalWin1 += 1;
            if(botHorizontalWin1 === 3 || botVerticalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            botHorizontalWin2 += 1;
            botVerticalWin2 += 1;
            if(botHorizontalWin2 === 3 || botVerticalWin2 === 3){
                alert("player 2 wins");
            }
        }
    }

    if(number === 9){
        if(player1 === true){
            botHorizontalWin1 += 1;
            botVerticalWin1 += 1;
            botDiagonalWin1 += 1;
            if(botHorizontalWin1 === 3 || botVerticalWin1 === 3 || botDiagonalWin1 === 3){
                alert("player 1 wins");
            }
        }
        else{
            botHorizontalWin2 += 1;
            botVerticalWin2 += 1;
            botDiagonalWin2 += 1;
            if(botHorizontalWin2 === 3 || botVerticalWin2 === 3 || botDiagonalWin2 === 3){
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
