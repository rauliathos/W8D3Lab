const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
  const router = express.Router();

  //post
  router.post('/', (req, res) => {
    const newEntry = req.body;
    collection
      .insertOne(newEntry)
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch(console.error)
  })

  return router;
}

module.exports = createRouter;
