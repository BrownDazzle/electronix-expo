import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Icon, ListItem, ButtonGroup } from 'react-native-elements';
import CreditCardInput from 'react-native-credit-card';
import { RectButton, CircleButton, PaymentGateway } from '../Components';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import { Image } from 'react-native';
import { popularProducts } from '../constants/dummy';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectTotalAmount, selectTotalQTY } from '../globalRedux/features/CartSlice';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { setAddItemToNotifications } from '../globalRedux/features/NotificationSlice';
import Dropdown from '../Components/utils/DropdownSelect';
import { AdvancedSelect, SingleSelect } from '../Components/utils/Select';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const DetailsHeader = ({ items, navigation }) => {
    const [playing, setPlaying] = useState(false);
    /*useEffect(() => {
      setVideoChapter(param?.courseContent)
    }, [])
    */

    const handleCart = () => {
        navigation.navigate("cart")
    }

    return (
        <View style={{ width: "100%", height: 90, justifyContent: 'center', backgroundColor: 'transparent' }}>
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
                    top: StatusBar.currentHeight
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium, color: COLORS.white }}>Payment Information</Text>
            </TouchableOpacity>
        </View>
    )
};

const CartProducts = ({ products }) => {

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image source={item.image} style={{ width: 180, height: 90, resizeMode: "contain", marginRight: 10 }} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 20, fontWeight: FONTS.light }}>{item.title}</Text>
                <Text style={{ fontSize: SIZES.small, fontWeight: FONTS.semiBold }}>{item.manufacturer}</Text>
                <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold }}>K{item.price}</Text>
                <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.bold, color: COLORS.secondary }}>Qty {item.cartQuantity}</Text>
            </View>
        </View>
    )

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const PaymentScreen = ({ route, navigation }) => {
    const { shipping } = route.params
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch()
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);
    const [phoneNumber, setPhoneNumber] = useState('0973302063');
    const [paymentObject, setSetPaymentObject] = useState({
        items: cartItems,
        totalAmount: totalAmount,
        quantity: totalQTY,
        shippingAddress: shipping,
        paymentMethod: {}
    }
    );

    const handlePaymentSubmit = async () => {
        // Handle the payment submission
        // You can perform validation or API calls here
        const url = "mtn"
        try {

            const response = await axios.post(`http://localhost:8000/api/orders/${url}`, paymentObject);
            //const result = (await GlobalApi.postOrder(url, orderObj)).data
            console.warn(response.data)
            /*if (result.data) {
                navigation.navigate("SuccessScreen", { message: result.data })
                dispatch(setAddItemToNotifications({
                    id: 1,
                    title: 'Order succesfully made!',
                    subTitle: 'See details',
                    createdAt: Date.now()
                }))
            }*/
        } catch (error) {
            console.warn(error)
            navigation.navigate("SuccessScreen", { message: error })
            dispatch(setAddItemToNotifications({
                id: 1,
                title: 'Error: Order was unsuccesful!',
                subTitle: 'See details',
                createdAt: Date.now()
            }))
        }
    };


    const handlePaymentMethod = (index) => {
        setSelectedFilterIndex(index)

        index === 0 ? SetMobile(true) : SetMobile(false)
        index === 1 ? SetCard(true) : SetCard(false)
    }

    useEffect(() => {
        if (cartItems === 0) navigation.navigate('HomeScreen')
    }, [cartItems])

    return (
        <View style={styles.container}>
            <DetailsHeader />
            {/* Shipping Information */}
            <ScrollView>
                <CartProducts products={cartItems} />
                <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold, marginVertical: 10 }}>Shipping Contact</Text>
                    <View style={{ padding: 10, width: '100%', borderWidth: 0.5, borderColor: COLORS.lightGray, borderRadius: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.semiBold, marginRight: 4 }}>Name :</Text>
                            <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.bold }}>{shipping.fullName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.semiBold, marginRight: 4 }}>Phone Number :</Text>
                            <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.bold }}>{shipping.phoneNumber}</Text>
                        </View>
                    </View>

                    <PaymentGateway shipping={shipping} />
                </View>
            </ScrollView>

            <View style={styles.totalContainer}>
                <RectButton title={`Pay K${totalAmount}`} bgColor={COLORS.tertiary} minWidth='70%' handlePress={handlePaymentSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    totalContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        bottom: 0
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderBottomColor: '#ccc',
    },
    filterTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    filterButtonGroup: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        borderWidth: 0,
        height: 36,
    },
    selectedFilterButton: {
        backgroundColor: '#007aff',
    },
    filterItem: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
    },
    selectedFilterItem: {
        backgroundColor: '#007aff',
    },
    filterText: {
        fontSize: 14,
        color: '#888',
    },
    selectedFilterText: {
        color: '#fff',
    },
});
const pickerStyles = StyleSheet.create({
    inputIOS: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
});
export default PaymentScreen;
