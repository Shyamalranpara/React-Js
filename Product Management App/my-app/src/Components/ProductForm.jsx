import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../ReduxStore/Productthunk";

const ProductForm = () => {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ name, price, category }));
    setName("");
    setPrice("");
    setCategory("");
  };

  return (

    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />

      <input type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />

      <input type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required 
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
