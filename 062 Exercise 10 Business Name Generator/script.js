/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
------------------------------------------------------------------------------------------------------------------------------
*/

// let first, second, third;

// // selecting the first word
// let rand = Math.random()
// if (rand < 0.33) {
//     first = "Crazy"
// } else if (rand >= 0.33 && rand < 0.66) {
//     first = "Amazing"
// } else {
//     first = "Fire"
// }

// // selecting the second word
// rand = Math.random()
// if (rand < 0.33) {
//     second = "Engine"
// } else if (rand >= 0.33 && rand < 0.66) {
//     second = "Foods"
// } else {
//     second = "Garments"
// }

// // selecting the third word
// rand = Math.random()
// if (rand < 0.33) {
//     third = "Bros"
// } else if (rand >= 0.33 && rand < 0.66) {
//     third = "Limited"
// } else {
//     third = "Hub"
// }

// console.log(`--------Business Name Generator-------\n`);
// console.log(first, second, third);

//----------------------------------------------------------------------------------------------------------------------------
// Method 2🔥🔥🔥

let obj1 = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let obj2 = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}

let obj3 = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

var ran1 = Math.floor(Math.random() * 3) + 1
var ran2 = Math.floor(Math.random() * 3) + 1
var ran3 = Math.floor(Math.random() * 3) + 1

console.log(`${obj1[ran1]} ${obj2[ran2]} ${obj3[ran3]}`);