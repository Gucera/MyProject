const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./MongoDBConnection');
const Book = require('./books');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/allbooks', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.get('/getbook/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.post('/addbooks', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.put('/updatebook/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(book);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.delete('/deleteBook/:id', async (req, res) => {
    try {
        await Book.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Book removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
