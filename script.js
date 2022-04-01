const inputField = document.querySelector("#input-field");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");

const evaluateExpression = (expression) => {
  let arr = [...expression]
  console.log(arr);
}

const updateDisplay = (content) => {
  inputField.innerText += content;
}

const clearDisplay = () => {
  inputField.innerText = "";
}

numberButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    updateDisplay(e.target.innerText);
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    updateDisplay(e.target.innerText);
  })
})

clearButton.addEventListener("click", () => {
  clearDisplay();
})

equalsButton.addEventListener("click", () => {
  evaluateExpression(inputField.innerText);
})