const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("List", ListSchema);