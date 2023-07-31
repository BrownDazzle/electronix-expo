import React, { useState, useEffect } from 'react';
import GlobalApi from '../Shared/GlobalApi';
import { Icon, ListItem, ButtonGroup } from 'react-native-elements';
import CreditCardInput from 'react-native-credit-card';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Flutterwave from 'flutterwave-react-native';
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { RectButton } from './Button';
import { AdvancedSelect } from './utils/Select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectTotalAmount, selectTotalQTY } from '../globalRedux/features/CartSlice';
import { setAddItemToNotifications } from '../globalRedux/features/NotificationSlice';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const PaymentGateway = ({ paymentObject }) => {
    const navigation = useNavigation()

    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [mobile, SetMobile] = useState(false)
    const [card, SetCard] = useState(false)

    const [cardNumber, setCardNumber] = useState('');
    const [network, setNetwork] = useState('');
    const [creditCardData, setCreditCardData] = useState(null);



    const filters = [
        { id: 1, name: 'Mobile Money' },
        { id: 2, name: 'Visa Card' },
        // Add more filters as needed
    ];
    const networkData = [
        { key: 1, value: "Choose Network", disabled: true },
        { key: 2, value: "Airtel" },
        { key: 3, value: "MTN" },
        { key: 4, value: "Zamtel" },
    ]

    const handlePaymentMethod = (index) => {
        setSelectedFilterIndex(index)

        index === 0 ? SetMobile(true) : SetMobile(false)
        index === 1 ? SetCard(true) : SetCard(false)
    }



    const handlePayment = async () => {
        try {
            const response = await Flutterwave.initiatePayment({
                tx_ref: 'unique_transaction_reference',
                amount: amount,
                currency: 'ZMW', // Replace with appropriate currency code
                payment_options: 'mobilemoney',
                customer: {
                    email: 'customer@example.com',
                    phone_number: phoneNumber,
                    name: 'Customer Name',
                },
            });
            console.log(response);

            response && navigation.navigate('SuccessScreen')
            // Handle the response and update the app's state accordingly
        } catch (error) {
            console.error(error);
            // Handle any errors that occur during the payment process
        }
    };


    return (
        <View style={styles.container}>
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
            {mobile && (<AdvancedSelect data={networkData} state={network} setState={setNetwork} />)}
            {mobile && network && (<TextInput
                style={styles.input}
                placeholder={`Enter Number`}
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

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "white"
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
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
    button: {
        backgroundColor: '#2ecc71',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PaymentGateway;
