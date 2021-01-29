const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    items: {
        type: Array
    },
    date:{
        type:Date,
        default: Date.now
    },
    user: {
      type: String
    },
    userID: {
      type: String,
    }
});

module.exports = mongoose.model("List", ListSchema);