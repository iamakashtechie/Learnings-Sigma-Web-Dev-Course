// function getData() {
//     return new Promise((resolve, reject) => {
//     // Simulate getting data from a server
//         setTimeout(() => {
//             resolve(455);  // random value
//         }, 3500);
//     })
// }

// console.log("Loading modules");
// console.log("Do something else");
// console.log("Load data");
// let data = getData()
// As we know getData() will take some time to load data, so it will return a promise⬆️
// console.log(data);
// console.log("Process data");

// In asynchronous JS, meanwhile the getData() brings data, the below tasks executes marking
// the getData() promise return as pending
// But if we want to control that the below code does't execute untill the getData() promise executes completely 
// So, basically we want to control our asynchronous javascript
// For that purpose we will use Async/Await

// after ------ I will write the code again using Async/Await

// console.log("another task");

// -------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥Actually one method of doing such is using Promise.then
// data.then((v) => {
//     console.log(data);
//     console.log("Process data");
//     console.log("another task");
// })


// -------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥🔥🔥Async/Await🔥🔥🔥🔥🔥

async function getData() {  // ⭐This will make the Async function run in background
    // Simulate getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);  // random value
        }, 3500);
    })
}

async function wrap() {
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load data");
    
    let data = await getData()
    // await is only valid in async functions and the top level bodies of modules
    // that's why we made a async wrap() function
    // 🔥 there are other ways too to use "await" outside of an async function
    // we will learn later 
    console.log(data);
    
    console.log("Process data");
    console.log("another task");
}

wrap()

// -------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥Fetch API & Async/Await🔥🔥🔥

// async function getData() {
//     let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");  // connect to internet for this
//     let data = await x.json();
//     // let data = await x.text();
//     // for Fetch API we have to use "await" twice,
//     // one for fetch and another to parse in like - json
//     console.log(x);
//     console.log(data);
// }

// async function wrap() {
//     console.log("Loading modules");
//     console.log("Do something else");
//     console.log("Load data");
    
//     let data = await getData()
//     // if we do not use await here, then it will only return promise in the console
//     // as it will not be waiting to get data
//     console.log(data);
    
//     console.log("Process data");
//     console.log("another task");
// }

// wrap()

// 🔴Notes -------------------------------------------------------------------------------------------------------
//  # Async/Await:
//      An async function always returns a promise.
//      Other values are wrapped inn a promise automatically
//  ## Example:
    // async function akash() {
    //     return 7;
    // }

    // akash().then(alert("Done"))
//  The await keyboard makes JS wait untill the promise settles and returns its value
//  It's just a more elegant syntax of getting the promise result than promise.then()
//  plus (+) it's easier to read and write

//  # Error Handling
//  ## try catch and finally 
//  (P E N D I N G)🔴🔴🔴🔴🔴
//  next video