// let age = prompt("enter age: ");
function checkAge (age){
    if (age<18){
        console.log("You are still young");
    }
    else if(age == 18){
        console.log("Welcome to the site");
    }
    else{
        console.log("You are above average");
    }
}
let myAge = 18;
checkAge(myAge);