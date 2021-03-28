function fib(n) {
    let a = 0;
    let b = 1;
    do {
        console.log(a);
        let numerotemp = a;
        a = b;
        b = numerotemp + b;
    } while (a < n);
}
console.log(fib(n = 1000));


console.log('Hola');
//Version con while-loop
function fibw(n) {
    let a = 0;
    let b = 1;
    while (a < n) {
        console.log(a + ' ');
        let numtemp = a;
        a = b;
        b = numtemp + b;
    }
}
console.log(fibw(n = 1000));

console.log('hOLA ');
//Version arrow function
fibonacci = (n => {
    let a = 0;
    let b = 1;
    while (a < n) {
        console.log(a);
        let num = a;
        a = b;
        b = num + b;
    }
});
console.log(fibonacci(1000));

