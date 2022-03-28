const inputField = document.querySelector("#input-field");
let operationArray = [];
let currentNumber = "";
let operator = "";

const operate = (numsArray, operator) => {
  let result;
  if (operator === "add") {
    result = add(numsArray);
  } else if (operator === "subtract") {
    result = subtract(numsArray);
  } else if (operator === "divide") {
    result = divide(numsArray);
  } else if (operator === "multiply") {
    result = multiply(numsArray);
  }
  inputField.textContent = result;
  return result;
}; 

const add = arr => arr.reduce((a, b) => a + b);
const subtract = arr => arr.reduce((a, b) => a - b);
const multiply = arr => arr.reduce((a, b) => a * b);
const divide = arr => arr.reduce((a, b) => a / b);

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  operationArray.push(Number.parseInt(currentNumber, 10));
  console.log(operationArray);
  currentNumber = "";
  operate(operationArray, operator);
  operationArray.push(operate(operationArray, operator));
  operationArray.splice(0, 2);
  console.log(operationArray);
})

const addition = document.querySelector("#add");
addition.addEventListener("click", () => {
  operator = "add";
  if (operationArray.length === 0) {
    operationArray.push(Number.parseInt(currentNumber, 10));
  } 
  inputField.textContent = "+";
  currentNumber = "";
})
const subtraction = document.querySelector("#subtract");
subtraction.addEventListener("click", () => {
  operator = "subtract";
  if (operationArray.length === 0) {
    operationArray.push(Number.parseInt(currentNumber, 10));
  }
  inputField.textContent = "-";
  currentNumber = "";
})
const multiplication = document.querySelector("#multiply");
multiplication.addEventListener("click", () => {
  operator = "multiply";
  if (operationArray.length === 0) {
    operationArray.push(Number.parseInt(currentNumber, 10));
  }
  inputField.textContent = "*";
  currentNumber = "";
})
const division = document.querySelector("#divide");
division.addEventListener("click", () => {
  operator = "divide";
  if (operationArray.length === 0) {
    operationArray.push(Number.parseInt(currentNumber, 10));
  }
  inputField.textContent = "/";
  currentNumber = "";
})

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  currentNumber += 1;
  inputField.textContent = currentNumber;
})
const two = document.querySelector("#two");
two.addEventListener("click", () => {
  currentNumber += 2;
  inputField.textContent = currentNumber;
})
const three = document.querySelector("#three");
three.addEventListener("click", () => {
  currentNumber += 3;
  inputField.textContent = currentNumber;
})
const four = document.querySelector("#four");
four.addEventListener("click", () => {
  currentNumber += 4;
  inputField.textContent = currentNumber;
})
const five = document.querySelector("#five");
five.addEventListener("click", () => {
  currentNumber += 5;
  inputField.textContent = currentNumber;
})
const six = document.querySelector("#six");
six.addEventListener("click", () => {
  currentNumber += 6;
  inputField.textContent = currentNumber;
})
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  currentNumber += 7;
  inputField.textContent = currentNumber;
})
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  currentNumber += 8;
  inputField.textContent = currentNumber;
})
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  currentNumber += 9;
  inputField.textContent = currentNumber;
})
const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  currentNumber += 0;
  inputField.textContent = currentNumber;
})