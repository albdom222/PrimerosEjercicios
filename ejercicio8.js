// Función para invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

// Pide al usuario una cadena
let texto = prompt("Introduce una cadena de texto:");
console.log("Texto invertido:", invertirCadena(texto));

// Extra: verificar si es palíndromo
function esPalindromo(cadena) {
    let invertida = invertirCadena(cadena);
    return cadena === invertida;
}
console.log("¿Es un palíndromo?", esPalindromo(texto));
