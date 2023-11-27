 //block programs
 
let  height  =  180;
 {
          let  weight  =  70;
          console.log(height);  //  ->  180
          console.log(weight);  //  ->  70    
 }
 console.log(height);  //  ->  180
//console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
 let age = 12;
 console.log(age);

 //var will make variable declared in block to be used globally
 var  mass  =  180;
{
        var  weight  =  70;
          console.log(mass);  //  ->  180
          console.log(weight);  //  ->  70    
 }
 console.log(mass);  //  ->  180
 console.log(weight);  //  ->  70