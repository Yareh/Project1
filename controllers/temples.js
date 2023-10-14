const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");

const getTemples = (req, res) => {
  const db = getDb();
  let clients = [];
  db.collection("temples")
    .find()
    .forEach((client) => clients.push(client))
    .then(() => {
      res.status(200).send(clients);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not found the temple." });
    });
};

const getTemplesById = (req, res) => {
  const db = getDb();
  db.collection("temples") 
    .findOne({ _id: ObjectId(req.params.id) })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not retrieve the temple by id." });
    });
};

const insertTemple = (req, res) => {
  const db = getDb();
  const temple = req.body;
  db.collection("temples")
    .insertOne(temple)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new temple." });
    });
};

const updateTemple = (req, res) => {
  const db = getDb();
  const temple = req.body;
  db.collection("Temples")
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: temple })
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not update the temple." });
    });
};

const deleteTemple = (req, res) => {
  const db = getDb();
  db.collection("Temples")
    .deleteOne({ _id: ObjectId(req.params.id) })
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not delete Temple." });
    });
};

module.exports = {
  getTemples,
  getTemplesById,
  insertTemple,
  updateTemple,
  deleteTemple
};
