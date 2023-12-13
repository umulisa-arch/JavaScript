let balance = 0;

function balanceCheck(){
    alert("Your balance is: "+balance);
}
balanceCheck();
function deposit(){
    let amount =  Number(prompt("Enter amount to deposit"));
    if(amount > 0){
        balance += amount;
alert("Deposit amount: "+amount+ " Your balance is: "+balance)
    }
    else{
        
        alert("Invalid input");
    }
}

deposit();

function withdraw(){
    let withdraw =  Number(prompt(" Enter amount to withdraw: "));
    if(withdraw>balance){
        alert("Insufficient balance!!");
    }
    else{
        balance-=withdraw;
        alert("Withdraw amount: "+withdraw+" Your new balance is: " +balance);
    }
}
withdraw();
