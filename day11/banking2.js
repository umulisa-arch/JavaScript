let balance = 0;
function deposit(){
    let amount =  Number(prompt("Enter amount to deposit"));
    if(amount > 0){
        balance += amount;
alert("Your balance is: "+balance)
    }
}
deposit();