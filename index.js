const display = document.getElementById("Display");
const buttons = document.querySelectorAll(".Num");
// Calculator Project
let current = "";   // stores typed numbers
let first = null;   // stores first number
let operator = null;

// Number buttons
buttons.forEach(btn => {
    btn.onclick = () => {
        current += btn.value;
        display.value = current;
    };
});

// Operators
document.getElementById("Add").onclick = () => setOperator("+");
document.getElementById("Sub").onclick = () => setOperator("-");
document.getElementById("Mul").onclick = () => setOperator("*");
document.getElementById("Div").onclick = () => setOperator("/");

function setOperator(op) {
    first = Number(current);
    operator = op;
    current = "";
    display.value = "";
}

// Equal button
document.getElementById("Equal").onclick = () => {
    let second = Number(current);
    let result = 0;

    switch (operator) {
        case "+": result = first + second; break;
        case "-": result = first - second; break;
        case "*": result = first * second; break;
        case "/": result = first / second; break;
    }

    display.value = result;
    current = `${result}`; // continue calculation
};

// Clear
document.getElementById("Clear").onclick = () => {
    current = "";
    first = null;
    operator = null;
    display.value = "";
};
