import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  text:"practise the redux-toolkit"
}

export const Counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        if(state.value > 0)
        {
            state.value -= 1
        }
    },
    
  },
})
export const { increment, decrement } = Counter.actions
export default Counter.reducer
