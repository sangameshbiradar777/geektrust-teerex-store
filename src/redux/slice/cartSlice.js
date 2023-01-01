import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id === payload.id);

      let updatedCartItem = {
        ...payload,
        quantity: cartItem ? cartItem.quantity - 1 : payload.quantity - 1,
        cartQuantity: cartItem ? cartItem.cartQuantity + 1 : 1,
      };

      if (cartItem) {
        if (updatedCartItem.quantity < 0) return;
        state.items = state.items.map((item) => {
          if (item.id === updatedCartItem.id) return updatedCartItem;
          else return item;
        });
      } else state.items.push(updatedCartItem);
    },
    incrementQunatity: (state, { payload }) => {
      state.items = state.items.map(item => {
        if (item.id === payload) {
          return { ...item, cartQuantity: item.cartQuantity + 1, quantity: item.quantity - 1 }
        }
        else return item;
      })
    },
    decrementQuantity: (state, { payload }) => {
      const updatedCartItems = state.items.map(item => {
        if (item.id === payload) {
          return { ...item, cartQuantity: item.cartQuantity - 1, quantity: item.quantity + 1 }
        }
        else return item;
      })

      state.items = updatedCartItems.filter(item => item.cartQuantity);
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    emptyCart: (state) => {
      state.items = [];
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, incrementQunatity, decrementQuantity, deleteItem, emptyCart } = cartSlice.actions;
