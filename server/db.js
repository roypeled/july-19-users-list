const { MongoClient } = require('mongodb');

async function getUsersCollection() {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db('users-list');
    return db.collection('users');
}

module.exports = {
    getUsersCollection
};