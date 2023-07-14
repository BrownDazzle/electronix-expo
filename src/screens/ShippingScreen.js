import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { RectButton, CircleButton, Directions } from '../Components';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';

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


        <View style={{ width: "100%", height: 90, justifyContent: 'center' }}>

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
                <Text style={{ color: COLORS.white, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium }}>Shipping Address</Text>
            </TouchableOpacity>
        </View>
    )
};

const ShippingScreen = ({ navigation }) => {

    const [shipping, setShipping] = useState({
        fullName: '',
        address: '',
        city: '',
        phoneNumber: ''
    })

    const cityData = [
        { label: "Lusaka", value: "Lusaka" },
        { label: "Kitwe", value: "Kitwe" },
        { label: "Kabwe", value: "Kabwe" },
        { label: "Chingola", value: "Chingola" },
        { label: "Mufulira", value: "Mufulira" },
        { label: "Livingstone", value: "Livingstone" },
        { label: "Luanshya", value: "Luanshya" },
        { label: "Chipata", value: "Chipata" },
        { label: "Kasama", value: "Kasama" },
        { label: "Ndola", value: "Ndola" },
        // Add more cities as needed
    ];

    const handleCityChange = (value) => {
        setShipping({ ...shipping, city: value })
        // Perform additional logic based on city selection if needed
    };

    const handleShippingInfoSubmit = () => {
        // Handle the shipping information submission
        // You can perform validation or API calls here


        navigation.navigate("Payment", { shipping })
    };



    return (
        <View style={styles.container}>

            <DetailsHeader />
            <ScrollView>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={shipping.fullName}
                    onChangeText={(value) => setShipping({ ...shipping, fullName: value })}

                />
                {!!shipping.nameError && (
                    <Text style={{ color: "red" }}>{shipping.nameError}</Text>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={shipping.phoneNumber}
                    onChangeText={(value) => setShipping({ ...shipping, phoneNumber: value })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Local Address"
                    value={shipping.address}
                    onChangeText={(value) => setShipping({ ...shipping, address: value })}
                />
                <RNPickerSelect
                    placeholder={{ label: 'Select a city...', value: null }}
                    items={cityData}
                    onValueChange={handleCityChange}
                    style={pickerStyles}
                    value={shipping.city}
                />
                {shipping.city && (<Directions />)}

            </ScrollView>

            <View style={styles.totalContainer}>
                <RectButton title='Back' bgColor={COLORS.primary} minWidth='40%' handlePress={() => navigation.goBack()} />
                <RectButton title='Go To Payment' bgColor={COLORS.tertiary} minWidth='40%' handlePress={() => {
                    if (shipping.fullName.trim() === "") {
                        setShipping(() => ({ nameError: "Input required." }));
                    } else {
                        setShipping(() => ({ nameError: null }));
                    }
                    handleShippingInfoSubmit()
                }} />
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
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        bottom: 0
    },
    totalText: {
        fontSize: 18,
        fontWeight: FONTS.semiBold,
        marginRight: 5
    },
    totalAmount: {
        fontSize: 25,
        fontWeight: FONTS.semiBold,
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

export default ShippingScreen;
