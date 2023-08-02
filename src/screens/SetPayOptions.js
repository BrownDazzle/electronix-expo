import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { RectButton, CircleButton, Directions } from '../Components';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { Icon, ListItem, ButtonGroup } from 'react-native-elements';
import { MultipleSelect, SingleSelect, AdvancedSelect } from '../Components/utils/Select';
import CreditCardInput from 'react-native-credit-card';


const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true
});

const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(TestIds.REWARDED_INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true
});

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
                <Text style={{ color: COLORS.white, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium }}>Edit Payment Options</Text>
            </TouchableOpacity>
        </View>
    )
};

const SetPayOptions = ({ navigation }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [network, setNetwork] = useState('');
    const [creditCardData, setCreditCardData] = useState({
        number: '',
        name: '',
        cvc: '',
        expiry: ''
    });

    const [mobile, SetMobile] = useState(false)
    const [card, SetCard] = useState(false)

    const [selected, setSelected] = useState(undefined);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
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
    const onItemSelected = (index) => {
        setSelectedItem(index);
    };

    const [shipping, setShipping] = useState({
        fullName: 'Collins Muna',
        address: '140/3 LA',
        city: 'Ndola',
        phoneNumber: '098977676'
    })

    const cityData = [
        { key: 0, value: "Choose City", disabled: true },
        { key: 1, value: "Lusaka" },
        { key: 2, value: "Kitwe" },
        { key: 3, value: "Kabwe" },
        { key: 4, value: "Chingola" },
        { key: 5, value: "Mufulira" },
        { key: 6, value: "Livingstone" },
        { key: 7, value: "Luanshya" },
        { key: 8, value: "Chipata" },
        { key: 9, value: "Kasama" },
        { key: 10, value: "Ndola" },
        // Add more cities as needed
    ];

    const handleCityChange = (value) => {
        setShipping({ ...shipping, city: value })
        // Perform additional logic based on city selection if needed
    };

    const handleShippingInfoSubmit = () => {
        // Handle the shipping information submission
        // You can perform validation or API calls here
        if (!shipping.fullName) {
            setErrorMessage('Full name required!')
            setInputValue('fullName')
            return
        }

        if (!shipping.phoneNumber) {
            setErrorMessage('Phone number required!')
            setInputValue('phoneNumber')
            return
        }
        if (!shipping.address) {
            setErrorMessage('Address required!')
            setInputValue('address')
            return
        }
        if (!shipping.city) {
            setErrorMessage('City required!')
            setInputValue('city')
            return
        }
        if (shipping.address && shipping.city && shipping.fullName && shipping.phoneNumber) navigation.navigate("Payment", { shipping })
        rewardedInterstitial.show()
    };

    const handlePaymentMethod = (index) => {
        setSelectedFilterIndex(index)

        index === 0 ? SetMobile(true) : SetMobile(false)
        index === 1 ? SetCard(true) : SetCard(false)
    }

    return (
        <View style={styles.container}>

            <DetailsHeader />
            <ScrollView>
                <View style={{ flex: 1, paddingHorizontal: 30 }}>
                    <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.semiBold, marginBottom: 10, marginLeft: 5, marginTop: 20 }}>Choose Payment Method</Text>
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
                    {card && (
                        <>
                            <CreditCardInput
                                // imageFront={require('./images/card-front.png')}
                                // imageBack={require('./images/card-back.png')}
                                shiny={false}
                                bar={false}
                                focused={creditCardData.number}
                                number={creditCardData.number}
                                name={creditCardData.name}
                                expiry={creditCardData.expiry}
                                cvc={creditCardData.cvc}
                                requiresName
                                requiresCVC
                                cardScale={1}
                                onChange={(data) => setCreditCardData(data)}
                                style={{ alignSelf: 'center', marginBottom: 5 }}
                            />
                            <View style={{ flex: 1, paddingRight: 30, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <View style={{ width: '100%', marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                                    <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Number:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Card Number'
                                        value={creditCardData.number}
                                        onChangeText={(value) => setCreditCardData({ ...creditCardData, number: value })}

                                    />
                                </View>
                                <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                                    <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Name:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Card Names'
                                        value={creditCardData.name}
                                        onChangeText={(value) => setCreditCardData({ ...creditCardData, name: value })}
                                    />
                                </View>
                                <View style={{ marginBottom: 10, paddingBottom: 10, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray, alignItems: 'center' }}>
                                    <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5, }}>CVC:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Cvc e.g 435'
                                        value={creditCardData.cvc}
                                        onChangeText={(value) => setCreditCardData({ ...creditCardData, cvc: value })}
                                    />
                                </View>
                                <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Expiry:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Expiry date'
                                        value={creditCardData.expiry}
                                        onChangeText={(value) => setCreditCardData({ ...creditCardData, expiry: value })}
                                    />
                                </View>
                            </View>
                        </>
                    )}
                    <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.semiBold, marginBottom: 10, marginLeft: 5, marginTop: 20 }}>Shipping Details</Text>
                    <View style={{ flex: 1, paddingRight: 30 }}>
                        <View style={{ width: '100%', marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Names:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Full Name'
                                value={shipping.fullName}
                                onChangeText={(value) => setShipping({ ...shipping, fullName: value })}

                            />
                        </View>
                        <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Contact:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Phone Number'
                                value={shipping.phoneNumber}
                                onChangeText={(value) => setShipping({ ...shipping, phoneNumber: value })}
                            />
                        </View>
                        <View style={{ marginBottom: 10, paddingBottom: 10, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5, marginRight: 45, alignSelf: 'baseline' }}>City:</Text>
                            <View>
                                <SingleSelect data={cityData} shipping={shipping} setShipping={setShipping} />
                            </View>
                        </View>
                        <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.font, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Address:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Local Address'
                                value={shipping.address}
                                onChangeText={(value) => setShipping({ ...shipping, address: value })}
                            />
                        </View>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                            <Text style={{ color: COLORS.secondary, fontSize: SIZES.small, fontWeight: FONTS.semiBold, marginBottom: 5, marginLeft: 5 }}>Powered by</Text>
                            <Text style={{ marginLeft: 5, color: COLORS.primary, fontSize: SIZES.font, fontWeight: FONTS.light, marginBottom: 5, marginLeft: 5 }}>ActsCloud Inc.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.totalContainer}>
                <RectButton title='Save Changes' bgColor={COLORS.blueish} minWidth='60%' handlePress={() => {
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
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        width: '90%'
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

export default SetPayOptions;
