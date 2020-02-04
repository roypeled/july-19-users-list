const express = require("express");
const usersRoute = require("./users");
const postsRoute = require("./posts");
const { setDb } = require("./db");

const app = express();

setDb();

app.use(express.json());

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3000);