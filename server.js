const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const path  = require('path');

const app = express();

const PORT  = 8080;


app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

// const MONGO_URL = "mongodb+srv://raj:raj@cluster0.xiepqdz.mongodb.net/?appName=Cluster0"
 const MONGO_URL = "mongodb://raj:raj@localhost:27017/my-sample-db?authSource=admin"
const client = new MongoClient(MONGO_URL)

app.get('/getUser', async(req, res) => {
    await client.connect(URL);
    console.log('Connected successfully to server');

    const db = client.db("my-sample-db");
    const data = await db.collection('docker').find({}).toArray();
    console.log(data)

    client.close();
    res.send(data);
}) 

app.post('/addUser', async (req, res) => {
    const userObj = req.body;
    await client.connect(MONGO_URL);
    console.log("connected successfully to server");


    const db = client.db("my-sample-db");
    const data = await db.collection('docker').insertOne(userObj);
    console.log(data);
    console.log("data inserted in DB");
    client.close();
    
})

app.listen(PORT, () => {
    console.log("Server is running")
})