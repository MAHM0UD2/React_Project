import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const plant = action.payload;
        const exist = state.items.find(e => e.name === plant.name);
        if (exist) {
            exist.quantity++;
        } else {
            state.items.push({...plant, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(e => e.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const {name, amount} = action.payload;
        const exist = state.items.find(e => e.name === name);
        if (exist) {
            exist.quantity = amount;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
