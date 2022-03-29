class Calculator {
  constructor(inputField) {
    this.inputField = inputField;
    this.clear();
  }

  clear() {
    this.inputField = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    this.inputField = number;

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.inputField.innerText =  this.inputField;
  }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const inputField = document.querySelector("[data-input]");

const calculator = new Calculator(inputField);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})