const btn = document.getElementById("calcBtn");


btn.addEventListener("click", calculate);


function add(a, b) {
return a + b;
}


function subtract(a, b) {
return a - b;
}


function multiply(a, b) {
return a * b;
}


function divide(a, b) {
if (b === 0) {
alert("Cannot divide by zero");
return null;
}
return a / b;
}


function calculate() {
const num1 = Number(document.getElementById("num1").value);
const num2 = Number(document.getElementById("num2").value);
const op = document.getElementById("operator").value;


let result;


switch (op) {
case "+": result = add(num1, num2); break;
case "-": result = subtract(num1, num2); break;
case "*": result = multiply(num1, num2); break;
case "/": result = divide(num1, num2); break;
}


if (result !== null) {
document.getElementById("result").innerText = "Result = " + result.toFixed(2);
}
}