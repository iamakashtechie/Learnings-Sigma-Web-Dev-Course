/*  Create a Faulty Calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
    + ---> -
    * ---> +
    - ---> /
    / ---> **
    
    but only 10% of times
*/

// 🔥⭐🔥
// let a = parseInt(prompt("Enter number 1"))
// let b = parseInt(prompt("Enter number 2"))

// let c = a+b;
// let d = typeof c;
// alert(d)

// let sum = a+b
// alert(`Sum of ${a} and ${b} is ${sum}`);


let random = Math.random()  // Generates output between 0 to 1
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) { // greater that 10%
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}