function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function updateDisplayText(currDisplay, newInput) {
    if (currDisplay > 0) {
        displayText = currDisplay += newInput;
        activeScreen.textContent = displayText;
    } else {
        displayText = newInput;
        activeScreen.textContent = displayText;
    }    
}

// Global Declarations

let displayText = '0';
let firstNum = 0;
let activeOperand= '+';
const activeScreen = document.querySelector(".active");

// Number Keys

const numbers = document.querySelectorAll("[data-num]");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        updateDisplayText(displayText, number.getAttribute('data-num'));
    });
});

// Clear Key

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    displayText = '0'
    firstNum = 0;
    activeOperand= '+';
    activeScreen.textContent = displayText;
});

// Backspace Key

const backspace = document.querySelector(".backspace");
backspace.addEventListener('click', () => {
    if (displayText.length > 1) {
        displayText = displayText.slice(0, -1);
    } else displayText = '0';
    activeScreen.textContent = displayText;
});

// Operator Keys

const division = document.querySelector(".divide");
const multiplication = document.querySelector(".multiply");
const subtraction = document.querySelector(".subtract");
const addition = document.querySelector(".add");

addition.addEventListener('click', () => {
    firstNum = parseFloat(displayText);
    activeOperand= '+';
    displayText = '0';
});

// Equals Key

const equals = document.querySelector(".equals");

equals.addEventListener('click', () => {
    displayText = operate(activeOperand, firstNum, parseFloat(displayText));
    console.log(displayText);
});