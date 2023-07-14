import { Ionicons, AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../globalRedux/features/CartSlice';
import { COLORS } from '../../constants';

function CartItem({ item: { id, manufacturer, title, image, price, cartQuantity } }) {
    const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(setRemoveItemFromCart({ id, manufacturer, title, image, price, cartQuantity }))
    }

    const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItemQTY({ id, manufacturer, title, image, price, cartQuantity }))
    }
    const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItemQTY({ id, manufacturer, title, image, price, cartQuantity }))
    }


    return (
        <View style={styles.cartItem}>
            <Image source={image} style={{ width: 70, height: 70, borderWidth: 0.5, borderColor: COLORS.secondary, borderRadius: 15, resizeMode: "cover" }} />
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.cartItemName}>{title}</Text>
                <Text style={styles.cartItemPrice}>K{price}</Text>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity style={{ marginRight: 4 }} onPress={() => onDecreaseItemQTY()}>
                        <AntDesign name="minuscircle" size={28} color="black" />
                    </TouchableOpacity>
                    <View style={{ width: 28, height: 28, marginRight: 4, justifyContent: 'center', alignItems: 'center', borderRadius: 18, backgroundColor: 'black', }}>
                        <Text style={{ color: COLORS.white, alignSelf: 'center' }}>{cartQuantity}</Text>
                    </View>
                    <TouchableOpacity style={{ marginRight: 4 }} onPress={() => onIncreaseItemQTY()}>
                        <AntDesign name="pluscircle" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => onRemoveItem()}>
                <Ionicons name="trash-bin" size={28} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cartList: {
        padding: 20,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemPrice: {
        fontSize: 16,
    },
})