import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const StoreMenu = () => {
    const categories = [
        'Category',
        'New Arrivals',
        'Trending',
        'Nearest Store',
        'Settings',
        'Policy',
        'Help',
    ];

    const handleCategoryPress = (category) => {
        // Handle category press logic
        console.log('Selected category:', category);
    };

    return (
        <View style={styles.container}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.categoryButton}
                    onPress={() => handleCategoryPress(category)}
                >
                    <Ionicons name="notifications-outline" size={28} color={COLORS.primary} />
                    <Text style={styles.categoryText}>{category}</Text>
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
        color: COLORS.secondary
    },
});

export default StoreMenu;
