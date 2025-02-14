const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require("fs")
const kunci = fs.readFileSync('kunci.lwt').toString()


let client = new MongoClient(`mongodb+srv://Reckordp:${kunci}@keteranganumumga.pjt8q.mongodb.net/?retryWrites=true&w=majority&appName=KeteranganUmumGA`, 
    {
        serverApi: {
            version: ServerApiVersion.v1, 
            strict: true, 
            deprecationErrors: true
        }
    }
)

const api = require('server')
const jalur = require('./restapi/jalur.js')

async function run() {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    let db = client.db("Snailight");
    // db.collection("checkin").
    global.penggunaDB = db
    await api({ port: 9055 }, jalur)
    while(true) {}
    } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    }
}

run().catch(console.log)