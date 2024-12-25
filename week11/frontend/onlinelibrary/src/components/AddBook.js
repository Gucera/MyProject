// AddBook.js
import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bookdata = {
      booktitle: state.booktitle,
      author: state.author,
      formate: state.formate,
      Topic: state.Topic,
      PubYear: state.PubYear,
    };
    axios
      .post("http://localhost:5000/addbooks", bookdata)
      .then((res) => console.log(res.data));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Book Title: </label>
          <input
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Format: </label>
          <div className="form-check">
            <input
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
              className="form-check-input"
            />
            Hard Copy
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
              className="form-check-input"
            />
            Electronic Copy
          </div>
        </div>
        <div className="form-group">
          <label>Topic: </label>
          <select
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
          </select>
        </div>
        <div className="form-group">
          <label>Publication Year: </label>
          <input
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Book" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
