// Question 1: Find Maximum Between Three Numbers

let num1 = 25;
let num2 = 45;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
    console.log("Maximum number is:", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("Maximum number is:", num2);
} else {
    console.log("Maximum number is:", num3);
}


// Question 2: Check Leap Year

let year = 2024;

if (year % 400 === 0) {
    console.log(year, "is a Leap Year");
} else if (year % 100 === 0) {
    console.log(year, "is not a Leap Year");
} else if (year % 4 === 0) {
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is not a Leap Year");
}


// Question 3: Check Even or Odd

let number = 17;

if (number % 2 === 0) {
    console.log(number, "is Even");
} else {
    console.log(number, "is Odd");
}



// Question 4: Check Alphabet, Digit or Special Character

let character = "A";

if ((character >= "A" && character <= "Z") ||
    (character >= "a" && character <= "z")) {
    console.log(character, "is an Alphabet");
} else if (character >= "0" && character <= "9") {
    console.log(character, "is a Digit");
} else {
    console.log(character, "is a Special Character");
}


// Question 5: Check Valid Triangle

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 > 0 && angle2 > 0 && angle3 > 0 &&
    angle1 + angle2 + angle3 === 180) {
    console.log("The angles form a Valid Triangle");
} else {
    console.log("The angles do not form a Valid Triangle");
}



