console.log("This is Strings tutorial");

let a = "Akash"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);  // this will be undefined

console.log("Array length ", a.length);

console.log("har\"".length); // 🔥4 (as  h  a  r  \")
console.log("har\""); // 🔥output har"

console.log(a.includes("ka"));
console.log(a.startsWith("Ak"));
console.log(a.endsWith("Sh"));  // 🔥Case sensitive

let hisName = "Akash"
let friend = "Harry"

console.log("His name is " + hisName + " and his friend's name is " + friend); // manually have to add space
console.log("His name is", hisName, "and his friend's name is", friend);    // adds space automatically after each part

// 🔥Template literals⬇️ --- using `backtics`

// 🔥 String Interpolation --- inserting variables using ${}
console.log(`His name is ${hisName} and his friend's name is ${friend}`);   // more convinience

console.log(`Heyy this is how we can now use "Double Quotes" inside a string variable`);

// 1
// let myName = "Harry"
// myName.length // output 5

// 2
// let myName = "Harry"
// myName.toUpperCase() // output HARRY

// 3
// let myName = "Harry"
// myName.toLowerCase() // output harry

// 4
// let myName = "Harry" // 0 1 2 3 4
// myName.slice(1, 4) // output arr (from 1 to 4, but 4 not included)

// 5 
// let myName = "Harry" // 0 1 2 3 4
// myName.slice(2) // output rry (from 2 to end,including the end)

// 6
// let myName = "Harry Bhai"
// let newName = myName.replace("Bhai", "Bhau")
// console.log(newName);

// 7
// let name1 = "Harry"
// let name2 = "Akash"
// let name3 = name1.concat(name2, "other names too...") // no space
// console.log(name3);

// 8
// let myName = "    Harr y  "
// let newName = myName.trim() // Removes Whitespaces (only side spaces)
// console.log(newName);

