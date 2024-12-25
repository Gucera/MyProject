import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [book, setBook] = useState({
        booktitle: '',
        PubYear: '',
        author: '',
        Topic: '',
        formate: ''
    });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/addbooks', book)
            .then(() => {
                alert('Book added successfully');
                setBook({
                    booktitle: '',
                    PubYear: '',
                    author: '',
                    Topic: '',
                    formate: ''
                }); // Clear the form after submission
            })
            .catch(error => {
                console.error('Error adding book:', error);
                alert('Failed to add the book. Please try again.');
            });
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Add a New Book</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="booktitle"
                        className="form-control"
                        placeholder="Enter book title"
                        value={book.booktitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Publication Year</label>
                    <input
                        type="number"
                        name="PubYear"
                        className="form-control"
                        placeholder="Enter publication year"
                        value={book.PubYear}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        name="author"
                        className="form-control"
                        placeholder="Enter author's name"
                        value={book.author}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Topic</label>
                    <input
                        type="text"
                        name="Topic"
                        className="form-control"
                        placeholder="Enter topic"
                        value={book.Topic}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Format</label>
                    <select
                        name="formate"
                        className="form-control"
                        value={book.formate}
                        onChange={handleChange}
                    >
                        <option value="">Select Format</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Hard Copy">Hard Copy</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
