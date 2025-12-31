// const fs = require('fs')
// since we are adding type: module in package.json

import * as fs from 'node:fs';

// console.log(fs);

console.log("starting");
// fs.writeFileSync("akash.txt", "Akash is not a bad boy")
// it will wait untill write finishes then the below code executes
// to overcome this, if we want to do something as soon the write starts then we can use
fs.writeFile("akash2.txt", "Akash is not a good boy", () => {
    console.log("done");
    fs.readFile("akash2.txt", (error, data) => {
        // console.log(error, data);
        console.log(error, data.toString());
        // error --> null
        // data --> "<Buffer 41 6b 61 73 68 20 69 73 20 6e 6f 74 20 61 20 67 6f 6f 64 20 62 6f 79>"
        // data.toString() --> is must to read data in string format
    })
})  // this is scheduled for end

fs.appendFile("akash.txt", "\nusing append", (e,d) => {
    console.log(e, d);
})
console.log("ending");
// so output will be starting > ending > done

// Difference between writeFIle and appendFile
// ----- writeFile ---> erases everything and then erites again
// ----- appendFile ---> adds/appends after every new line