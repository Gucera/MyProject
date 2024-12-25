import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/allbooks')
            .then(response => setBooks(response.data))
            .catch(error => {
                console.error('Error fetching books:', error);
                setError('Failed to fetch books. Please try again later.');
            });
    }, []);

    const filteredBooks = books.filter(book =>
        book.booktitle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="text-center my-4">Book List</h1>
            {error && <p className="text-danger text-center">{error}</p>}

            {/* Add Book Button */}
            <div className="mb-3">
                <Link to="/add" className="btn btn-primary">
                    Add New Book
                </Link>
            </div>

            {/* Search Bar */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search by book title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredBooks.length === 0 ? (
                <p className="text-center">No books found. Try searching with a different keyword.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publication Year</th>
                            <th>Topic</th>
                            <th>Format</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.map(book => (
                            <tr key={book._id}>
                                <td>{book.booktitle}</td>
                                <td>{book.author}</td>
                                <td>{book.PubYear}</td>
                                <td>{book.Topic}</td>
                                <td>{book.formate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BookList;
