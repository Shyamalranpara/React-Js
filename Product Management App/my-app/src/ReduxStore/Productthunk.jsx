import axios from "axios";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  deleteProduct,
} from "../ReduxStore/Slice";

const API_URL = "http://localhost:3000/products";

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axios.get(API_URL);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, product);
    dispatch(addProduct(response.data));
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const removeProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deleteProduct(id));
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
