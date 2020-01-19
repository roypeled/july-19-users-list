const express = require("express");
const router = express.Router();
const { getUsersCollection } = require('./db');

router.get("/", async (req, res) => {
    (await getUsersCollection())
        .find({})
        .toArray((err, documents) => {
            res.json(documents);
        });
});

router.get("/:id", async (req, res) => {
    (await getUsersCollection())
        .findOne({id: parseInt(req.params.id) }, (err, doc) => {
            res.json(doc);
        });
});

router.delete("/:id", async (req, res) => {
    (await getUsersCollection())
        .findOneAndDelete({id: parseInt(req.params.id) }, (err, doc) => {
            res.json(doc);
        });
});

router.post("/", async (req, res) => {
    (await getUsersCollection())
        .insert(req.body, (err, doc) => {
            res.json(doc);
        });
});

module.exports = router;
