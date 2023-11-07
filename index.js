const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wnnjmi:1234@cluster0.0bujquq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

run().catch(console.dir);

app.use(express.json())

app.post('/register', (req, res) => {
  
  client.db("wan123").collection("admin").insertOne
    
  ({
      "username": req.body.username,
      "password": req.body.password
    });

 res.send('Hello World!')
})

app.post('/login', (req, res) => {
  
    //check if username is correct
    if(req.body.username != 'wan'){
        return res.status(400).send('Invalid User')
    }

    //check if password is correct
    if(req.body.password != '1234'){
        return res.status(400).send('Invalid Password')
    }

    res.send('Login Success')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//app.post('/login', (req, res) => {
//if(req.body.username != 'wan' || req.body.password != '1234'){
//return res.status(400).send('Invalid User or Password')
//}



/*const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.post('/login', (req, res) => {
  
    //check if username is correct
    if(req.body.username != 'wan'){
        return res.status(400).send('Invalid User')
    }

    //check if password is correct
    if(req.body.password != '1234'){
        return res.status(400).send('Invalid Password')
    }

    res.send('Login Success')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//app.post('/login', (req, res) => {
//if(req.body.username != 'wan' || req.body.password != '1234'){
//return res.status(400).send('Invalid User or Password')
//}*/