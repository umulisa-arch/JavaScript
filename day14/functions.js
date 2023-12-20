function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}
function modulus(a,b){
    return a%b;
}
function workOut(operation,num1,num2){
    return operation(num1,num2);
   
}
console.log("Additon: ",workOut(add, 12, 20));
console.log("Subtraction: ",workOut(subtract, 30, 100));
console.log("Multiplication: ",workOut(multiply, 20, 8));
console.log("Division: ",workOut(divide, 53, 8));
console.log("Remainder: ",workOut(modulus, 9, 8));
