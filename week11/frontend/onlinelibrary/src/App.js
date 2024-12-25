// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DisplayData from "./components/DisplayData";
import DeleteBook from "./components/DeleteBook";

export default function App() {
  return (
    <Router>
      <div className="container">
        <center>
          <h2>Online Book Library</h2>
        </center>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <Link to="/" className="navbar-brand">
            Add a Book
          </Link>
          <Link to="/DisplayBooksF1" className="navbar-brand">
            Display All Books
          </Link>
        </nav>
        <br />

        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/edit/:id" element={<BookUpdate />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/DisplayBooksF1" element={<DisplayData />} />
        </Routes>
      </div>
    </Router>
  );
}
