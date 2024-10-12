// Función calculadora
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";
        default:
            return "Operación no válida";
    }
}

// Uso de la calculadora
let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación (+, -, *, /):");

console.log("Resultado:", calculadora(numero1, numero2, operacion));
