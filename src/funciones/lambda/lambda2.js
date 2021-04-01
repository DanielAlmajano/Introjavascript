function suma_n(n) {
    let suma = 0;
    let con = 1;
    while (con <= n) {
        suma = suma + con;
        con++;
    }
    console.log(suma);
}
console.log(suma_n(100));


//Do-while
function sumaNP(n) {
    let suma = 0;
    let i = 1;
    do {
        suma = suma + i;
        i++;
    } while (i <= n);
    return suma;
}
console.log(sumaNP(100));

//Arrow
suma_num = (n => {
    let suma = 0;
    let con = 1;
    while (con <= n) {
        suma = suma + con;
        con++;
    }
    console.log(suma);
});
console.log(suma_num(100));