import React, { useState, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { StatusBar } from 'react-native';
import { BottomMenu, CircleButton } from '../Components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersItems, selectOrdersState, setCloseOrders, setOpenOrders } from '../globalRedux/features/OrdersSlice';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import moment from 'moment';


function OrderDetails({ route }) {
    const { selectedOrder } = route.params
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const ifOrdersState = useSelector(selectOrdersState);


    const onBottomToggle = () => {
        navigation.navigate('OrdersScreen')
    };


    return (
        <>
            <BottomMenu />
            <View style={styles.bottomContainer}>
                <Octicons name="dash" size={44} color="black" style={{ alignSelf: 'center' }} />
                <View style={styles.bottomSheetContent}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.orderDetailsText}>Order ID: {selectedOrder.id.slice(0, 10)}...</Text>
                        <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.light, color: COLORS.lightGray }}>Order Date: {moment(selectedOrder.createdAt).fromNow()}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onBottomToggle()}>
                        <AntDesign name="closecircleo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ flex: 1, paddingHorizontal: 30 }}>
                        <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Items</Text>
                        {selectedOrder.items.map((item, index) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 10, borderWidth: 0.5, borderColor: COLORS.lightGray, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, }} key={index}>
                                <Image source={item.image} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                                <Text>{item.title}</Text>
                                <Text>{item.cartQuantity}</Text>
                                <Text>K{item.price}</Text>
                            </View>
                        ))}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Quantity: {selectedOrder.quantity}</Text>
                            <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Total Amount: K{selectedOrder.totalAmount}</Text>
                        </View>
                        <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5, marginTop: 20 }}>Shipping Details</Text>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Names:</Text>
                            <Text style={{ marginLeft: 5, color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>{selectedOrder.shippingAddress.fullName}</Text>
                        </View>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Phone Number:</Text>
                            <Text style={{ marginLeft: 5, color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>{selectedOrder.shippingAddress.phoneNumber}</Text>
                        </View>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>City:</Text>
                            <Text style={{ marginLeft: 5, color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>{selectedOrder.shippingAddress.city}</Text>
                        </View>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Address:</Text>
                            <Text style={{ marginLeft: 5, color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>{selectedOrder.shippingAddress.address}</Text>
                        </View>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.small, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Powered by</Text>
                            <Text style={{ marginLeft: 5, color: COLORS.primary, fontSize: SIZES.font, fontWeight: FONTS.light, marginBottom: 5, marginLeft: 5 }}>ActsCloud Inc.</Text>
                        </View>
                    </View>
                    <View style={{ height: 50 }}></View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: COLORS.white,
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        marginHorizontal: 2,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 14,
        color: '#888',
    },
    bottomSheetContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 0.5
    },
    orderDetailsText: {
        fontSize: SIZES.large,
        fontWeight: FONTS.semiBold,
        color: COLORS.gray
    },
})

export default OrderDetails