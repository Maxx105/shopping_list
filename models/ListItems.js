const mongoose = require("mongoose");

const ListItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
    },
    listID: {
        type: String
    }
});

module.exports = mongoose.model("ListItems", ListItemsSchema);