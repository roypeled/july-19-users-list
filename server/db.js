const mongoose = require('mongoose');

async function setDb() {
    await mongoose.connect('mongodb://localhost:27017/users-list', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    setDb
};