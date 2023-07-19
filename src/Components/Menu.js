import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { AntDesign, Entypo, Feather, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StoreMenu = () => {
    const navigation = useNavigation()
    const [categoryOption, setCategoryOption] = useState([])
    const [title, setTitle] = useState(false)

    const categories = [
        {
            name: 'Category',
            icon: <Ionicons name="md-document-text-outline" size={24} color="black" />,
            chevronIcon: <Ionicons name="arrow-down-circle-outline" size={24} color="black" />
        },
        {
            name: 'New Arrivals',
            screen: 'ArrivalsScreen',
            icon: <Entypo name="price-tag" size={24} color="black" />,
        },
        {
            name: 'Trending',
            screen: 'TrendingScreen',
            icon: <Ionicons name="ios-trending-up-outline" size={24} color="black" />,
        },
        {
            name: 'Nearest Store',
            screen: 'StoresScreen',
            icon: <MaterialCommunityIcons name="map-marker-star-outline" size={24} color="black" />,
        },
        {
            name: 'Settings',
            screen: 'SettingsScreen',
            icon: <Ionicons name="settings-outline" size={24} color="black" />,
        },
        {
            name: 'Policy & Safety',
            screen: 'PolicyScreen',
            icon: <AntDesign name="Safety" size={24} color="black" />,
        },
    ];

    const subCategories = {
        title: 'Category',
        options: [
            {
                name: 'Phones',
                path: 'phones',
                icon: <MaterialIcons name="mobile-screen-share" size={24} color="black" />,
            },
            {
                name: 'Computers',
                path: 'computers',
                icon: <Entypo name="laptop" size={24} color="black" />,
            },
            {
                name: 'Headphones',
                path: 'headphones',
                icon: <Ionicons name="headset-outline" size={24} color="black" />,
            },
            {
                name: 'Earphones',
                path: 'earphones',
                icon: <SimpleLineIcons name="earphones-alt" size={24} color="black" />,
            },
            {
                name: 'Speakers',
                path: 'speakers',
                icon: <MaterialCommunityIcons name="speaker" size={24} color="black" />,
            },
            {
                name: 'Accesories',
                path: 'accessories',
                icon: <AntDesign name="Safety" size={24} color="black" />,
            },
        ]
    };


    const handleCategoryPress = (category) => {
        // Handle category press logic
        setCategoryOption(subCategories.options)
        setTitle(true)
    };

    useEffect(() => {
        setCategoryOption(categories)
    }, [])

    return (
        <View style={styles.container}>
            {categoryOption[0]?.name === 'Phones' ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 12 }}>
                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                            color: COLORS.primary,
                            marginLeft: 18,
                            marginBottom: 5,
                            marginTop: 10
                        }}
                    >
                        Category
                    </Text>
                    <TouchableOpacity onPress={() => setCategoryOption(categories)} style={{ paddingTop: 5 }}>
                        <Ionicons name="arrow-up-circle-outline" size={28} color="black" />
                    </TouchableOpacity>

                </View>) : null}
            {categoryOption.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.categoryButton}
                    onPress={category.chevronIcon ? (() => handleCategoryPress(category)) : (() => {
                        if (categoryOption[0]?.name === 'Phones') {
                            return () => navigation.navigate("Category-Screen", { category })
                        } else {
                            return () => navigation.navigate(`${category.screen}`)
                        }
                    })}

                >
                    {category.icon}
                    <Text style={styles.categoryText}>{category.name}</Text>
                    {category.chevronIcon ? (category.chevronIcon) : null}
                </TouchableOpacity>
            ))}
            <View style={{ borderTopWidth: 0.5, borderTopColor: COLORS.secondary, padding: 20, }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.secondary }}>Advertise</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.secondary }}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.secondary }}>Terms & Conditions</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.secondary, marginTop: 20 }}><AntDesign name="copyright" size={12} color="black" style={{ marginRight: 1 }} />2023 Electronics Store</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flexDirection: 'column',
        paddingVertical: 10,
        position: 'absolute',
        width: 250,
        padding: 10,
        top: 78,
        right: 0,
        zIndex: 600,
        borderBottomLeftRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 5,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryText: {
        fontSize: 16,
        fontWeight: FONTS.semiBold,
        marginLeft: 20,
        marginRight: 70,
        color: COLORS.secondary
    },
});

export default StoreMenu;
