// DeleteBook.js
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DeleteBook() {
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .post(`http://localhost:5000/deleteBook/${id}`)
      .then(() => console.log("Book deleted"));
  };

  return (
    <div>
      <h3>Are you sure you want to delete this book?</h3>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
