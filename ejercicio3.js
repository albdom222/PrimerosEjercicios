// Pide un número al usuario
let numero = parseInt(prompt("Introduce un número:"));

// Verifica si es par o impar
if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
} else {
    console.log("Por favor, introduce un número válido.");
}
