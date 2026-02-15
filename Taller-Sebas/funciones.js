// EJERCICIO 1
function mensajeBienvenida() {
    alert("Bienvenido a mi aplicación");
}
mensajeBienvenida();
mensajeBienvenida();

// EJERCICIO 2
function saludoCurso() {
    alert("Bienvenidos al curso de JavaScript");
}
saludoCurso();

// EJERCICIO 3
function pedirNombre() {
    let nombre = prompt("Ingrese su nombre");
    alert("Hola, " + nombre);
}
pedirNombre();

// EJERCICIO 4
function pedirCiudad() {
    let ciudad = prompt("Ingrese la ciudad donde vive");
    alert("Vives en " + ciudad);
}
pedirCiudad();

// EJERCICIO 5
function edadFutura() {
    let edad = Number(prompt("Ingrese su edad actual"));
    let futura = edad + 10;
    alert("En 10 años tendrás " + futura + " años");
}
edadFutura();

// EJERCICIO 6
function verificarEdad() {
    let edad = Number(prompt("Ingrese su edad"));
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}
verificarEdad();

// EJERCICIO 7
function verificarNumero() {
    let num = Number(prompt("Ingrese un número"));
    if (num > 0) {
        alert("El número es positivo");
    } else if (num < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es cero");
    }
}
verificarNumero();

// EJERCICIO 8
function calcularPromedio() {
    let n1 = Number(prompt("Ingrese la primera nota"));
    let n2 = Number(prompt("Ingrese la segunda nota"));
    let n3 = Number(prompt("Ingrese la tercera nota"));
    let promedio = (n1 + n2 + n3) / 3;
    alert("El promedio es " + promedio);
}
calcularPromedio();
