function computeFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

let userInput = prompt("Enter a number to compute its factorial:");
let number = parseInt(userInput);

if (!isNaN(number) && number >= 0) {
    let result = computeFactorial(number);
    console.log(`The factorial of ${number} is: ${result}`);
} else {
    console.log("Please enter a valid non-negative number.");
}
