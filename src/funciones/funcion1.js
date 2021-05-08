//Rallada
function double(n, f) {
    return f(n);
}
console.log(double(10, (n) => 2 * n));



//Version facil
function double1(n) {
    return n * 2
}
console.log(double1(100));

//Version arrow
func1 = (n => 2 * n);
console.log(func1(120));
