// alert: muestra un mensaje
alert("Hola, esta es una alerta");
// prompt: pedir datos al usuario
let n1 = prompt("Ingrese un numero 1");
let n2 = prompt("Ingrese un numero 2");
// mostrar en consola
console.log(n1);
console.log(n2);
// typeof muestra el tipo de dato (string)
console.log(typeof n1);
console.log(typeof n2);
// convertir string a número
n1 = parseInt(n1);
n2 = parseInt(n2);
// confirm: confirmar la operación
let res = confirm("¿Desea continuar?");
// condicionales
if (res == true) {
    let resultado = n1 + n2;
    alert("Operacion realizada");
    alert("Resultado: " + resultado);
}

if (res == false) {
    alert("Operacion cancelada");
}
