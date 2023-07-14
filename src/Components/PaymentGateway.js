import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Flutterwave from 'flutterwave-react-native';
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { RectButton } from './Button';


const PaymentGateway = ({ price, payMethod, navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('0973302063');
    const [amount, setAmount] = useState(price);

    console.warn(payMethod)
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
            <Text style={styles.title}>Mobile Money Payment</Text>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "space-between" }}>
                <Image
                    source={require(`../../assets/mtn.png`)}
                    resizeMode="contain"
                    style={{ width: 80, height: 80, marginRight: 20 }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>
            <RectButton bgColor={COLORS.tertiary} minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} title="Pay" handlePress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "white"
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: "white"
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
