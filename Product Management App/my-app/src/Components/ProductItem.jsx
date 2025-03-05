import React from "react";

const ProductItem = ({ product, onDelete }) => {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </li>
  );
};

export default ProductItem;
