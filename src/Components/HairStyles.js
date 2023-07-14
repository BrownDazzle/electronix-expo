import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: titleSize,
                    color: COLORS.white,
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.regular,
                    fontSize: subTitleSize,
                    color: COLORS.white,
                }}
            >
                by {subTitle}
            </Text>
        </View>
    );
};

export const EthPrice = ({ price }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 2 }}
            />
            <Text
                style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    color: COLORS.white,
                }}
            >
                K {price}
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
                marginLeft: index === 0 ? 0 : -SIZES.font,
                flex: 1
            }}
        />
    );
};


const hairStylesArr = [assets.person01, assets.person02, assets.person03, assets.person04, assets.person01, assets.person02, assets.person03, assets.person04]

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

export const People = ({ data, handleCategorySelect }) => {

    const renderGridItem = ({ item }) => {
        return (
            <View style={styles.gridItem} >
                <TouchableOpacity onPress={() => handleCategorySelect(item)} key={item.id}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        color: COLORS.white
                    }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderGridItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                contentContainerStyle={styles.container}
            />
        </>
    );
};

export const EndDate = () => {
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
                    color: COLORS.white,
                }}
            >
                Ending in
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium,
                    color: COLORS.white,
                }}
            >
                12h 30m
            </Text>
        </View>
    );
};

const HairStyles = ({ data, handleCategorySelect }) => {
    return (
        <View
            style={{
                width: "100%",
                paddingHorizontal: 8,
                marginRight: 20,
                marginTop: -SIZES.extraLarge,
                flex: 1,
            }}
        >
            <Text
                style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.extraLarge,
                    color: COLORS.white,
                    textAlign: "center",
                    marginBottom: 40
                }}
            >
                Choose Hairstyle
            </Text>
            <People data={data} handleCategorySelect={handleCategorySelect} />
        </View>
    );
};

export default HairStyles

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 16,
        paddingHorizontal: 8,
    },
    gridItem: {
        width: itemWidth,
        margin: 4,
        aspectRatio: 1, // Maintain aspect ratio of images
        borderRadius: 8,
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",

    },
    image: {
        width: 90,
        height: 90,
    },
});