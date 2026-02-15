let numeros=[1,2,3,4,5];
console.log(numeros);
console.log(numeros.length);
console.log(numeros[2]);
/* adicionar un nuevo dato el la ultima posicion
sin push
*/
numeros[5]=6;
/*verificar*/
console.log(numeros);
/*adicionar un nuevo dato con push*/
numeros.push(10);
/*verificar*/
console.log(numeros);
numeros.pop();/*eliminar el ultimo dato*/
console.log(numeros)/*verificar*/
/*adicionar un nuevo elemento al inicio del arreglo*/
numeros.unshift(20);
console.log(numeros)/*verificar*/
numeros[0]=0;/*modificar el primer elemento arreglo*/
console.log(numeros)/*verificar*/
/*eliminar el primer elemento del arreglo*/
numeros.shift();
console.log(numeros);/*verificar*/
/*Includes*/
numeros.includes(12);
let buscar12=numeros.includes(12)
console.log(buscar12);
let buscar6=numeros.includes(6);
console.log(buscar6);



