const express = require("express");
const app = express();

app.get("/users", (req, res) => {
    res.json(require("./users.json"));
});

app.listen(3000);