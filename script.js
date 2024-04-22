
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    let operand1 = '';
    let operator = '';
    let operand2 = '';

    function clearDisplay() {
        display.value = '';
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function performOperation() {
        operand2 = display.value;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                if (parseFloat(operand2) === 0) {
                    result = 'Error: Division by zero';
                } else {
                    result = parseFloat(operand1) / parseFloat(operand2);
                }
                break;
            
        }
        display.value = result;
        operand1 = result;
        operand2 = '';
    }

    function handleKeyPress(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '00') {
            appendToDisplay(key);
        } else {
            alert('Only numbers and arithmetic operators are allowed!');
        }
    }

    function handleButtonClick(event) {
        const value = event.target.value;
        if (!isNaN(value) || value === '.') {
            appendToDisplay(value);
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            performOperation();
        } else {
            operand1 = display.value;
            operator = value;
            clearDisplay();
        }
    }

    document.addEventListener('keydown', handleKeyPress);
    const buttons = document.querySelectorAll('.calculator button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
