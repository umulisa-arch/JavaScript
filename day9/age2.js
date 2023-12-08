let totalAges = 0;
let numberOfStudents = parseInt(prompt("Enter the number of students:"));

if (isNaN(numberOfStudents)) {
    console.log("You entered a wrong value for the number of students.");
} else {
    for (let i = 0; i < numberOfStudents; i++) {
        let age = parseInt(prompt("Enter age of student " + (i + 1) + ":"));
        if (isNaN(age)) {
            console.log("You entered a wrong value for the age of student " + (i + 1) + ".");
            break;
        }
        totalAges += age;
    }

    if (totalAges !== 0) {
        let averageAge = totalAges / numberOfStudents;
        console.log("Average age of students: " + averageAge);
    }
}
