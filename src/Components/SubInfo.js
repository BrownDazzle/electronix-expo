import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";
import { data } from "../global/data";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";


export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.secondary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.badge}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.extraLarge,
          color: COLORS.tertiary,
        }}
      >
        K{price}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 88,
        height: 88,
        borderRadius: 20
      }}
    />
  );
};

export const People = ({ images, setCurrentIndex, currentIndex }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {images.map(
        (imgUrl, index) => (
          <TouchableOpacity onPress={() => setCurrentIndex(index)} style={currentIndex === index ? { padding: 5, marginHorizontal: 10, backgroundColor: COLORS.lightGray, borderRadius: 20, justifyContent: 'center', alignItems: 'center' } : { borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginHorizontal: 4 }}>
            <ImageCmp imgUrl={imgUrl} index={index} key={`Product-${index}`} />
          </TouchableOpacity>
        )
      )}
    </View >
  );
};

export const EndDate = ({ data }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.secondary,
        }}
      >
        Booking time
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.secondary,
        }}
      >
        {data.name}
      </Text>
    </View>
  );
};

export const SubInfo = ({ data, setCurrentIndex, currentIndex }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People images={data.image} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
    </View>
  );
};
