let totalAges = 0;
let numberOfStudents = prompt("Enter the number of students:");

for (let i = 0; i < numberOfStudents; i++) {
    let age = parseInt(prompt("Enter age of student " + (i + 1) + ":"));
    totalAges += age;
}

let averageAge = totalAges / numberOfStudents;

console.log("Average age of students: " + averageAge);

//second way
