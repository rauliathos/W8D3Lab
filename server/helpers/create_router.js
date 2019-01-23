const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
  const router = express.Router();

  //get
  router.get('/', (req, res) =>{
    collection
    .find().toArray()
    .then((docs) => res.json(docs))
    .catch(console.error)

  })
  // get by id
  router.get('/:id',(req, res) =>{
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectId(id)})
      .then((docs) => res.json(docs))
      .catch(console.error)

  })



  //post
  router.post('/', (req, res) => {
    const newEntry = req.body;
    collection
      .insertOne(newEntry)
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch(console.error)
  })
  // delete by id

  router.delete('/:id',(req, res) =>{
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectId(id)})
      .then((docs) => res.json(docs))
      .catch(console.error)
  })
  return router;
}

module.exports = createRouter;
