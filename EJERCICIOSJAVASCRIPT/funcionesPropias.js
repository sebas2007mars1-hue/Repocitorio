//alert mensajes,html
alert("Hola, esta es una alerta");
//prompt ingresar datos html
let n1=prompt("Ingrese un numero1");
console.log(n1);
let n2=prompt("Ingrese un numero2");
console.log(n2);
let resultado=0;
console.log(typeof n1);//string
console.log(typeof n2);//string
resultado=n1+n2;
alert(resultado);
//parseInt=> funcion que convierte un string a numero entero
n1=parseInt(n1);
n2=parseInt(n2);
resultado=n1+n2;
alert(resultado);

//confirm que aquellas alertas que nos informan a los usuarios solo con html
let res=confirm("¿Desea continuar?" );
if(res==false){ //!res
    alert("Operacion cancelada");
}
if (res==true){//res
    alert("Operacion realizada");
}
