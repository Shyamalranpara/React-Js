import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          localStorage.setItem("products", JSON.stringify(json));
        });
    }
  }, []);

  const EditPrice = (id) => {
    const newPrice = prompt("Enter the new price:");

    if (newPrice && !isNaN(newPrice)) {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, price: parseFloat(newPrice) } : product
      );
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  };

  const Delete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
      }}
    >
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {products.map((el) => (
          <div
            key={el.id}
            style={{
              width: "20%",
              height: "400px",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img style={{ width: "100px" }} src={el.image} alt={el.title} />
              <h2>{el.id}</h2>
              <p>{el.title}</p>
              <p>${el.price.toFixed(2)}</p>
              <div>
                <button onClick={() => EditPrice(el.id)}>Edit</button>
                <button onClick={() => Delete(el.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
