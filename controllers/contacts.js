const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId; // This is the Id assigned automatically by MDB. 

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ '_id': contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type','application/json');
        res.status(200).json(contacts[0]);
    });
};

const createContact = (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
}