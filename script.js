const operate = (operator, num1, num2) => {
  return `${num1} ${operator} ${num2}`
}; 


const add = arr => arr.reduce((a, b) => a + b);
const subtract = arr => arr.reduce((a, b) => a - b);
const multiply = arr => arr.reduce((a, b) => a * b);
const divide = arr => arr.reduce((a, b) => a / b);

