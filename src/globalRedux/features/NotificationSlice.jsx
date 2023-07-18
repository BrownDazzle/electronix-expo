
import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "expo-react-native-toastify";
import { saveToLocalStorage, getFromLocalStorage } from "../localStorage";

const localStorage = getFromLocalStorage("notification")

const initialState = {
  notificationState: false,
  notificationItems: localStorage ? localStorage : [], // Let Suppose Database
  menuState: false
};

const NotificationSlice = createSlice({
  initialState,
  name: "notification",
  reducers: {
    setOpenNotification: (state, action) => {
      state.notificationState = action.payload.notificationState;
    },
    setCloseNotification: (state, action) => {
      state.notificationState = action.payload.notificationState;
    },
    setOpenMenu: (state, action) => {
      state.menuState = action.payload.menuState;
    },
    setCloseMenu: (state, action) => {
      state.menuState = action.payload.menuState;
    },
    setAddItemToNotifications: (state, action) => {
      const itemIndex = state.notificationItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const temp = action.payload;
      state.notificationItems.push(temp);

      saveToLocalStorage('notification', state.notificationItems)

      //localStorage.setItem("notification", JSON.stringify(state.notificationItems));
    },

    setRemoveItemFromNotifications: (state, action) => {
      const removeItem = state.notificationItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.notificationItems = removeItem;

      saveToLocalStorage('notification', state.notificationItems)

      // localStorage.setItem("notification", JSON.stringify(state.notificationItems));
    },


    setClearNotificationItems: (state, action) => {
      state.notificationItems = [];
      Toast.success(`Notifications Cleared`);
      saveToLocalStorage('notification', state.notificationItems)

      //localStorage.setItem("notification", JSON.stringify(state.notificationItems));
    },


  },
});

export const {
  setOpenNotification,
  setCloseNotification,
  setOpenMenu,
  setCloseMenu,
  setAddItemToNotifications,
  setRemoveItemFromNotifications,
  setClearNotificationItems,

} = NotificationSlice.actions;

export const selectMenuState = (state) => state.notification?.menuState;
export const selectNotificationState = (state) => state.notification?.notificationState;
export const selectnotificationItems = (state) => state.notification?.notificationItems;

export default NotificationSlice.reducer;
