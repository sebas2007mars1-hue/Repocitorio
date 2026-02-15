function saludar(){
    let nombre="Sofia Guzman";
    let mensaje="Hola";
    let saludo=null;
    saludo= ` ${mensaje} ${nombre}`;
    console.log(saludo);
}
saludar();

//fucion con parametros
function saludarPersona(nombrePersona){
    let mensajePersona="Hola";
    let saludoPersona=null;
     saludoPersona=`${mensajePersona} ${nombrePersona}`;
     return saludoPersona;
}
let carlos=saludarPersona("Carlos Perez");//Carlos es igual a saludoPersona
console.log(carlos);
let Ana=saludarPersona("Ana Torrez");//Ana es igual a saludoPersona
let Luis=saludarPersona("Luis Ramirez");//Luis es igual a saludoPersona
//typeof=> funcion que devuelve el tipo de dato
let numeroDecimal=6.24;
let respuesta=typeof numeroDecimal;
console.log(respuesta);
let nombreCompleto="Sofia Guzman";
console.log(typeof nombreCompleto);

