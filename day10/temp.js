let temp;
let sum;
let meanTemp = 0;
function getmeanTemp(temp){
    sum = 0;
    for(let i = 0;i<temp.length;i++){
        sum+=temp[i];
    }
    meanTemp = sum/temp.length;
}
getmeanTemp([12, 13, 40, 52]);
console.log(`Mean temp: ${meanTemp}`);// ` means back tick