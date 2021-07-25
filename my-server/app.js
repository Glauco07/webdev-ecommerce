var express = require("express");
var app = express();
const body_Parser = require('body-parser')

const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://admin:admin@sandbox.pthw8.mongodb.net/store_db?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true)
  // Pass to next layer of middleware
  next();
});

app.use(express.json())

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

// MONGO
mongoClient.connect()
  .then(async client => {
    const db = client.db()
    const productsCollection = db.collection("products");
    const usersCollection = db.collection("users");
    const ordersCollection = db.collection("orders");

    // ROUTES
    app.get("/products", async (req, res, next) => {
      const cursor = productsCollection.find();
      const products = await cursor.toArray();
      res.json(products);
    });

    app.get("/orders", async (req, res, next) => {
      const cursor = ordersCollection.find();
      const orders = await cursor.toArray();
      res.json(orders);
    });

    app.post("/purchase", async (req, res, next) => {
      const result = await ordersCollection.insertOne(req.body);
      
      res.status(201);
      res.json(result);
      res.end();
    })

    app.post("/products", async (req, res, next) => {
      const result = await productsCollection.insertOne(req.body);

      res.json(result)
      res.end()
    })
    
    app.post("/products/del", (req, res, next) => {
      productsCollection.deleteOne({_id: ObjectId(req.body.id)});
      
      res.send("Done");
      res.status(200);
    });

    app.post("/login", async (req, res, next) => {
      const loginResult = await usersCollection.findOne({user: req.body.user, password: req.body.password});
      if(loginResult != undefined) {
        res.json(loginResult);
      } else {
        res.status(401);
        res.send("Login failed");
      }
    });
    
    app.post("/users", async (req, res, next) => {
      const result = await usersCollection.insertOne(req.body);
      res.json(result);
      res.status(201)
    })

    app.post("/users/addadmin", async (req, res, next) => {
      const result = await usersCollection.findOneAndUpdate({user: req.body.user}, {$set: {admin: true}});
      result.value === null ? res.status(400) : res.status(200);
      res.json(result);
    })
  }).catch((error) => {
      console.error("Failed to connect to the database: " + error);
  });