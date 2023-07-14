import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { RectButton } from "./Button";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContent } from "./DrawerContent";

const ListHeader = () => (
  <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row", marginTop: 10 }}>
    <Text style={{
      fontSize: SIZES.large,
      fontFamily: FONTS.bold,
      color: COLORS.white
    }}>Our Services</Text>
    <Feather name="chevrons-right" size={24} color="white" />
  </View>
)

const HomeHeader = ({ onSearch, handleBookAppointment, navigation }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    // Navigate to the booking screen
    navigation.navigate('ProfileScreen');
  };

  return (
    <View
      style={{
        backgroundColor: "transparent",
        padding: SIZES.font,
        width: "100%"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
          }}
        >
          Blueprint <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.medium,
              color: COLORS.white,
              alignItems: "center",
            }}
          >
            👋
          </Text>
        </Text>

        <TouchableOpacity style={{ width: 35, height: 35 }} onPress={handleMenu}>
          <Ionicons name="ios-menu" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find masterpiece Designs
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font, display: "flex", justifyContent: "space-between", width: "100%", flexDirection: "row", }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Blueprint.."
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
      <ListHeader />
    </View>
  );
};

export default HomeHeader;
