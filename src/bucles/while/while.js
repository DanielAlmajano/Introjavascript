var n = 7;
do {
    if (Number(n) === n) {
        if (n === 10 || n === 9) {
            console.log('Sobresaliente');
        } if (n === 8 || n === 7) {
            console.log('Notable');
        } if (n === 6 || n === 5) {
            console.log('Suficiente');
        } if (n === 4 || n === 3 || n === 2 || n === 1) {
            console.log('Suspenso');
        }
    }
} while (n != undefined);

//Version while
while (n != undefined) {
    if (Number(n) === n) {
        if (n === 10 || n === 9) {
            console.log('Sobresaliente', 'while');
        } if (n === 8 || n === 7) {
            console.log('Notable', 'while');
        } if (n === 6 || n === 5) {
            console.log('Suficiente', 'while');
        } if (n === 4 || n === 3 || n === 2 || n === 1) {
            console.log('Suspenso', 'while');
        }
    }
}