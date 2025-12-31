let arr = [1, 8, 3, 9, 7];

// console.log(arr);
// console.log(arr.length);

// 🔥Arrays are Mutable, it can be changed
// Strings are immutable, but arrays are
// arr[2] = 0
// console.log(arr);
// console.log(typeof arr);  // object

// console.log(arr.toString());
// console.log(arr.join(" and "));
// console.log(arr.pop()); // 🔥returns the popped element of an array && alters the original array
// console.log(arr); // now the last element was removed

// console.log(arr.push(100)); // 🔥returns the new array length && alters the original array
// console.log(arr); // now the new element is added
// console.log(arr.push("Akash")); // similarly
// console.log(arr);

// console.log(arr.shift()); // 🔥(Similar to pop) removes the element from starting
// console.log(arr);

// console.log(arr.unshift(100)); // 🔥(Similar to push) returns the new array length && adds a new element from start
// console.log(arr);

// console.log(delete arr[4]); // 🔥delete is an operator, all above were functions
//                             // returns true
// console.log(arr); // 🔥memory will still be allocated for the deleted index but only the value will be deleted
                    // 🔥the deleted value when printed will give output "undefined"

// let a1 = [1, 2, 3,]
// let a2 = [4, 5, 6,]
// let a3 = [7, 8, 9,]

// // console.log(a1 + a2 + a3); // output 1,2,34,5,67,8,9
// let a4 = a1.concat(a2, a3)  // 🔥returns a new array, doesn't change existing array
// console.log(a4);

// let a = [7, 9, "Akash", 8]
// console.log(a.sort());

// let a = [1, 2, 3, 4, 5]
// // 🔥array.splice(position to add, No. of elements to remove, elements to be added...)
// console.log(a.splice(2, 2, "Akash", 24));    // 🔥returns the removed element
// console.log(a);


// let a = [1, 2, 3, 4, 5]
// let b = [0, 1, 2, 3, 4]
// console.log(a.slice(3)); // 🔥 Slices out a piece from an array (creates a new array)
// console.log(b.slice(1,4)); // 🔥 excluding the end element
// // 🔥As it creates new array, so the existing array is unaltered
// console.log(a);
// console.log(b);

// let a = [1, 2, 3, 4, 5]
// console.log(a.reverse()); // 🔥reverses an array

// --------------------------------------------------------------------------------------------------------

let a = [1, 2, 5, 6, 8]

// for (let index = 0; index  < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// array.forEach(element => {
    
// });

// a.forEach((value, index, array) => {
//     arr[index] = value
//     console.log(array[index]);
// })

// a.forEach((value, index, array) => {    // arguments passed
//     console.log(value, index, array);
// })

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// for (const key in obj) {  // 🔥for in Object
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

// for (const key in a) {  // 🔥for in Array
//     if (Object.hasOwnProperty.call(a, key)) {
//         const element = a[key];
//         console.log(key, element);  // key == index && element == element
//     }
// }

// for (const iterator of a) {  // 🔥🔥iterator or value pr element
//     console.log(iterator);
// }


// 🔥map() ---> Creates a new array by performing some operation on each array element
// map filter reduce

// let newArr = a.map((value, index, array) => {
//     return value*value   
// })

// let newArr = a.map((e) => {
//     return e**2
// })
// console.log(newArr);

// const greaterThanFive = ((e) => {
//     if(e>5)
//         return true
//     return false
// })
// console.log(a.filter(greaterThanFive));

// 🔥Direct use of above without using any variable
// console.log(a.filter((e) => {
//     if(e>5)
//         return true
//     return false
// }));

// const redu = (a, b)=> {
//     return a*b
// }
// console.log(a.reduce(redu));    // output ---> (((1*2)*5)*6)*8

console.log(Array.from("Akash")) // 🔥Converting string elements into Array elements