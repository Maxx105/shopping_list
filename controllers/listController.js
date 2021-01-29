const List = require("../models/List");

module.exports = {
  findAll: function (req, res) {
    List
      .find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    List
      .findById({ _id: req.params.id })
      .populate("items")
      .exec((err, document) => {
        if (err) {
          res.json({ message: "Error has occurred", error: true });
        } else {
          res.json({ list: document, authenticated: true });
        }
      });
  },
  create: function(req, res) {
    List
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    List
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};