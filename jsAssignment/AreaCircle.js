//Area of circle
let radius = parseFloat(prompt("Enter the radius number:"));
const Pi = 3.14;

if (!isNaN(radius) && !isNaN(Pi)) {
    let Area = radius*Pi;
    
    console.log("Area of circle: " , Area);
} else {
    console.log("Please enter value of radius.");
}
