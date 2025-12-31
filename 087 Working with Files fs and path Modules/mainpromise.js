// To prevent callback hell, we use promises in modern JS

// const fs = require("fs/promises")
import fs from 'fs/promises'

let a = await fs.readFile("akash.txt")
console.log(`------------B E F O R E------------\n${a.toString()}`);

let b = await fs.appendFile("akash.txt", "\nthis is a nice promise")
a = await fs.readFile("akash.txt")
console.log(`------------A F T E R------------\n${a.toString()}`);
