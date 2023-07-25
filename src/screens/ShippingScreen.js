import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { RectButton, CircleButton, Directions } from '../Components';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { Picker } from '@react-native-picker/picker';


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
                <Text style={{ color: COLORS.white, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium }}>Shipping Address</Text>
            </TouchableOpacity>
        </View>
    )
};

const ShippingScreen = ({ navigation }) => {
    const [interstitialLoaded, setInterstitialLoaded] = useState(false);
    const [rewardedInterstitialLoaded, setRewardedInterstitialLoaded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const onItemSelected = (index) => {
        setSelectedItem(index);
    };

    const loadRewardedInterstitial = () => {
        const unsubscribeLoaded = rewardedInterstitial.addAdEventListener(
            RewardedAdEventType.LOADED,
            () => {
                setRewardedInterstitialLoaded(true);
            }
        );

        const unsubscribeEarned = rewardedInterstitial.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                console.log(`User earned reward of ${reward.amount} ${reward.type}`);
            }
        );

        const unsubscribeClosed = rewardedInterstitial.addAdEventListener(
            AdEventType.CLOSED,
            () => {
                setRewardedInterstitialLoaded(false);
                rewardedInterstitial.load();
            }
        );

        rewardedInterstitial.load();

        return () => {
            unsubscribeLoaded();
            unsubscribeClosed();
            unsubscribeEarned();
        }
    };

    const loadInterstitial = () => {
        const unsubscribeLoaded = interstitial.addAdEventListener(
            AdEventType.LOADED,
            () => {
                setInterstitialLoaded(true);
            }
        );

        const unsubscribeClosed = interstitial.addAdEventListener(
            AdEventType.CLOSED,
            () => {
                setInterstitialLoaded(false);
                interstitial.load();
            }
        );

        interstitial.load();

        return () => {
            unsubscribeClosed();
            unsubscribeLoaded();
        }
    }

    useEffect(() => {
        const unsubscribeInterstitialEvents = loadInterstitial();
        const unsubscribeRewardedInterstitialEvents = loadRewardedInterstitial();
        return () => {
            unsubscribeInterstitialEvents();
            unsubscribeRewardedInterstitialEvents();
        };
    }, [])


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
                {/* <View>
                    <Text>Selected Item: {data[selectedItem]}</Text>

                    <Picker
                        placeholder={{ label: 'Select Network...', value: null }}
                        selectedValue={selectedItem}
                        onValueChange={onItemSelected}
                        mode="dropdown"
                    >
                        {data.map((item, index) => (
                            <Picker.Item key={index} label={item} value={item} />
                        ))}
                    </Picker>
                    <Picker
                        style={{ height: 200, width: 200 }}
                        selectedValue={selectedItem}
                        itemStyle={{ color: 'black', fontSize: 26 }}
                        onValueChange={onItemSelected}
                    >
                        {data.map((item, index) => (
                            <Picker.Item key={index} label={item} value={index} />
                        ))}
                        </Picker>
                </View>*/}
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
                    rewardedInterstitial.show()
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
