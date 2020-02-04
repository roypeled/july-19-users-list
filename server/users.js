const express = require("express");
const router = express.Router();
const { UsersModel } = require("./users.model");
const { CompanyModel } = require("./companies.model");

router.get("/", async (req, res) => {
    const users = await UsersModel.find({}).populate('company');
    res.send(users);
});

router.get("/:id", async (req, res) => {
    const user = await UsersModel.findById(req.params.id).populate('company');
    res.send(user);
});

router.delete("/:id", async (req, res) => {
    try {
        await UsersModel.findByIdAndDelete(req.params.id);
        res.send("ok");
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const user = await UsersModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.post("/", async (req, res) => {
    let company = new CompanyModel(req.body.company);
    company = await company.save();

    const user = new UsersModel({
        ...req.body,
        company: company._id
    });

    try {
        const result = await user.save();
        res.send(result);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = router;
