# JavaScript Conditional Statements Assignment

**Topic:** JavaScript Conditional Statements

**Objective:** Understand decision-making using `if`, `else`, `else if`, comparison operators, and logical operators.

---

## Section 1: Programming Questions

### Question 1: Find Maximum Between Three Numbers

**Code:**
```javascript
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
```

**Output:**
```text
Maximum number is: 45
```

**Explanation:** The program compares three numbers using `if`, `else if`, and `else` to find the maximum value.

### Question 2: Check Leap Year

**Code:**
```javascript
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
```

**Output:**
```text
2024 is a Leap Year
```

**Explanation:** A year is a leap year if it is divisible by 400, or divisible by 4 but not by 100.

### Question 3: Check Even or Odd

**Code:**
```javascript
let number = 17;

if (number % 2 === 0) {
    console.log(number, "is Even");
} else {
    console.log(number, "is Odd");
}
```

**Output:**
```text
17 is Odd
```

**Explanation:** The modulus operator `%` checks the remainder after division by 2. A remainder of 0 means even; otherwise, the number is odd.

### Question 4: Check Alphabet, Digit or Special Character

**Code:**
```javascript
let character = "A";

if ((character >= "A" && character <= "Z") ||
    (character >= "a" && character <= "z")) {
    console.log(character, "is an Alphabet");
} else if (character >= "0" && character <= "9") {
    console.log(character, "is a Digit");
} else {
    console.log(character, "is a Special Character");
}
```

**Output:**
```text
A is an Alphabet
```

**Explanation:** The program checks whether the character falls within uppercase or lowercase alphabet ranges, digit range, or neither.

### Question 5: Check Valid Triangle

**Code:**
```javascript
let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 > 0 && angle2 > 0 && angle3 > 0 &&
    angle1 + angle2 + angle3 === 180) {
    console.log("The angles form a Valid Triangle");
} else {
    console.log("The angles do not form a Valid Triangle");
}
```

**Output:**
```text
The angles form a Valid Triangle
```

**Explanation:** Three positive interior angles form a valid triangle when their sum is exactly 180 degrees.

---

## Conclusion

Completed all five JavaScript conditional statement programs and tested them using Node.js.