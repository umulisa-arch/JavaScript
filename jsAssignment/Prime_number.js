function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Prime numbers between 0 and 200:");

for (let i = 0; i <= 200; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
