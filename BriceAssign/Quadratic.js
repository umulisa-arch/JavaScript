let delta = 0;
let x1;
let x2;
let a = Number(prompt("enter value of a"));
let b = Number(prompt("enter value of b"));
let c = Number(prompt("enter value of c"));
delta = b*b - 4*a*c;
alert("delta is: "+ delta)
x1 = (-b+Math.sqrt(delta))/2*a;
alert("Your value on is: "+ x1);
x2= (-b-Math.sqrt(delta))/2*a;
alert("The second value is: "+ x2);