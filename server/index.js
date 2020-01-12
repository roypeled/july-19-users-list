const express = require("express");
const app = express();
const usersRoute = require("./users");
const postsRoute = require("./posts");

app.use(express.json());

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3000);