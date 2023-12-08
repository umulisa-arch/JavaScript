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

let userInput = parseInt(prompt("Enter a number:"));

if (isNaN(userInput)) {
    console.log("You entered a non-numeric value.");
} else {
    if (isPrime(userInput)) {
        console.log(userInput + " is a prime number.");
    } else {
        console.log(userInput + " is not a prime number.");
    }
}
