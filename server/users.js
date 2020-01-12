const express = require("express");
const router = express.Router();
let users = require("./users.json");

router.get("/", (req, res) => {
    res.json(users);
});

router.get("/:id", (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    if(!user) res.status(404);
    res.json(user);
});

router.delete("/:id", (req, res) => {
    users = users.filter(user => user.id != req.params.id);
    res.json(users);
});

router.post("/", (req, res) => {
    const id = users.length;
    const user = {...req.body, id};
    users.push(user);
    res.json(user);
});

module.exports = router;
