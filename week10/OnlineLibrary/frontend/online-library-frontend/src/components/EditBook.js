import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBook = ({ match }) => {
    const [book, setBook] = useState({
        booktitle: '',
        PubYear: '',
        author: '',
        Topic: '',
        formate: ''
    });
    const [error, setError] = useState(null); // To track errors

    useEffect(() => {
        axios.get(`http://localhost:5000/getbook/${match.params.id}`)
            .then(response => setBook(response.data))
            .catch(error => {
                console.error('Error fetching book:', error);
                setError('Failed to fetch book details. Please try again later.');
            });
    }, [match.params.id]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/updatebook/${match.params.id}`, book)
            .then(() => {
                alert('Book updated successfully');
                setError(null); // Clear any previous errors
            })
            .catch(error => {
                console.error('Error updating book:', error);
                setError('Failed to update the book. Please try again.');
            });
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Edit Book</h1>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit} className="mb-4">
                {/* Input fields */}
                <button type="submit" className="btn btn-success mt-3">
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default EditBook;
