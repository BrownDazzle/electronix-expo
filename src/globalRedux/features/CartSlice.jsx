
import { createSlice } from "@reduxjs/toolkit";
import ToastManager, { Toast } from "expo-react-native-toastify";
import { saveToLocalStorage, getFromLocalStorage } from "../localStorage";

const localStorage = getFromLocalStorage("cart")

const initialState = {
  cartState: false,
  cartItems: localStorage ? localStorage : [], // Let Suppose Database
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        Toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        Toast.success(`${action.payload.title} added to Cart`);
      }
      saveToLocalStorage('cart', state.cartItems)

      //localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;

      saveToLocalStorage('cart', state.cartItems)

      // localStorage.setItem("cart", JSON.stringify(state.cartItems));

      Toast.success(`${action.payload.title} Removed From Cart`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        Toast.success(`Item QTY Increased`);
      }
      saveToLocalStorage('cart', state.cartItems)

      //localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        Toast.success(`Item QTY Decreased`);
      }
      saveToLocalStorage('cart', state.cartItems)

      //localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      state.cartItems = [];
      Toast.success(`Cart Cleared`);
      saveToLocalStorage('cart', state.cartItems)

      //localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const totalPrice = price * cartQuantity;

        cartTotal.totalAmount += totalPrice;
        cartTotal.totalQTY += cartQuantity;

        return cartTotal;
      }, {
        totalAmount: 0,
        totalQTY: 0,
      });

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals
} = CartSlice.actions;

export const selectCartState = (state) => state.cart?.cartState;
export const selectCartItems = (state) => state.cart?.cartItems;

export const selectTotalAmount = (state) => state.cart?.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart?.cartTotalQantity;

export default CartSlice.reducer;
