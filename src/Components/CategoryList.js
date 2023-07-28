import { View, Text, Touchable } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { categoryData } from '../constants/dummy';
import { FONTS, SHADOWS, SIZES, COLORS } from '../constants'
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategoryList() {
    const navigation = useNavigation()
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
    const onPressCategory = (category) => {
        navigation.navigate('Category-Screen', { category })
    }

    const subCategories = {
        title: 'Category',
        options: [
            {
                name: 'Phones',
                path: 'phones',
                icon: <MaterialIcons name="mobile-screen-share" size={44} color="black" />,
            },
            {
                name: 'Computers',
                path: 'computers',
                icon: <Entypo name="laptop" size={44} color="black" />,
            },
            {
                name: 'Headphones',
                path: 'headphones',
                icon: <Ionicons name="headset-outline" size={44} color="black" />,
            },
            {
                name: 'Earphones',
                path: 'earphones',
                icon: <SimpleLineIcons name="earphones-alt" size={44} color="black" />,
            },
            {
                name: 'Speakers',
                path: 'speakers',
                icon: <MaterialCommunityIcons name="speaker" size={44} color="black" />,
            },
            {
                name: 'Accesories',
                path: 'accessories',
                icon: <AntDesign name="Safety" size={44} color="black" />,
            },
        ]
    };

    return (
        <View style={{ marginTop: 10, paddingLeft: 20 }}>
            <FlatList
                data={subCategories.options}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity key={item.id} style={{
                            justifyContent: "center", alignItems: "center", marginRight: 18, paddingBottom: 10, marginBottom: 5
                        }} onPress={() => onPressCategory(item.name)}>
                            {item.icon}
                            <Text style={{
                                fontSize: SIZES.small,
                                fontWeight: FONTS.bold,
                                color: COLORS.secondary,
                                marginTop: 5
                            }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            />
        </View>
    )
}