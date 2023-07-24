import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
//import { AuthContext } from '../Context/AuthContext'
import { FONTS, SHADOWS, SIZES, COLORS, assets } from '../constants'
import { AntDesign, Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar';

import { useDispatch, useSelector } from 'react-redux';
import { selectMenuState, selectNotificationState, selectnotificationItems, setOpenMenu, setOpenNotification } from '../globalRedux/features/NotificationSlice';


export default function WelcomeHeader({ navigation }) {
  //const { userData, setUserData } = useContext(AuthContext)
  const dispatch = useDispatch()
  const notifications = useSelector(selectnotificationItems);
  const menuSta = useSelector(selectMenuState)


  const [userData, setUserData] = useState({
    name: 'Rahul Sanap',
    picture: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-customer-call-service-portrait-6760890-5600697.png?f=webp',
    email: 'rahul@gmail.com',
    id: 1
  })

  const handleMenu = () => {
    // Navigate to the booking screen
    dispatch(setOpenMenu({
      menuState: !menuSta
    }))
  };

  const handleNotification = () => {
    dispatch(setOpenNotification({
      notificationState: true
    }))
  }

  return (
    <View style={{
      paddingTop: 28, paddingBottom: 5, paddingHorizontal: 20, backgroundColor: COLORS.white, width: '100%', flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

        }}
      >
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <Image source={assets.banner1} style={{ width: 45, height: 45, marginRight: 10, borderRadius: 100 }} />
          <Text
            style={{
              fontSize: SIZES.large,
              fontWeight: FONTS.bold,
              color: COLORS.primary,
            }}
          >
            Electronics Store
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => handleNotification()}>
          {notifications.length >= 1 ? (<View style={{
            position: "absolute",
            bottom: 15,
            left: -3,
            height: 20,
            width: 20,
            borderRadius: 50,
            backgroundColor: COLORS.blueish,
            justifyContent: "center",
            alignItems: 'center',
            zIndex: 10
          }}><Text style={{ fontSize: SIZES.small, color: COLORS.white }}>{notifications.length}</Text></View>) : null}
          <Ionicons name="notifications-outline" size={24} color={COLORS.primary} />
        </TouchableOpacity >
        <TouchableOpacity style={{ height: 35, flexDirection: 'row', alignItems: 'center' }} onPress={handleMenu}>
          {menuSta ? (<AntDesign name="closecircleo" size={30} color="black" />) : (<Ionicons name="ios-menu" size={30} color={COLORS.primary} />)}
        </TouchableOpacity>
      </View>
    </View >

  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})