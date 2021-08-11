const prevOperandElem = document.getElementById('prevOperand');
const currOperandElem = document.getElementById('currOperand');

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(prevOperandElem, currOperandElem);

numberButtons.forEach(button =>
{
    button.addEventListener('click', () =>
    {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button =>
{
    button.addEventListener('click', () =>
    {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () =>
{
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () =>
{
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () =>
{
    calculator.delete();
    calculator.updateDisplay();
});