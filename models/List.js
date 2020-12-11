const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("List", ListSchema);