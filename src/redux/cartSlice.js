import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0, // Default to 0 in number format
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = parseFloat(existingItem.totalPrice) + parseFloat(existingItem.price);
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: parseFloat(action.payload.price),
        });
      }
      state.totalQuantity += 1;
      state.totalAmount += parseFloat(action.payload.price);
    },
    removeFromCart(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 0) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= parseFloat(existingItem.totalPrice);
        existingItem.quantity = 0; // Set quantity to 0 but keep the product on the webpage
        existingItem.totalPrice = 0;
      }
    },
    increaseQuantity(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = parseFloat(existingItem.totalPrice) + parseFloat(existingItem.price);
        state.totalQuantity += 1;
        state.totalAmount += parseFloat(existingItem.price);
      }
    },
    decreaseQuantity(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = parseFloat(existingItem.totalPrice) - parseFloat(existingItem.price);
        state.totalQuantity -= 1;
        state.totalAmount -= parseFloat(existingItem.price);
      } else if (existingItem && existingItem.quantity === 1) {
        existingItem.quantity = 0;
        state.totalQuantity -= 1;
        state.totalAmount -= parseFloat(existingItem.price);
        existingItem.totalPrice = 0;
      }
    },
    setCartItems(state, action) {
      state.cartItems = action.payload.map(item => ({
        ...item,
        quantity: parseInt(item.quantity, 10) || 0,
        totalPrice: parseFloat(0), // Ensure totalPrice is a number of 0 at start.
      }));
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + parseFloat(item.totalPrice), 0);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
