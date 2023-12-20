function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function operating(operator,num1,num2){
    return operator(num1,num2);
   
}
operating(add(12,20));
operating(subtract(30,100));
operating(multiply(20,8));
