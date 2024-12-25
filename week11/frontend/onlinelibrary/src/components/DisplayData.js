// DisplayData.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DisplayData() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allbooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      <h3>Book List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Format</th>
            <th>Topic</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.booktitle}</td>
              <td>{book.author}</td>
              <td>{book.formate}</td>
              <td>{book.Topic}</td>
              <td>{book.PubYear}</td>
              <td>
                <Link to={`/edit/${book._id}`} className="btn btn-warning">
                  Edit
                </Link>
                <Link to={`/delete/${book._id}`} className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

