const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
// const uri = "mongodb://blateua:302302@cluster0-shard-00-00-4rea0.mongodb.net:27017,cluster0-shard-00-01-4rea0.mongodb.net:27017,cluster0-shard-00-02-4rea0.mongodb.net:27017/DiplomaStales?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
const uri = "mongodb://127.0.0.1:27017/stalesDb";
let db;

MongoClient.connect(uri, function(err, database) {
  if ( err ){
    console.log( JSON.stringify( err ) );
    database.close();
  }
  db = database;
  // db.collection("categories").find().toArray((err,res)=>{
  //     console.log(res)
  // });
});

router.get('/categories', (request, response) => {
  db.collection("categories").find().toArray((err,res)=>{
      if ( err ){
        response.status(500).send(err);
      }
      response.status(200).send(res);
  });
});

router.get('/category/:id', ( request, response )=>{
  const id = request.params.id;
  db.collection("categories").find({_id: new ObjectId(id)}).toArray((err,res)=>{
    if ( err ){
      response.status(500).send(err);
    }
    response.status(200).send(res);
  });
});

router.get('/steels', (request, response) => {
  db.collection("steels").find().toArray((err,res)=>{
      if ( err ){
        response.status(500).send(err);
      }
      response.status(200).send(res);
  });
});

router.get('/steel/:id', ( request, response )=>{
  const id = request.params.id;
  db.collection("steels").find({_id: new ObjectId(id)}).toArray((err,res)=>{
    if ( err ){
      response.status(500).send(err);
    }
    response.status(200).send(res);
  });
});

router.get('/category/:id/steels', (request, response) => {
  const id = request.params.id;
  db.collection("steels").find({"category":id}).toArray((err,res)=>{
    if ( err ){
      response.status(500).send(err);
    }
    response.status(200).send(res);
  });
});

router.get('/search/:query', (request, response) => {
  const query = parseQuery(request.params.query);
  db.collection("steels").find({$text:{$search:query}}).toArray((err,res)=>{
    if ( err ){
      response.status(500).send(err);
    }
    response.status(200).send(res);
  });
});

function parseQuery(query) {
  const arr = query.split(' ');
  if (1 === arr.length) return query;
  query = `\"${arr.join('\"\"')}\"`;
  return query;

}

module.exports = router;
