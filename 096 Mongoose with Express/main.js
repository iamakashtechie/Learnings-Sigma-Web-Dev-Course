// https://www.npmjs.com/package/mongodb
// we can use this npm package but mongoose is more used in the industry
// so we are using mongoose ---> npm i mongoose

// mongoose library is preferable to use instead of mongodb because mongoose provides schemas
// which helps in stating the type of data
// Example: string, boolean, etc....

import mongoose from 'mongoose';
import express from 'express';
import { Todo } from './models/Todo.js';

let conn = await mongoose.connect('mongodb://localhost:27017/todo');
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
        // title: 'First Todo',
        // if title is not provided it will take the default value as "Untitled"
        desc: 'First Todo Description',
        isDone: false,
        days: 5
        // days: "harry" // ---> this will throw an error because days is of type number

    });
    todo.save();
  res.send('Hello World!')
})

// https://mongoosejs.com/docs/schematypes.html#example see examples 🔥

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console. log(todo)
    res.json({
        title: todo.title, 
        desc: todo.desc
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})