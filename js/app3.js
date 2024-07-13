const num1 =10;
const num2 =5;

let operator ='add';

function calculation(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else {
        console.log("Invalid operation! Defaulting to addition");
        return a + b;
    }
} calculation();

console.log(num1, operator, num2, ' = ', calculation(num1,num2,operator));

operator ='subtract';
console.log(num1, operator, num2, ' = ', calculation(num1,num2,operator));