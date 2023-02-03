const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');
screen.textContent = '';
const answer = document.getElementById('answer');
answer.textContent = '0';


function roundDecimal(answer) {
  if (answer.toString().indexOf('.') !== -1) {
    if (answer.toString().split('.')[1].length > 5) {
      return answer.toFixed(5);
    }
  }
  return answer;
}

function add(a, b) {
  const answer = a + b;
  return roundDecimal(answer);
}

function subtract(a, b) {
  const answer = a - b;
  return roundDecimal(answer);
}

function multiply(a, b) {
  const answer = a * b;
  return roundDecimal(answer);
}

function divide(a, b) {
  if (b === 0) {
    return 'Oops';
  }
  const answer = a / b;
  return roundDecimal(answer);
}

function power(a, b) {
  let answer = a;
  for (let i = 1; i < b; i += 1) {
    answer *= a;
  }
  return roundDecimal(answer);
}

function handleClicks(myString) {
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === '+') {
      let index = myString.indexOf('+');
      let num1 = Number(myString.slice(0, index));
      let num2 = Number(myString.slice(index + 1, myString.length - 1));
      return add(num1, num2);
    }
    if (myString[i] === '-') {
      let index = myString.indexOf('-');
      let num1 = Number(myString.slice(0, index));
      let num2 = Number(myString.slice(index + 1, myString.length - 1));
      return subtract(num1, num2);
    }
    if (myString[i] === '*') {
      let index = myString.indexOf('*');
      let num1 = Number(myString.slice(0, index));
      let num2 = Number(myString.slice(index + 1, myString.length - 1));
      return multiply(num1, num2);
    }
    if (myString[i] === '/') {
      let index = myString.indexOf('/');
      let num1 = Number(myString.slice(0, index));
      let num2 = Number(myString.slice(index + 1, myString.length - 1));
      return divide(num1, num2);
    }
    if (myString[i] === '^') {
      let index = myString.indexOf('^');
      let num1 = Number(myString.slice(0, index));
      let num2 = Number(myString.slice(index + 1, myString.length - 1));
      return power(num1, num2);
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    screen.textContent += button.textContent;
    if (button.id === 'equals') {
      answer.textContent = handleClicks(screen.textContent);
      screen.textContent = '';
    }
    if (button.id === 'backspace') {
      screen.textContent = screen.textContent.slice(0, -4);
    }

    if (button.id === 'clear') {
      screen.textContent = '';
      answer.textContent = '0';
    }
  });
});