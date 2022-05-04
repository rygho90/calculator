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
        calculator.displayText = currDisplay += newInput;
        activeScreen.textContent = calculator.displayText;
    } else {
        calculator.displayText = newInput;
        activeScreen.textContent = calculator.displayText;
    }    
}

let calculator = {
    displayText: '0',
    firstNum: ''
}

const activeScreen = document.querySelector(".active");

const numbers = document.querySelectorAll("[data-num]");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        updateDisplayText(calculator.displayText, number.getAttribute('data-num'));
    });
});