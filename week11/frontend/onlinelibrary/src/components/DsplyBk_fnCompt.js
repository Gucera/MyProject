// DsplyBk_fnCompt.js
import React from "react";

export default function DsplyBk_fnCompt({ books }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Format</th>
          <th>Topic</th>
          <th>Year</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
