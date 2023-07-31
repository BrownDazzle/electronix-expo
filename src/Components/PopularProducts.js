import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { categoryData, popularProducts } from '../constants/dummy';
import ProductCard from './utils/ProductCard';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../constants';
import ToastManager from 'expo-react-native-toastify';

export default function PopularProducts() {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = async () => {
        const result = (await GlobalApi.getSlider()).data;

        const resp = result.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            image: item.attributes.image.data.attributes.url
        }))

        setSlider(resp)
    }
    return (
        <View style={{ marginTop: 20, paddingLeft: 15 }}>
            <ToastManager />
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: 10 }}>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontWeight: FONTS.bold,
                    fontSize: SIZES.large,
                    color: COLORS.secondary,
                }}>
                    Trending
                </Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
            <FlatList
                data={popularProducts}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ProductCard product={item} />
                )}
            />
        </View>
    )
}