function fib(n) {
    console.log(n + ' Calculando fibonacci');
    ');
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(10));


//arrow function

fibn = (n => {
    if (n <= 1) {
        return n;
    } else {
        return fibn(n - 1) + fibn(n - 2);
    }
});

//console.log(fibn(10));