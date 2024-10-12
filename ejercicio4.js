// Pide el año de nacimiento al usuario
let anioNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
let anioActual = new Date().getFullYear();

// Calcula y muestra la edad
if (anioNacimiento <= anioActual) {
    let edad = anioActual - anioNacimiento;
    console.log("Tu edad es: " + edad);
} else {
    console.log("El año de nacimiento no puede ser mayor al año actual.");
}
