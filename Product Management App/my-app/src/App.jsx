import React from "react";
import ProductList from "./Components/ProductList";
import ProductForm from "./Components/ProductForm";
import CustomNavbar from "./Components/CustomNavbar";

const App = () => {
  return (
    <div>
      <h1>Product Management</h1>
      <CustomNavbar/>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default App;
