import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("getData", async () => {
  const res = await fetch("http://localhost:3000/posts");
  return res.json();
});

export const createData = createAsyncThunk("createData", async (newPost) => {
  const res = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return res.json();
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE" });
  return id;
});

export const updateData = createAsyncThunk("updateData", async (updatedPost) => {
  const res = await fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
  return res.json();
});

const initialState = {
  products: [],
  loading: false,
};

const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      });
  },
});

export default ProductSlice.reducer;
