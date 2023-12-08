//functions call and declaration
let Age;
 let sum;
 let meanAge;
 function getmeanAge() {
     sum = 0;
     for (let i = 0; i < Age.length; i++) {
      sum += Age[i];
     }
     meanAge = sum / Age.length;
 }
 Age = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
 getmeanAge();
 console.log("Mean1: ", meanAge); // -> mean: 16.666666666666668


 // calling function before declaration
 let name ="Aimee";
 showName();
 function showName(){
    console.log(name);
 }