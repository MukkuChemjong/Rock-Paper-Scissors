var operator = "";
var firstNum = "";
var secondNum = "";
var total = "";
var previousOperator = "";
var secondNumStart = false; 
var buttonHolder = "";
var restart = false;

var checkNumber = function(input) {
  return /^[1234567890.]$/.test(input);
}

var checkOperator = function(input) {
  return /^[+/*-]$/.test(input);
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
    add(parseFloat(firstNum),parseFloat(secondNum));
    restart = true;
  }
  else if(operator === "-"){
    document.getElementById("display").innerHTML += "=";
    subtract(parseFloat(firstNum),parseFloat(secondNum));
    restart = true;
  }
  else if(operator === "*"){
    document.getElementById("display").innerHTML += "=";
    multiply(parseFloat(firstNum),parseFloat(secondNum));
    restart = true;
  }
  else if(operator === "/" && firstNum === "0"){
    document.getElementById("display").innerHTML += "=";
    document.getElementById("display").innerHTML += "Nan";
    window.alert("Nice try!");
    restart = true;
  }
  else{
    console.log(firstNum,secondNum);
    document.getElementById("display").innerHTML += "=";
    divide(parseFloat(firstNum),parseFloat(secondNum));
    restart = true;
  }
}

function clearDisplay(){
  document.getElementById("display").innerHTML = "&nbsp;";
  operator = "";
  firstNum = "";
  secondNum = "";
}

function operation(operatorButton){
  operator = operatorButton;
  document.getElementById("decimal").disabled = false;

  if(secondNum != ""){
    if(previousOperator === "+"){
      total = parseFloat(firstNum) + parseFloat(secondNum);
      firstNum = total;
      secondNum = "";
    }
    else if(previousOperator === "-"){
      total = parseFloat(firstNum) - parseFloat(secondNum);
      firstNum = total;
      secondNum = "";
    }
    else if(previousOperator === "*"){
      total = parseFloat(firstNum) * parseFloat(secondNum);
      firstNum = total;
      secondNum = "";
    }
    else if(previousOperator === "/"){
      total = parseFloat(firstNum) / parseFloat(secondNum);
      firstNum = total;
      secondNum = "";
    }
  }
  document.getElementById("display").innerHTML += operatorButton;
}

function addToDisplay(button){
    buttonHolder = button;

  if(restart === true){
    document.getElementById("display").innerHTML = "";
    restart = false;
    operator = "";
    firstNum = "";
    secondNum = "";

  }

  if ((checkNumber(button) === true) && operator === ""){
    if(button === "."){
        document.getElementById("decimal").disabled = true;
    }
    document.getElementById("display").innerHTML += button;
    firstNum += button;
  }
  else{
    if(button === "."){
        document.getElementById("decimal").disabled = true;
    }
    secondNumStart = true;
    document.getElementById("display").innerHTML += button;
    secondNum += button;
    previousOperator = operator;
  }
}

function backspace(){
    if (operator === ""){
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0,-1);
        firstNum = firstNum.slice(0,-1);
    }
    else if(checkOperator(buttonHolder) === true && secondNumStart === false){
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0,-1);
        firstNum = firstNum.slice(0,-1);
        console.log(secondNum);
    }
    else if(secondNumStart === true){
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0,-1);
        secondNum = secondNum.slice(0,-1);
    }
}