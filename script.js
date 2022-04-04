class Calculator {
  constructor(previousNumberText, currentNumberText) {
    this.previousNumberText = previousNumberText;
    this.currentNumberText = currentNumberText;
    this.clear();
  }

  clear() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }

  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentNumber === '') return
    if (this.previousNumber !== '') {
      this.compute()
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  compute() {
    let computation;
    const previousNum = parseFloat(this.previousNumber);
    const currentNum = parseFloat(this.currentNumber);
    switch(this.operation) {
      case "+":
        computation = previousNum + currentNum;
        break;
      case "-":
        computation = previousNum - currentNum;
        break;
      case "*":
        computation = currentNum * previousNum;
        break;
      case "÷":
        computation = previousNum / currentNum;
        break;
    }
    this.currentNumber = computation;
    this.operation = undefined;
    this.previousNumber = "";
  }

  updateDisplay() {
    this.currentNumberText.innerText = this.currentNumber;
    if (this.operation != null) {
      this.previousNumberText.innerText = `${this.previousNumber} ${this.operation}`
    } else {
      this.previousNumberText.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const deleteButton = document.querySelector("[data-delete]");
const clearAllButton = document.querySelector("[data-clear]");
const previousNumberText = document.querySelector("[data-previous-number-input]");
const currentNumberText = document.querySelector("[data-current-number-input]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(previousNumberText, currentNumberText);

numberButtons.forEach(button => {
  button.addEventListener("click" , () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click" , () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
})

clearAllButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
})
