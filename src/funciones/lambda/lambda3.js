function recorrido(cadena) {
    array = [];
    for (let i = 0; i <= cadena.length; i++) {
        array.push(cadena[i]);
    }
    return array;
}
console.log(recorrido('HOLA QUE TAL'));

recorrido1 = (cadena => {
    let array = [];
    for (let i = 0; i <= cadena.length; i++) {
        array.push(cadena[i]);

    }
    return array;
});
console.log(recorrido1('HOLA QUE TAL'));
