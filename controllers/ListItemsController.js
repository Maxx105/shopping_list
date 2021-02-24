const ListItems = require("../models/ListItems");
const List = require("../models/List");

module.exports = {
  findAll: function (req, res) {
    ListItems
        .find(req.query)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    ListItems
        .findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    ListItems
        .create(req.body)
        .then(dbModel => {
          List
              .findByIdAndUpdate( {_id: dbModel.listID },
              { "$push":  {"items": dbModel} })
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    ListItems
        .findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
  }
}