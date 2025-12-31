// const http = require('node:http');
// const fs = require("fs");
// const m = require('./mymodules2.js')


// ⭐⭐⭐ We can import modules using "require" keyword
// this method is called CommonJS method 🔥
// in this method modules are imported synchronously

//-------------------------------------------------------------

// ⭐⭐⭐ But there is a new method which is applicable ES6 onward
// ECHMAScript ES6
// using this we can import modules asynchronously
// to use this we have to add ---> "type": "module", in the package.json file
// but after only adding this our main.js will not work
// so we will use like this

// named import
// import http from 'http'
// import {a, b} from './mymodules1.js'
// default import
// import obj from './mymodules1.js'
import hello from './mymodules1.js'

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
  // res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
  // ---------------------------------------------------
  // res.setHeader('Content-Type', 'text/html');
  // res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// console.log(a, b);
// console.log(obj);
console.log(hello);
// console.log(m);


(function(exports, require, module, __filename, __dirname) {

    // Module code actually lives here
    // that's why we can use "require", "exports", "__dirname"... such keyboards
});