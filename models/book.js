const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    googleBooksID:{
        type: String,
        required: true
    }
});

module.exports = Book = mongoose.model("Book", BookSchema);