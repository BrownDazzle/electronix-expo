import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Icon, ListItem, ButtonGroup } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import CreditCardInput from 'react-native-credit-card';
import { RectButton, CircleButton, PaymentGateway } from '../Components';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import { Image } from 'react-native';
import { popularProducts } from '../constants/dummy';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalAmount, selectTotalQTY } from '../globalRedux/features/CartSlice';

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
            <View style={{ flexDirection: 'row' }}>
                <Image source={item.image} style={{ width: 180, height: 90, resizeMode: "contain", marginRight: 10 }} />
                <Text style={{ position: 'absolute', bottom: 12, right: 35, fontSize: SIZES.font, fontWeight: FONTS.bold, color: COLORS.secondary }}>Qty {item.cartQuantity}</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 20, fontWeight: FONTS.light }}>{item.title}</Text>
                <Text style={{ fontSize: SIZES.small, fontWeight: FONTS.semiBold }}>{item.manufacturer}</Text>
                <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold }}>K{item.price}</Text>
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
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);

    const orderObj = {
        items: cartItems,
        totalAmount: totalAmount,
        quantity: totalQTY,
        shippingAddress: shipping,
    }

    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [mobile, SetMobile] = useState(false)
    const [card, SetCard] = useState(false)

    const [cardNumber, setCardNumber] = useState('');
    const [network, setNetwork] = useState('');
    const [creditCardData, setCreditCardData] = useState(null);

    const handleSubmit = () => {
        if (creditCardData && creditCardData.valid) {
            // Payment form is valid, perform payment logic
            console.log('Credit card data:', creditCardData);
        } else {
            // Payment form is invalid, display error or prompt for valid input
            console.log('Invalid credit card data');
        }
    };

    const handlePaymentSubmit = () => {
        // Handle the payment submission
        // You can perform validation or API calls here

        navigation.navigate("SuccessScreen")
    };

    const filters = [
        { id: 1, name: 'Mobile Money' },
        { id: 2, name: 'Visa Card' },
        // Add more filters as needed
    ];

    const networkOptions = [
        { label: "Airtel", value: "Airtel" },
        { label: "MTN", value: "MTN" },
        { label: "Zamtel", value: "Zamtel" },
    ]

    const handleNetworkChange = (value) => {
        setNetwork(value);
        // Perform additional logic based on network selection if needed
    };

    const handlePaymentMethod = (index) => {
        setSelectedFilterIndex(index)

        index === 0 ? SetMobile(true) : SetMobile(false)
        index === 1 ? SetCard(true) : SetCard(false)
    }

    return (
        <View style={styles.container}>
            <DetailsHeader />
            {/* Shipping Information */}
            <ScrollView>
                <CartProducts products={cartItems} />
                <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold, marginVertical: 10 }}>Shipping Contact</Text>
                <View style={{ padding: 10, width: '100%', borderWidth: 0.5, borderColor: COLORS.secondary, borderRadius: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold, marginRight: 4 }}>Name :</Text>
                        <Text style={{ fontSize: SIZES.small, fontWeight: FONTS.bold }}>{shipping.fullName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold, marginRight: 4 }}>Phone Number :</Text>
                        <Text style={{ fontSize: SIZES.small, fontWeight: FONTS.bold }}>{shipping.phoneNumber}</Text>
                    </View>
                </View>
                {/* Payment Options */}
                <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold, marginVertical: 10 }}>Choose Payment Method</Text>
                <View style={styles.filterContainer}>
                    <ButtonGroup
                        buttons={filters.map((filter) => filter.name)}
                        selectedIndex={selectedFilterIndex}
                        onPress={(index) => handlePaymentMethod(index)}
                        selectedButtonStyle={styles.selectedFilterButton}
                        containerStyle={styles.filterButtonGroup}
                    />
                </View>
                {mobile && (<RNPickerSelect
                    placeholder={{ label: 'Select Network...', value: null }}
                    items={networkOptions}
                    onValueChange={handleNetworkChange}
                    style={pickerStyles}
                    value={network}
                />)}
                {mobile && network && (<TextInput
                    style={styles.input}
                    placeholder={`${network} Number`}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />)}
                {card && (<CreditCardInput
                    requiresName
                    requiresCVC
                    cardScale={1}
                    onChange={(data) => setCreditCardData(data)}
                    style={{ alignSelf: 'center', marginBottom: 5 }}
                />)}

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
        padding: 20,
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
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
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
