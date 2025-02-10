import React, { useEffect, useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null); // Track which post is being edited

  // Fetch all posts
  const getData = async () => {
    try {
      let res = await fetch("http://localhost:3000/posts");
      if (!res.ok) throw new Error("Failed to fetch data");

      let posts = await res.json();
      setData(posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Add or Update Post (POST & PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, author };

    try {
      let response;
      if (editId) {
        // PUT request (update full post)
        response = await fetch(`http://localhost:3000/posts/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });
      } else {
        // POST request (create new post)
        response = await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        });
      }

      if (response.ok) {
        alert(editId ? "Post updated successfully!" : "Post added successfully!");
        setTitle("");
        setAuthor("");
        setEditId(null);
        getData(); // Refresh list
      } else {
        alert("Error saving post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // PATCH request (update only title)
  const updateTitle = async (id, newTitle) => {
    try {
      let response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }), // Updating only title
      });

      if (response.ok) {
        alert("Title updated successfully!");
        getData();
      } else {
        alert("Error updating title");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Delete Post
  const del = async (id) => {
    try {
      let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Post deleted successfully!");
        getData();
      } else {
        alert("Error deleting post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Edit Post (Set fields for updating)
  const editPost = (post) => {
    setTitle(post.title);
    setAuthor(post.author);
    setEditId(post.id);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Update Post (PUT)" : "Add Post (POST)"}</button>
      </form>

      <h1>All Posts</h1>
      {data?.map((post) => (
        <div key={post.id}>
          <p>
            <strong>{post.title}</strong> by {post.author}
          </p>

          <button onClick={() => editPost(post)}>Edit (PUT)</button>

          <button onClick={() => updateTitle(post.id, "Updated Title")}>
            Update Title (PATCH)
          </button>

          <button onClick={() => del(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Form;
