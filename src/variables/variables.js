/**
 * Variables: var, let y const
 * Suma de vectores/array
 */
//arrays:
var lista1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let lista2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let lista3 = [];

for (let i = 0; i <= lista1.length; i++) {
    lista3.push(lista1[i] + lista2[i]);
}
console.log(lista3)


//enteros y flotantes
var n1 = 10;
let n2 = 10;
console.log(n1 + n2);
var x1 = 3.3;
let x2 = 3.3;
console.log(x1 + x2);

//Booleanos
var bool1 = true
let bool2 = false
console.log(bool1, bool2);