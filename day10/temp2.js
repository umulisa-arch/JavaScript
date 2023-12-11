let temp = [];
let numT;
let sum;
let meanTemp = 0;
function getTemp(){
numT = Number(prompt("How many datatemp do you want ? ", numT));
for(i=0;i<numT;i++){
    temp[i]= Number(prompt(`Enter temp: ${i}`));
}
}
function getmeanTemp(){
     sum = 0;
    for(let i = 0;i<temp.length;i++){
        sum+=temp[i];
    }
    meanTemp = sum/temp.length;
}
getTemp();
getmeanTemp();
console.log(`Mean temp: ${meanTemp}`);// ` means back tick