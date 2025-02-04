import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CounterSlice = createSlice({
  name: 'CounterSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1

      if(state.value<0){
        state.value=0;
      }
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer