let balance = 0;
let deposit;
let withdraw;
deposit = Number(prompt("Enter your deposit"));
balance+=deposit;
console.log(" Your current balance: ", balance);
withdraw =  Number(prompt("Enter amount you want to withdraw: "));
if(withdraw>balance){
    alert("Insufficient balance!!");
}
else{
    balance-=withdraw;
    console.log("Withdraw successfuly done, your new balance is : ", balance);
}