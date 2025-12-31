const express = require('express')
const app = express()
const port = 3000

// ⭐ app.get or app.post or app.put or app.delete arguments ---> ('path', handler)
// app.get('/path', handler => {
//     })
app.get('/', (req, res) => {
  res.send(`
    Hello World! I'm Akash 
        <h1>head</h1>
    `)
})

// ⬇️⬇️⬇️⬇️ these endpoints are working 😲
app.get('/about', (req, res) => {
    res.send('About Me')    
})

app.get('/contact', (req, res) => {
    res.send('Contact us')    
})

app.get('/blog', (req, res) => {
    res.send('Blog')    
})

// if you go to any endpoint that isn't present 
// Example : http://localhost:3000/harry
// it will show you this message "Cannot GET /harry"

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from db
//     res.send('Hello intro-to-js')    
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from db
//     res.send('Hello intro-to-python')    
// })
// -----------------------------------------------------------------------------------
// making this kind of endpoint is not a good practice
// because we have to make a new endpoint for every new blog
// so we will use dynamic routing (that's why we use express) 
// dynamic routing is used to make a single endpoint for all the blogs
// and we can fetch the blog from the db using the id of the blog
// Example : http://localhost:3000/blog/1
// Example : http://localhost:3000/blog/2
// and so on
// we will use the colon(:) to make the endpoint dynamic
// Example : http://localhost:3000/blog/:id
// so the id will be dynamic and we can fetch the blog using the id
// we can access the id using req.params.id
// Example : http://localhost:3000/blog/1
// req.params.id will be 1

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from db

    // http://localhost:3000/blog/intro-to-ruby?mode=dark&region=in

    // console.log(req); ---> this will show you the request object (very long)
    // output : 
    // ...
    // params: { slug: 'intro-to-ruby' },
    // query = { mode: 'dark', region: 'in' },
    // ...

    // console.log(req.params); ---> this will show you the params object --->  { slug: 'intro-to-ruby' }
    // console.log(req.params.slug); ---> intro-to-ruby
    res.send(`Hello ${req.params.slug}`)

    // console.log(req.query); // ---> this will show you the query params object --->  { mode: 'dark', region: 'in' },
})

// Now, all endpoints are accessible using a single endpoint ---> /blog/:slug ---> http://localhost:3000/blog/:slug
// for example : http://localhost:3000/blog/intro-to-ruby also works now
app.get('/blog/:aaloo/:kachaloo', (req, res) => {
    // logic to fetch data from db
    res.send(`Hello ${req.params.aaloo} and ${req.params.kachaloo}`)
    // res.send(`Hello ${req.params.slug} and ${req.params.kachaloo}`) ---> this will not work coz slug isn't defined here
})
// http://localhost:3000/blog/intro-to-ruby/getting-started

// req.query() ---> is used to get the query parameters
// Example : http://localhost:3000/blog/intro-to-ruby/getting-started?name=akash&age=21
// req.query() ---> { name: 'akash', age: '21' }
// req.query().name ---> akash
// req.query().age ---> 21

// USE ---> http://localhost:3000/blog/intro-to-ruby/getting-started?mode=dark&region=in


// app.use(express.static('./')) // this exposes all the files of the root folder on the website (not recommended) RISKY
// As we have created akash.txt in the public folder
// now if we vivit http://localhost:3000/akash.txt
// it will show Cannot GET /akash.txt this happens because if such happen that we can see the file in the browser 
// then it will be a security issue 
// So, we have to use the static middleware to serve the static files
// First, create a public folder and put the file in it
// then use the express.static('public') middleware
app.use(express.static('public'))
// so we have to use the express.static('public') middleware

// ⭐ Note: 
// app.use(express.static('./')) ---> will expose everything and the file akash.txt will be accessible at http://localhost:3000/public/akash.txt
// app.use(express.static('public')) ---> will expose everything inside the "public" folder and and the file akash.txt will be accessible at http://localhost:3000/akash.txt

//To create a virtual path prefix (where the path does not actually exist in the file system) 
// for files that are served by the express.static
// app.use('/static', express.static('public'))
// Now, you can load the files that are in the public directory from the "/static" path prefix.
// http://localhost:3000/static/images/image.jpg
// http://localhost:3000/static/folder1/file1.txt
// http://localhost:3000/static/js/file2.js
// http://localhost:3000/static/images/bg.png
// http://localhost:3000/static/hello.html

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})