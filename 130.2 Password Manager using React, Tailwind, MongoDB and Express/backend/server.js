const express = require('express')
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

dotenv.config()
console.log(process.env.MONGO_URI);

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';

client.connect();

// Get all the passowrd from the database
app.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('testing');
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})

// Save a password to the database
app.post('/', async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('testing');
        await collection.insertOne(password);
        const findResult = await collection.find({}).toArray();
        res.json({ success: true, result: findResult });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})

// Delete a password from the database
app.delete('/', async (req, res) => {
    try {
        const { id } = req.body;
        const db = client.db(dbName);
        const collection = db.collection('testing');
        await collection.deleteOne({ id });
        const findResult = await collection.find({}).toArray();
        res.json({ success: true, result: findResult });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})

// New endpoint to clear all passwords
app.delete('/clear', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('testing');
        await collection.deleteMany({});
        res.json({ success: true, result: [] });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})