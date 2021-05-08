//Quitando multiplos de 10
function multiplos5(n) {
    contador = 0;
    for (let i = 5; i <= n; i = i + 10) {
        contador++;
    }
    return contador;
}
console.log(multiplos5(10000));


//Quitando multiplos de 5
function multiplos10(n) {
    contador = 0;
    for (let i = 10; i <= n; i = i + 10) {
        contador++;
    }
    return contador;
}