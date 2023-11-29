//data types

//boolean
let  isDataValid  =  true;
 let  isStringTooLong  =  false;
 let  isGameOver  =  false;
 continueLoop  =  true;

 console.log(false);  //  ->  false
 console.log(typeof  false);  //  ->  boolean
 console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean

//numbers
 const  year  =  1991;
 let  delayInSeconds  =  0.00016;
 let  area  =  (16  *  3.14);
 let  halfArea  =  area  /  2;
   
 console.log(year);  //  ->  1991;
 console.log(typeof  year);  //  ->  number;
 console.log(typeof delayInSeconds);

 let  a  =  10;  //  decimal  -  default  
 let  b  =  0x10;  //  hexadecimal  
 let  c  =  0o10;  //  octal  
 let  d  =  0b10;  //  binary  
  
 console.log(a);  //  ->  10  
 console.log(b);  //  ->  16  
 console.log(c);  //  ->  8  
 console.log(d);  //  ->  2  

 let  x  =  9e3;
 let  y  =  123e-5;
 console.log(x);  //  ->  9000
 console.log(y);  //  ->  0.00123


//special values
 let  v =  1  /  0;
 let   u  =  -Infinity;
   
 console.log(v);  //  ->  Infinity
 console.log(u);  //  ->  -Infinity
 console.log(typeof  a);  //  ->  number
 console.log(typeof  b);  //  ->  number
  
 let  s  =  "it's  definitely  not  a  number";
 let  n  =  s  *  10;
 console.log(n);  //  ->  NaN
 console.log(typeof  n);  //  ->  number

 //bigInt
 let  big  =  1234567890000000000000n;
 let  big2  =  1n;
  
 console.log(big);  //  ->  1234567890000000000000n
 console.log(typeof  big);  //  ->  bigint
   
 console.log(big2);  //  ->  1n
console.log(25n  /  4n);  //  ->  1n
console.log(typeof big2);