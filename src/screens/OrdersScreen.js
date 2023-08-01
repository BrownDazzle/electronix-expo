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
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const DetailsHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={{ width: "100%", height: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 40,
                    backgroundColor: COLORS.primary,
                    position: "absolute",
                    borderRadius: SIZES.extraLarge,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: SHADOWS.light,
                    alignSelf: "center",
                    top: StatusBar.currentHeight + 10
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium, color: COLORS.white }}>Orders Information</Text>
            </TouchableOpacity>
        </View>
    )
};

const OrderItem = ({ order, onOrderPress }) => {
    return (
        <TouchableOpacity onPress={() => onOrderPress(order)} style={{
            flexDirection: 'row', alignItems: 'center', marginBottom: 5, borderBottomColor: COLORS.lightGray, borderBottomWidth: 1
        }}>
            <Image source={order.items[0].image} style={{ width: 60, height: 60, resizeMode: 'contain', margin: 10 }} />
            <View style={styles.orderItem}>
                <Text style={styles.orderId}>Order ID: {order.id.slice(0, 10)}...</Text>
                <Text style={styles.orderDate}>Order Date: {moment(order.createdAt).fromNow()}</Text>
                {/* Add other order details you want to display */}
            </View>
        </TouchableOpacity>
    );
};


const ordersData = [
    { orderId: '12345', orderDate: '2023-06-27', orderDetails: 'Order details for ID 12345' },
    { orderId: '67890', orderDate: '2023-06-26', orderDetails: 'Order details for ID 67890' },
    // Add more orders data as needed
];

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const ifOrdersState = useSelector(selectOrdersState);
    const ordersItems = useSelector(selectOrdersItems);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const bottomSheetRef = useRef(null);

    const onBottomToggle = () => {
        dispatch(
            setCloseOrders({
                ordersState: !ifOrdersState,
            })
        );
    };

    const handleOrderPress = (order) => {
        setSelectedOrder(order);
        dispatch(
            setOpenOrders({
                ordersState: !ifOrdersState,
            })
        );

        { ifOrdersState && selectedOrder && navigation.navigate('OrderDetails', { selectedOrder }) }
        //bottomSheetRef.current.expand();
    };

    return (
        <>
            <DetailsHeader />
            <BottomMenu />
            <View style={styles.container}>

                <FlatList
                    data={ordersItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <OrderItem order={item} onOrderPress={handleOrderPress} />}
                />
                <View style={{ justifyContent: 'center', marginVertical: 60, bottom: 0 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },

    orderItem: {
        padding: 10,
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

    },
    orderDetailsText: {
        fontSize: SIZES.large,
        fontWeight: FONTS.semiBold,
        color: COLORS.gray
    },
});

export default OrdersScreen