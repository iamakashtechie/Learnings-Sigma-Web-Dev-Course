const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))    // middeleware to serve static files

// Types of Requests (most common) ---> GET, POST, PUT, DELETE

// GET ---> Retrieve data from the server. (default method)
// POST ---> Send data to the server to create a new resource. (sensitive information)
// PUT ---> Update an existing resource on the server. (idempotent) 
            // (idempotent means if you send the same request multiple times, the result will be the same)
// DELETE ---> Delete a resource from the server. (idempotent)

// Other Methods --->

// PATCH ---> Partially update a resource on the server.
// HEAD ---> Similar to GET, but only retrieves the headers, not the body.
// OPTIONS ---> Retrieve the communication options for the target resource.
// CONNECT ---> Establish a tunnel to the server identified by the target resource.

// Example of GET request (we already know) --- default method
app.get('/', (req, res) => {
  console.log(req.method) // OUTPUT ---> GET
  res.send('Hello from GET request')
})
// there is also some limit in GET request, you can't send large amount of data using GET request.

// Suppose you want to send sensitive information like passwords, then if you use search query parameters, 
// it will be visible in the URL. So, you can use POST request to send data to the server.

// Example of POST request
app.post('/', (req, res) => {
  console.log(req.method) // OUTPUT ---> POST
  res.send('Hello from POST request')
})

// Example of PUT request
app.put('/', (req, res) => {
  console.log(req.method) // OUTPUT ---> PUT
  res.send('Hello from PUT request')
})

// Example of DELETE request
app.delete('/', (req, res) => {
  console.log(req.method) // OUTPUT ---> DELETE
  res.send('Hello from DELETE request')
})

// ⭐CHAINING OF REQUESTS --- we can chain multiple methods on the same route
// Example of GET, POST, PUT and DELETE request on the same route
// app.get('/', (req, res) => { 
//   // ---
// }).post('/', (req, res) => {
//   // ---
// }).put('/', (req, res) => {
//   // ---
// }).delete('/', (req, res) => {
//   // ---
// })

// ⭐⭐⭐Serving HTML files
// first create a folder named 'templates' and create a file named 'index.html' inside it.
app.get('/index', (req, res) => {    // making it to /index ---> endpoint
  // res.sendFile(__dirname + '/templates/index.html')
  console.log("Hey it's index.html");
  // res.send('Hello from GET request serving HTML file');    // sending the text message
  // res.sendFile('/templates/index.html')    // this will give error coz it's not able to find the file
  // Path must be absolute or specify root to res.sendFile
  // __dirname is a global object that represents the current directory of the file.
  // sending the HTML file
  // res.sendFile('/templates/index.html' + __dirname)    // specifies absolute path
  res.sendFile('/templates', {root: __dirname})    // we can also specify root directory 
})

// ⭐⭐⭐Serving JSON data
app.get('/data', (req, res) => {
  res.json({name: 'John', age: 30, city: 'New York'})
  // res.send({name: 'John', age: 30, city: 'New York'})    // it will also work
  // res.json() ---> method converts the object to JSON format and sends it to the client.
  // res.send() ---> method sends the object as it is to the client.
  // JSON.stringify() ---> method can also be used to convert the object to JSON format.
  // res.send(JSON.stringify({name: 'John', age: 30, city: 'New York'}))

  // res.redirect('https://iamakashtechie.vercel.app')    // redirect to the specified URL
  
  // res.download('./Agenda.md') // download the file
})

// ⭐**Method**           -------> **Description**
// res.download()	  -------> Prompt a file to be downloaded.
// res.end()	      -------> End the response process.
// res.json()	      -------> Send a JSON response.
// res.jsonp()	    -------> Send a JSON response with JSONP support.
// res.redirect()	  -------> Redirect a request.
// res.render()	    -------> Render a view template.
// res.send()	      -------> Send a response of various types.
// res.sendFile()	  -------> Send a file as an octet stream.
// res.sendStatus()	-------> Set the response status code and send its string representation as the response body.

// ⭐⭐⭐ Express Router
// Suppose we want to add a BLOG in this website but if we start writing the code here then there will be lots of clutter.
// So, we can use Express Router to keep the code clean and organized.
// Create a folder named 'routes' and create a file named 'blog.js' inside it.

const blog = require('./routes/blog')   // importing the blog route
// better to use these require() statements at the top of the file
app.use('/blog', blog)    // using the blog route
// URL: http://localhost:3000/blog/post/hello-world
// OUTPUT ---> fetch the blog post for hello-world

// OR
// app.use('/blog', require('./routes/blog'))    // one liner

// ----------------AB RAITAA NAHI FAILEGA----------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})