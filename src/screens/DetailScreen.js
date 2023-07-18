import React, { useRef, useState, useCallback, useEffect } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar, PaymentGateway, BottomMenu, ReviewForm } from "../Components";
import { data } from "../global/data";
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Player from "../Components/utils/Player";
import CustomerFeed from "../Components/CustomerFeed";
import RelatedProducts from "../Components/RelatedProducts";
import ToastManager from "expo-react-native-toastify";
import { setAddItemToCart, setDecreaseItemQTY, setIncreaseItemQTY } from "../globalRedux/features/CartSlice";
import { useDispatch } from "react-redux";

import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(TestIds.REWARDED_INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true
});

const DetailsHeader = ({ data, navigation }) => {
    const [playing, setPlaying] = useState(false);
    /*useEffect(() => {
      setVideoChapter(param?.courseContent)
    }, [])
    */

    const handleCart = () => {
        navigation.navigate("cart")
    }

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);

        }
    }, []);
    return (


        <View style={{ width: "100%", height: 320 }}>
            <Player />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
        </View>
    )
};

const DetailScreen = ({ route, navigation }) => {
    const { product } = route.params
    const dispatch = useDispatch()
    const scrollViewRef = useRef(null);

    const [rewardedInterstitialLoaded, setRewardedInterstitialLoaded] = useState(false);


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

    useEffect(() => {
        const unsubscribeRewardedInterstitialEvents = loadRewardedInterstitial();

        return () => {
            unsubscribeRewardedInterstitialEvents();
        };
    }, [])


    const scrollToBottom = () => {
        scrollViewRef?.current?.scrollToEnd({ animated: true });
    }

    const { id, title, manufacturer, price, image } = product

    const onAddToCart = () => {
        const item = { id, title, image, price, manufacturer };
        dispatch(setAddItemToCart(item));
    };

    const handleBuy = () => {
        // Navigate to the booking screen
        onAddToCart()
        navigation.navigate('Cart');
    };

    const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItemQTY({ id, manufacturer, title, image, price }))
    }
    const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItemQTY({ id, manufacturer, title, image, price }))
    }


    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <ToastManager style={{ top: 0 }} />
            <BottomMenu />
            <ScrollView >

                <DetailsHeader data={product} navigation={navigation} />
                <SubInfo data={product} />
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => onAddToCart()} style={{ paddingVertical: 5, paddingHorizontal: 15, borderRadius: 8, color: COLORS.white, backgroundColor: COLORS.tertiary, fontSize: SIZES.font, fontWeight: FONTS.semiBold }}>
                        <FontAwesome5 name="plus" size={12} color={COLORS.white} style={{
                            position: "absolute",
                            bottom: 12,
                            left: 10,

                        }} />
                        <FontAwesome5 name="opencart" size={25} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleBuy(); rewardedInterstitial.show() }}>
                        <Text style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, color: COLORS.white, backgroundColor: COLORS.tertiary, fontSize: SIZES.medium, fontWeight: FONTS.bold }}>Buy Now</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 5 }}>
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => onDecreaseItemQTY()}>
                            <AntDesign name="minuscircle" size={32} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => onIncreaseItemQTY()}>
                            <AntDesign name="pluscircle" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>

                <View style={{ padding: SIZES.font }}>
                    <DetailsDesc data={product} />
                </View>
                <View style={{ justifyContent: 'center', marginVertical: 10, paddingLeft: 50 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>

                <RelatedProducts />
                <View style={{ justifyContent: 'center', marginVertical: 10, paddingLeft: 30 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.LARGE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>

                <CustomerFeed />
                <View style={{ justifyContent: 'center', marginVertical: 10, paddingLeft: 50 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.MEDIUM_RECTANGLE}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
                <View style={{ height: 50 }}>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});