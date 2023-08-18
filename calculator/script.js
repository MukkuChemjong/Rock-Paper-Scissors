var operator = "";
var firstNum = "";
var secondNum = "";
var total = "";
var previousOperator = "";

var checkNumber = function(input) {
  return /^[1234567890]$/.test(input);
}

function add(num1,num2){
  document.getElementById("display").innerHTML += num1 + num2;
}

function subtract(num1,num2){
  document.getElementById("display").innerHTML += num1 - num2;
}

function multiply(num1,num2){
  document.getElementById("display").innerHTML += num1 * num2;
}

function divide(num1,num2){
  document.getElementById("display").innerHTML += Math.round(((num1 / num2) + Number.EPSILON) * 100000) / 100000;
}

function operate(){
  if(operator === "+"){
    document.getElementById("display").innerHTML += "=";
    add(parseInt(firstNum),parseInt(secondNum));
  }
  else if(operator === "-"){
    document.getElementById("display").innerHTML += "=";
    subtract(parseInt(firstNum),parseInt(secondNum));
  }
  else if(operator === "*"){
    document.getElementById("display").innerHTML += "=";
    multiply(parseInt(firstNum),parseInt(secondNum));
  }
  else if(operator === "/" && firstNum === "0"){
    document.getElementById("display").innerHTML += "=";
    document.getElementById("display").innerHTML += "Nan";
    window.alert("Nice try!");
  }
  else{
    console.log(firstNum,secondNum);
    document.getElementById("display").innerHTML += "=";
    divide(parseInt(firstNum),parseInt(secondNum));
  }
}

function clearDisplay(){
  document.getElementById("display").innerHTML = "";
  operator = "";
  firstNum = "";
  secondNum = "";
}

function operation(operatorButton){
  operator = operatorButton;

  if(secondNum != ""){
    if(previousOperator === "+"){
      total = parseInt(firstNum) + parseInt(secondNum);
      firstNum = total;
      secondNum = "";
    }
    else if(previousOperator === "-"){
      total = parseInt(firstNum) - parseInt(secondNum);
      firstNum = total;
      secondNum = "";
    }
    else if(previousOperator === "*"){
      total = parseInt(firstNum) * parseInt(secondNum);
      firstNum = total;
      secondNum = "";
    }
    else if(previousOperator === "/"){
      total = parseInt(firstNum) / parseInt(secondNum);
      firstNum = total;
      secondNum = "";
    }
  }
  if(operatorButton === "*"){
    document.getElementById("display").innerHTML += "x";
  }
  else{
    document.getElementById("display").innerHTML += operatorButton;
  }
}

function addToDisplay(button){
  if ((checkNumber(button) === true) && operator === ""){
    document.getElementById("display").innerHTML += button;
    firstNum += button;
  }
  else{
    document.getElementById("display").innerHTML += button;
    secondNum += button;
    previousOperator = operator;
  }
}

