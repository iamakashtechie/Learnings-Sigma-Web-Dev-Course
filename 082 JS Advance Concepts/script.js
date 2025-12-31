// 🔥🔥🔥 Concept of IIFE (Immediately Invoked Function Expression)
// U S E ---> Sometimes when we use "await" and don't want to wrap it in any "async" function
//       and want the code to execute immediately we use IIFE
//       ---> another uses --- used to avoid polluting the global namespace, etc...
// SYNTAX --->
//  (function() {
//      ...
//  })

const sleep = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }, 1000);
    })
}

(async function main() { 
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b);
})()

// 🔥🔥🔥Destructuring
let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]
// rest is just a variable, any other word can also be used instead of rest
console.log(x, y, rest) // x=1, y=5, rest=[7, 8, 9, 10]
// the ...rest will make a new array out of the remaining part
console.log(typeof rest); // object
// ----- Similarly we can also do for OBJECTS -----
let obj = {
        a: 1, 
        b: 2,
        c: 3
}

let {a, b } = obj
console.log(a, b)

function sum (a, b, c) {
    return a+b+c
}

// 🔥🔥🔥Spread Operator🔥🔥🔥
let arr = [1, 2, 3]
// console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));   // ... Spread Operator

// 🔥🔥🔥Array ---> Object
const arry = [1, 7, 11]
const obje = {...arry} // mapps ---> index : value
console.log(obje);  // Output ---> {0:1, 1:7, 2:11}

// 🔥🔥🔥Storing multiple variables in an Object
const p = "yes", q = "no"
const s = 7, t = 8
const r = {p, q, s, t}  // Output ---> {p: 'yes', q: 'no', s: 7, t: 8}
console.log(r)

// 🔥🔥🔥Hoisting🔥🔥🔥
// Hoisting refers to the process whereby thr interpreter appears to move thr declarations
// to the top of the code before execution
// 🔥It is only applicable in case of "var" and not in case of "let" and "const"

function any() {
    // some code
    // some other code
    console.log(a1)
    // some code
    // some other code
    // some code
    
    var a1 = 6
}

// the output of the above code will be "undefined" as  E X P L A N A T I O N⬇️
// as by default JS engine assumes that the "var" is declared at the beginning of its code block
// function any() {
//     var a1
//     // no value🔥
//     // some code
//     // some other code
//     console.log(a1)
//     // some code
//     // some other code
//     // some code
    
//     var a1 = 6
// }

// 🔥🔥Variables can thus be referenced before they are declared in JavaScript

// This will work⬇️ but only if you haven't made the function with "const"🔥🔥🔥
/* hello("Akash")
    function hello(name) {
        ...
    }*/

// 🔥🔥🔥I M P O R T A N T🔥🔥🔥
// JavaScript only hoists declarations, not initializations. The variable will be undefined
// untill the line where it is initialized is reached

// 🔥🔥Function express and class expressions are not hoisted