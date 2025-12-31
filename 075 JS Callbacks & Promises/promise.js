// 🔥Introduction to Promises
// The solution to the callback hell is promises. A promise is a "promise of code execution."
// The code either executes or fails, in both the cases the subscriber will be notiified

// The syntax of a Promise looks like this:

// let promise = new Promise((resolve, reject) {   // resolve-reject --> predefined in JS engine
//     // executor
// })

// 🔥calling
// resolve(value) ---> If the job is finished successfully
// reject (error) ---> If the job fails

// 🔥The promise object redurned by the new Promise constructor has these ptoperties

// 1. state: Initially pending, then changes to
//           ---> either "fulfilled" when resolve is called
//           ---> or "rejected" when reject is called

// 2. result: Initially undefined, then changes to
//            ---> value if resolved ---> resolve(value)
//            ---> or error when rejected ---> reject(error)

// 🔥Consumers: then & catch

console.log("This is Promises");
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Akash"); // ⭐we made it resolve() like if the setTimeout() runs then it resolves
    }, 3000);
  }
});

// prom1.then((a) => {    // ⭐what to do when resolve?? ---> calling the return of Promise resolve throught the argumrnt of .then
//     console.log(a);    // prints resolve(value) ---> in this case "Akash"
// })
// if we don't want to get the error like this, we want to catch it. So, for that see below
// comment previous one

prom1
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    // try to not get error in the console
    console.log(err);
  })
  .finally(() => {
    console.log(
      "this block will execute whether the promise is fulfilled or rejected"
    ); // ⭐
  });
// ⭐U S E : Suppose a user lost internet connection or your website crashes then you should use .catch to display "Connection lost" or "Website Under Maintenance"

// ⭐Promisse Chaining (.then handlers) (just know the concept) (let p1, p2, p3, ... are promises)
// p1.then(function(result) => {
//     alert(result);
//     p2.then(function(result2) => {
//         alert(result2);
//         p3.then ...
//     })
// })

// ⭐Attaching Muktiple Handlers (let p is a promise)
// We can attach multiple handlers to one promise
// They don't pass the result to each other, instead they process it independently

// p.then(handler1)
// p.then(handler2)     ---> Runs independently
// p.then(handler3)

// 🔥🔥Promise API ---> there are 6 static modules of Promise class
// 1. Promise.all(promises) ---> Waits for all promises to resolve and returns the array of their results.
//                               if any one fails, it becomes the error & all other results are ignored
// 2. ⭐Promise.allSettled(promises) ---> Waits for all the promises to settle and returnd their results as
//                                      an array of objects with status and value
// 3. Promise.race(promises) ---> Waits for the first promise to settle and its result/error becomes the
//                                outcome
// 4.⭐ Promise.any(promises) ---> Waits for the first promise to fullfill (& not rejected), and its result
//                               becomes the outcome. Throws Aggregate Error if all the promises are rejected
// 5. Promise.resolve(value) ---> Makes a resolved promise with the given value
// 6. Promise.reject(error) ---> Makes a rejected promise with the given error

let p1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 1");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 1");
      resolve("Akash 1");
    }, 1000);
  }
});

let p2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Akash 2");
    }, 1000);
  }
});

let p3 = Promise.all([p1, p2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
