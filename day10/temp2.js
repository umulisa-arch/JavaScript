let temp;
let numT;
let sum;
let meanTemp = 0;
numT = Number(prompt("How many datatemp do you want ? ", numT));
for(i=0;i<numT;i++){
    temp[i]= Number(prompt("Enter temp "+i+":"));
}
function getmeanTemp(){
     sum = 0;
    for(let i = 0;i<temp.length;i++){
        prompt("enter temp: " + i + temp[i]);
        sum+=temp;
    }
    meanTemp = sum/temp.length;
}
getmeanTemp([12, 13, 40, 52]);
console.log(`Mean temp: ${meanTemp}`);// ` means back tick