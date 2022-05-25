const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserTextSchema = new Schema({
    headline: {
        type: String,
        required: true
    },

    content: [
        {
            type: String,
            required: true
        }
    ],
    details: String

})


const UserText = mongoose.model("UserText", UserTextSchema);

module.exports = UserText;