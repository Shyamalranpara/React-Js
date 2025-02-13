import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, deleteData, updateData } from "../Store/Slice/ProductSlice";

const Add = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setEditTitle(product.title);
  };

  const handleSave = (id) => {
    dispatch(updateData({ id, title: editTitle }));
    setEditId(null);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                {editId === product.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  <>
                    <p>Title: {product.title}</p>
                    <p>Author: {product.author}</p>
                  </>
                )}

                {editId === product.id ? (
                  <button onClick={() => handleSave(product.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(product)}>Edit</button>
                )}
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Add;
