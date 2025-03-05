import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,removeProduct } from "../ReduxStore/Productthunk";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
