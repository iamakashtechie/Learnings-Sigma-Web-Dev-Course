// let a = prompt("Enter number 1")
// let b = prompt("Enter number 2")

// // let sum = a+b // E R R O R ---> as a and b will not be considered as a number
// let sum = parseInt(a) + parseInt(b)
// alert(`Sum of ${a} and ${b} is ${sum}`)

let a = prompt("Enter first number");

let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry, this is not allowed (C U S T O M)");
  // 🔥🔥throwing Custom Errors
  // there are other keywords also to use instead of SyntaxError
  // check JS MDN
}

let sum = parseInt(a) + parseInt(b);

function main() {
  // let x = 1;
  try {
    alert(`The sum is ${sum * x}`);
    console.log("S U C C E S S");
    // 🔥🔥this will give E R R O R because "x" is not defined and it will be catch
    return true;
  } catch (error) {
    console.log("Error aa gaya bhai");
    console.log("Error name", error.name);
    console.log("Error message", error.message);
    console.log("Error stack", error.stack);
    return false;
  } finally {
    console.log("files are being closed and db connection is being closed");
  }
  // 🔥🔥finally is usefull "When we want to get some code run in/after both try...and catch..."
  // but this can also be done by writing the code without finall, the code will also run after any of try...catch...
  // BUT noooo ⭐, there is a problem that if this try...catch is in any function then and after return in any function
  // the code after it doesn't executes, that's why finally is used ⭐⭐⭐JS Important Question⭐⭐⭐
  //  E X A M P L E below⬇️⬇️⬇️
  /*
    function main(){ 
    try {
        // some code
        return something
    } catch {
        // some code
        return something
    }
    // some code but will not execute as the function has already returned something
    */
}

let c = main();

// -------------------------------------------------------------------------------------------------------------
// # try catch🔥🔥🔥
// 1. first the code in try is executed
// 2. If there is no error, catch is ignored else catch is executed

//     ## try catch works synchronously
//          If an exxception happens in sheduled code, like setTimeout, then try catch wont catch it
//          Script dies and catch wont work
//     try {
//         setTimeout(function () {
//             // error code
//         })
//     } catch...
//        ### That's because the function itself is executed later,
//        when the engine has already left the try...catch construct

//     ## The error object🔥🔥
//         For all the built in errors, the error object has two main properties:
//         try { // some code }
//         catch (err) {
//             alert(err.name)
//             alert(err.message)
//             alert(err.stack)
//         }
