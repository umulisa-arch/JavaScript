 let user1 = {
         name: "Calvin",
         surname: "Hart",
         age: 66,
         email: "CalvinMHart@teleworm.us"
     };
        
     let user2 = {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
         email: "MateusPinto@dayrep.com"
     };

    console.log(user1.name); // -> Calvin
 console.log(user2.name); // -> Mateus
    
 console.log(user1.age); // -> 66
 user1.age = 67;
 console.log(user1.age); // -> 67
   
 console.log(user2.phone); // -> undefined
 user2.phone = "904-399-7557";
 console.log(user2.phone); // -> 904-399-7557


 //array
 let animals = [];
  console.log(animals[0]); // -> undefined
    
  animals[0] = "dog";
  animals[2] = "cat";
    
  console.log(animals[0]); // -> dog
  console.log(animals[1]); // -> undefined
  console.log(animals[2]); // -> cat

  //array with object
  let users =[
       {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
        },
        {
        name: "Mateus",
         surname: "Pinto",
         age: 21,
         email: "MateusPinto@dayrep.com"
         }
     ];
       
     console.log(users[0].name); // -> Calvin
     console.log(users[1].age); // -> 21

     //instanceof operator
     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 let day = "Sunday";
   
 console.log(typeof days); // -> object
 console.log(typeof day); // -> string
   
 console.log(days instanceof Array); // -> true
 console.log(day instanceof Array); // -> false
//length
 let names = ["Olivia", "Emma", "Mateo", "Samuel"];
 console.log(names.length);
 console.log(names.indexOf("Emma")); // -> 4

 "use  strict";  
  //quiz 
 const  prefix  =  "username_";  
   
 let  userName  =  "Jack";  
 //const  userName  =  "Adam";  
   
 let  prefixedUserName;  
 //const  prefixedUserName;  
   
 userName  =  "John";  
 prefixedUserName  =  prefix  +  userName;     
 //console.log(prefixedUserName  +  prefixedUserName2);  
//console.log(prefixedUserName2);