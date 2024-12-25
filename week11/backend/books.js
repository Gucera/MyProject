const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    Author: { type: String, required: true },
    PubYear: { type: Number, required: true },
    Topic: { type: String, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
