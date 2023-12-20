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
function workOut(operator,num1,num2){
    return operator(num1,num2);
   
}
console.log("Additon: ",workOut(add, 12, 20));
console.log("Subtraction: ",workOut(subtract, 30, 100));
console.log("Multiplication: ",workOut(multiply, 20, 8));
console.log("Division: ",workOut(divide, 20, 8));
console.log("Remainder: ",workOut(modulus, 20, 8));
