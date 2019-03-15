let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inage: {
        type: String,
        default: true
    },
    link: {
        type: String,
        required: true
    }
});

let news = mongoose.model("news", newsSchema);

module.exports = news;