const express = require("express");
const router = express.Router();
const passport = require("passport");
const listController = require("../../controllers/listController");
const listItemsController = require("../../controllers/ListItemsController");
const path = require("path");
const List = require("../../models/List");
const ListItems = require("../../models/ListItems");

router
    .route("/lists")
    .get(listController.findAll)
    // .post(listController.findOneThenSave);

router
    .route("/lists/:id")
    .get(listController.findById)
    // .post(listController.addItemToList)
    .delete(listController.remove);

router
    .route("/items")
    .get(listItemsController.findAll)
    .post(listItemsController.create);

router
    .route("/items/:id")
    .get(listItemsController.findById)
    .delete(listItemsController.remove);

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