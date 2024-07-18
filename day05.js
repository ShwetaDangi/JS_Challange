// Activity 1
//task1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}
checkEvenOdd(10); 

//task2
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(10));




// Activity 2
//task3
const findMax = function(num1, num2) {
    const max = (num1 > num2) ? num1 : num2;
    console.log("The maximum of", num1, "and", num2, "is", max);
};
findMax(10, 20);

//task4
const concatenateStrings = function(string1, string2) {
    console.log(string1 + string2);
};
concatenateStrings("Hello, ", "World!"); 




// Activity 3
//task5
const calculateSum = (num1, num2) => num1 + num2;
console.log(calculateSum(-10, 20)); 

//task6
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("world", "z")); 




// Activity 4
//task7
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 3)); 

//task8
function greet(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Bob", 25)); 





// Activity 5
//task9
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeatFunction(() => console.log("Hello!"), 3); 

//task10
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
const add5 = (x) => x + 5;
const square = (x) => x * x;
console.log(applyFunctions(add5, square, 3));
