function compareble(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    tolower = cadena.toLowerCase();
    for (let i in tolower) {
        if (i in vocales) {
            contador++;
        }
    }
    return contador;
}
console.log(compareble('aeiou'))

//arraw
compareble2 = (cadena => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    contador = 0;
    for (let i in cadena) {
        if (i in vocales) {
            contador++;
        }
    }
    return contador;
});
console.log(compareble2('aeiou'));