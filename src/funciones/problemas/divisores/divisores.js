function divisores(n) {
    for (let i = 1; i <= n / 2 + 1; i++) {
        if (n % i === 0) {
            return i;
        }
    }
    return n;
}
console.log(divisores(10));