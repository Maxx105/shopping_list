const express = require("express");
const router = express.Router();
const passport = require("passport");
const listController = require("../../controllers/listController");
const path = require("path");
const List = require("../../models/List");

router
    .route("/lists")
    .get(listController.findAll)
    // .post(listController.create);

router
    .route("/lists/:id")
    .get(listController.findById)
    .delete(listController.remove);

router.post(
    "/lists",
    passport.authenticate("jwt", { session: false }),
    function (req, res) {
        const list = new List(req.body);
        list.save((err) => {
            if (err) {
                res.json({ message: err.message, error: true });
            } else {
                req.user.lists.push(list);
                req.user.save((err) => {
                    if (err) {
                        res.json({ message: err.message, error: true });
                    } else {
                        res.json({ message: "Successfully created list", error: false });
                    }
                });
            }
        });
    }
);

module.exports = router;