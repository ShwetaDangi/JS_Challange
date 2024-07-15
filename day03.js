// Activity 1
let number =10;
if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

let age = 20;
if (age >= 18) {
    console.log('The person is eligible to vote.');
} else {
    console.log('The person is not eligible to vote.');
}

// Acitivity 2
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`The largest number is ${num1}`);
    } else {
        console.log(`The largest number is ${num3}`);
    }
} else {
    if (num2 >= num3) {
        console.log(`The largest number is ${num2}`);
    } else {
        console.log(`The largest number is ${num3}`);
    }
}

// Acitivity 3
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day number';
}

console.log(`The day is ${dayName}`);

let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(`The grade is ${grade}`);

// Activity 4
let num = 7;
let result = (num % 2 === 0) ? 'even' : 'odd';
console.log(`The number ${num} is ${result}`);

// Activity 5
let year = 2020;
let isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 'a leap year' : 'not a leap year';
console.log(`The year ${year} is ${isLeapYear}`);
