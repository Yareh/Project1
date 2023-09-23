const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");

const getContacts = (req, res) => {
  const db = getDb();
  let clients = [];
  db.collection("Contacts")
    .find()
    .forEach((client) => clients.push(client))
    .then(() => {
      res.status(200).send(clients);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not found the contact." });
    });
};

const getContactsById = (req, res) => {
  const db = getDb();
  db.collection("Contacts") 
    .findOne({ _id: ObjectId(req.params.id) })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not retrieve the document by id." });
    });
};

module.exports = {
  getContacts,
  getContactsById,
};
