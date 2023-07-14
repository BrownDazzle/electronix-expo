import React from "react";
import { View, Text, Image } from "react-native";

import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import { TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const DetailsBid = ({ specs }) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            lineHeight: SIZES.large,
          }}
        >
          RAM
        </Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            {specs.ram}
          </Text>
        </View>

        <AntDesign name="checkcircle" size={24} color={COLORS.blueish} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            lineHeight: SIZES.large,
          }}
        >
          STORAGE
        </Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            {specs.storage}
          </Text>
        </View>

        <AntDesign name="checkcircle" size={24} color={COLORS.blueish} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            lineHeight: SIZES.large,
          }}
        >
          NETWORK
        </Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            {specs.connectivity}
          </Text>
        </View>

        <AntDesign name="checkcircle" size={24} color={COLORS.blueish} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            lineHeight: SIZES.large,
          }}
        >
          BATTERY
        </Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            {specs.batteryCapacity}
          </Text>
        </View>

        <AntDesign name="checkcircle" size={24} color={COLORS.blueish} />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            lineHeight: SIZES.large,
          }}
        >
          CAMERA
        </Text>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            {specs.camera}
          </Text>
        </View>

        <AntDesign name="checkcircle" size={24} color={COLORS.blueish} />
      </View>
    </View>
  );
};

export default DetailsBid;
