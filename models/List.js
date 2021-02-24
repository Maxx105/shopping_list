const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "ListItems" }]
    // items: {
    //     type: Array
    // }
});

module.exports = mongoose.model("List", ListSchema);