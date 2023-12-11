let temp;
let sum;
let meanTemp = 0;
function getmeanTemp(){
    sum = 0;
    for(let i = 0;i<temp.length;i++){
        sum+=temp[i];
    }
    meanTemp = sum/temp.length;
}
temp = [12, 13, 40, 52];
getmeanTemp();
console.log(`Mean temp: ${meanTemp}`);