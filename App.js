import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import RoootNavigator from './src/navigations/RootNavigator'
import ToastManager, { Toast } from "expo-react-native-toastify";
import store from './src/globalRedux/store'
import { Provider } from 'react-redux'
import 'expo-dev-client'


const App = () => {
  return (
    <Provider store={store}>
      <RoootNavigator />
    </Provider>

  )
}

export default App


const styles = StyleSheet.create({

  container: {
    flex: 1
  }


})
