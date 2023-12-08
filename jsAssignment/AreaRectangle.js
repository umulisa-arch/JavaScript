//Area of Rectangle
let length = parseFloat(prompt("Enter the length:"));
let width = parseFloat(prompt("Enter the width:"));

if (!isNaN(length) && !isNaN(width)) {
    let Area = width*length;
    
    console.log("Area of Rectangle: " , Area);
} else {
    console.log("Please enter valid value of width and length.");
}
