// Pide al usuario un número
let numero = parseInt(prompt("Introduce un número para generar su tabla de multiplicar:"));

// Genera la tabla de multiplicar hasta el 10
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

// Extra: permite al usuario definir el límite
let limite = parseInt(prompt("¿Hasta qué número quieres multiplicar?"));
for (let i = 1; i <= limite; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
