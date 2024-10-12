// Define un array de números
let numeros = [34, 67, 12, 89, 45];

// Encuentra el número mayor
let numeroMayor = Math.max(...numeros);
console.log("El número mayor es: " + numeroMayor);

// Extra: permitir al usuario introducir números
let numerosUsuario = [];
let entrada;
while (true) {
    entrada = prompt("Introduce un número o escribe 'stop' para finalizar:");
    if (entrada.toLowerCase() === 'stop') break;
    numerosUsuario.push(parseInt(entrada));
}
console.log("El número mayor es: " + Math.max(...numerosUsuario));
