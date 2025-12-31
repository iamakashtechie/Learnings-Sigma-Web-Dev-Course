console.log("Hello, Welcome to JavaScript Loops");

/*
⭐Types pf loops in JS

for loop --- loop a block of code number of times

for in loop --- loops through the keys of an object

for of loop --- loops through the values of an object

while loop --- loops a block based on a specific condition

do while loop --- while loop variant which runs atlease once
*/

//⭐ for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//⭐ array.forEach(element => {
    
// });

//⭐ for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

//⭐ for (const iterator of object) {
    
// }

//⭐ while (condition) {
    
// }

//⭐ do {
    
// } while (condition);

// ----------------------------------------------------------------------------------------------------------------

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Akash",
    role: "Programmer",
    job: "Student"
}

// used for Objects
for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
}

// used for Arrays
for (const c of "Akash") {
    console.log(c);
}

// ⭐
let i = 2;
while (i < 6) {
    console.log(i);
    i++;
}

// ⭐
let p = 12;
do {
    console.log(p);
    p++;
} while (p < 6);

