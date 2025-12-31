const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    // Suppose we have some data to render in the template
    // EMBEDDED JAVASCRIPT (EJS) TEMPLATE ENGINE

    let siteName = 'Express EJS Template Engine'
    let siteText = 'This is a simple example of using EJS template engine in Express.'
    let siteAuthor = 'John Doe'
    let siteYear = new Date().getFullYear()
    
    // Suppose you want to add these variables to the index.html file
    // You can use the res.render() method to render the index.html file
    // and pass the variables as an object to the second argument of the res.render() method

    // Now, you don't need to make any changes in the index.html file
    // or making different files for different data
    // Examples: in case of BLOGS, you can use the same index.html file for all the blogs

    res.render('index', { 
        siteName: 'My Site',
        siteText: 'This is a site text.', 
        siteAuthor: 'iamakashtechie', 
        siteYear: 2024 
    })
  // res.sendFile(__dirname + '/templates/index.html')    // no need to write this line
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})