
import { createSlice } from "@reduxjs/toolkit";
import ToastManager, { Toast } from "expo-react-native-toastify";
import { saveToLocalStorage, getFromLocalStorage } from "../localStorage";

const localStorage = getFromLocalStorage("orders")

const initialState = {
  ordersState: false,
  ordersItems: localStorage ? localStorage : [], // Let Suppose Database
  ordersTotalAmount: 0,
  ordersTotalQantity: 0,
};

const OrdersSlice = createSlice({
  initialState,
  name: "orders",
  reducers: {
    setOpenOrders: (state, action) => {
      state.ordersState = action.payload.ordersState;
    },
    setCloseOrders: (state, action) => {
      state.ordersState = action.payload.ordersState;
    },
    setAddItemToOrders: (state, action) => {
      const itemIndex = state.ordersItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.ordersItems[itemIndex].ordersQuantity += 1;

        Toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, ordersQuantity: 1 };
        state.ordersItems.push(temp);

        Toast.success(`${action.payload.title} added to orders`);
      }
      saveToLocalStorage('orders', state.ordersItems)

      //localStorage.setItem("orders", JSON.stringify(state.ordersItems));
    },

    setRemoveItemFromOrders: (state, action) => {
      const removeItem = state.ordersItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.ordersItems = removeItem;

      saveToLocalStorage('orders', state.ordersItems)

      // localStorage.setItem("orders", JSON.stringify(state.ordersItems));

      Toast.success(`${action.payload.title} Removed From orders`);
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.ordersItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.ordersItems[itemIndex].ordersQuantity += 1;

        Toast.success(`Item QTY Increased`);
      }
      saveToLocalStorage('orders', state.ordersItems)

      //localStorage.setItem("orders", JSON.stringify(state.ordersItems));
    },

    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.ordersItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.ordersItems[itemIndex].ordersQuantity > 1) {
        state.ordersItems[itemIndex].ordersQuantity -= 1;

        Toast.success(`Item QTY Decreased`);
      }
      saveToLocalStorage('orders', state.ordersItems)

      //localStorage.setItem("orders", JSON.stringify(state.ordersItems));
    },

    setClearordersItems: (state, action) => {
      state.ordersItems = [];
      Toast.success(`orders Cleared`);
      saveToLocalStorage('orders', state.ordersItems)

      //localStorage.setItem("orders", JSON.stringify(state.ordersItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.ordersItems.reduce((ordersTotal, ordersItem) => {
        const { price, ordersQuantity } = ordersItem;
        const totalPrice = price * ordersQuantity;

        ordersTotal.totalAmount += totalPrice;
        ordersTotal.totalQTY += ordersQuantity;

        return ordersTotal;
      }, {
        totalAmount: 0,
        totalQTY: 0,
      });

      state.ordersTotalAmount = totalAmount;
      state.ordersTotalQantity = totalQTY;
    },
  },
});

export const {
  setOpenOrders,
  setCloseOrders,
  setAddItemToOrders,
  setRemoveItemFromOrders,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearordersItems,
  setGetTotals
} = OrdersSlice.actions;

export const selectOrdersState = (state) => state.orders?.ordersState;
export const selectOrdersItems = (state) => state.orders?.ordersItems;

export const selectTotalAmount = (state) => state.orders?.ordersTotalAmount;
export const selectTotalQTY = (state) => state.orders?.ordersTotalQantity;

export default OrdersSlice.reducer;
