import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NFTTitle } from '../SubInfo';
import { COLORS, FONTS, SIZES } from '../../constants';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../../globalRedux/features/CartSlice';
import ToastManager from 'expo-react-native-toastify';

const ProductCard = ({ product }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const onPressProduct = (product) => {
        navigation.navigate('DetailScreen', { product })
    }

    const { id, title, manufacturer, price, image } = product

    const onAddToCart = () => {
        const item = { id, title, image, price, manufacturer };
        dispatch(setAddItemToCart(item));
    };

    const handleBuy = () => {
        // Navigate to the booking screen
        onAddToCart()
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPressProduct(product)}>
                <Image source={product.image} style={styles.image} />
            </TouchableOpacity>
            <View>
                <NFTTitle
                    title={product.title}
                    subTitle={product.manufacturer}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.font}
                />
                <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold, marginTop: 5 }}>k{product.price}</Text>
            </View>
            <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={styles.starButton}
                    >
                        <FontAwesome
                            name={product.rating >= item ? 'star' : 'star-o'}
                            size={12}
                            color={product.rating >= item ? COLORS.blueish : '#ccc'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <TouchableOpacity onPress={() => onAddToCart()}>
                    <FontAwesome5 name="plus" size={12} color={COLORS.tertiary} style={{
                        position: "absolute",
                        bottom: 8,
                        left: -5,

                    }} />
                    <FontAwesome5 name="opencart" size={28} color={COLORS.tertiary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleBuy()}>
                    <Text style={{ padding: 5, borderRadius: 8, color: COLORS.white, backgroundColor: COLORS.tertiary, fontSize: SIZES.font, fontWeight: FONTS.semiBold }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 170,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 6
    },
    starButton: {
        marginRight: 10,
    },
});

export default ProductCard;
