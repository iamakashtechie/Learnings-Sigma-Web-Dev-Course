// Write a program to calculate the factorial of a number using reduce and for loop
// --------------------------------------------------------------------------------
// Method 01 🔥 Using normal for loop

// let fact = 1
// let b = prompt("Enter the number")
// let a = parseInt(b)

// if (a != 0) {
//     for (let i = 1; i <= a; i++) {
//         fact *= i   // fact = fact * i
//     }
    
//     console.log(fact)
//     alert(`Factorial of ${a} is ${fact}`)
// } else {
//     fact = 1
//     console.log(fact)
//     alert(`Factorial of ${a} is ${fact}`)
// }

// --------------------------------------------------------------------------------
// Method 02 🔥🔥🔥 Using reduce Function

let b = prompt("Enter the number")
let a = parseInt(b)
// // console.log(a, typeof a);
function fact(num) {
    if (a != 0) {
        let arr = Array.from(Array(num + 1).keys()) // 🔥🔥🔥 Creates an array of 0 to num (including)
        console.log(arr.slice(1));
        let c = arr.slice(1).reduce((a, b) => {
            return a*b
        })
        console.log(c)
        alert(`Factorial of ${a} is ${c}`)
    } else {
        c = 1
        console.log(c)
        alert(`Factorial of ${a} is ${c}`)
    }
}
fact(a)