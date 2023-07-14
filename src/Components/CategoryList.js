import { View, Text, Touchable } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { categoryData } from '../constants/dummy';
import { FONTS, SHADOWS, SIZES, COLORS } from '../constants'
import { MaterialIcons } from '@expo/vector-icons';
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

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={categoryData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity key={item.id} style={{
                            justifyContent: "center", alignItems: "center", marginRight: 8, paddingBottom: 10, marginBottom: 5
                        }} onPress={() => onPressCategory(item.name)}>
                            <Image source={item.cover}
                                style={{
                                    width: 100
                                    , height: 100, borderRadius: 20,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5, backgroundColor: '#fff',
                                }}
                            />
                            <Text style={{
                                fontSize: SIZES.small,
                                fontWeight: FONTS.bold,
                                color: COLORS.primary,
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