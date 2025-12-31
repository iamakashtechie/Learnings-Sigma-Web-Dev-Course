// 🔥🔥🔥We're going to learn about the asynchronous nature of JavaScript

console.log("Harry is a hacker");   // 🔴1
console.log("Akash is a hecker");   // 🔴2

setTimeout(() => {  // 🔴3     ---    Asynchronous function
    console.log("I am inside setTimeout");
}, 2000);

setTimeout(() => {  // 🔴4     ---    Asynchronous function
    console.log("I am inside setTimeout 2");
}, 0);

console.log("The End"); // 🔴5

// expected output ---> 1 > 2 > 3 > 4 > 5
// actual output ---> 1 > 2 > 5 > 4 > 3
// 🔥evenIf the timeout delay(value) == 0 (it will be executed at last)

// ----------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥Callback function ---> A callback function is a function passed into another function
//  as an argument, which is then invoked inside the outer function to complete an action

// const fn = () => {
//     console.log("Nothing...");
// }

// const callback = (arg, fn) => {
//     console.log(arg);
//     fn()
// }

// const loadScript = (src, callback) => {
//     let sc =  document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("Akash", fn)
//     document.body.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
// ----------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥Here is an example of a callback

function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error("failed"))
    document.head.append(script)
}
// Now we can do something like this:
// 🔥🔥🔥We can handle callback errors by supplying error argument like this:
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", function (error, script) {
    // console.log(script.src);
    if(error) {
        console.log("Error!, Script not loaded...");
    } else {
        console.log("Script is loaded...");
    }
})

// 🔥🔥🔥(Pyramid of Doom) or (Callback hell) When we have callback inside callback, the code gets difficult to manage

// 🔥The solution of the callback hell is promises.
// For more info go to promise.js file