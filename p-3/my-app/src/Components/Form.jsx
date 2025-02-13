import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../Store/Slice/ProductSlice"; 

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const Hsubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, author };

    if (title && author) {
      dispatch(createData(newPost));
      alert("Post added successfully!");
      setTitle("");
      setAuthor("");
    } else {
      alert("Error adding post: Fields cannot be empty");
    }
  };

  return (
    <form onSubmit={Hsubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default Form;
