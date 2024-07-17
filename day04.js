// Activity 1
for (let i = 1;i<=10; i++){
    console.log(i);
}

console.log(`table of 5 is:`);
for (let j = 1; j <= 10; j++) {
    console.log(j*5);  
}

// Activity 2
sum=0
let i = 1;
while (i <= 10) {
    sum = sum+ i;
    i++
}
console.log(`sum of 1 to 10 is : ` + sum);

let z = 10;
while (z != 0) {
    console.log(z);
    z--;
}

// Acitivity 3
let b = 1;
console.log("do while loop task 1: ");
do {
    console.log(b);
    b++;
} while (b <= 5);


let number = 5;
let factorial = 1;
let a = 1;

do {
    factorial *= a;
    a++;
} while (a <= number);

console.log(`The factorial of ${number} is ${factorial}`);

// Acitivity 4
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Acitivity 5
console.log("task 8");
for (let c = 1; c <= 10; c++) {
    if (c === 5) {
        continue;
    }
    console.log(c);
}

console.log("task 9");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
