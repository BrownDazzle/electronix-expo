import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { ImageBackground } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { RectButton } from '../Components';


const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true
});

const rewardedInterstitial = RewardedInterstitialAd.createForAdRequest(TestIds.REWARDED_INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true
});

const SuccessScreen = ({ route, navigation }) => {
    const [interstitialLoaded, setInterstitialLoaded] = useState(false);
    const [rewardedInterstitialLoaded, setRewardedInterstitialLoaded] = useState(false);

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
        const unsubscribeInterstitialEvents = loadInterstitial();
        const unsubscribeRewardedInterstitialEvents = loadRewardedInterstitial();

        return () => {
            unsubscribeInterstitialEvents();
            unsubscribeRewardedInterstitialEvents();
        };
    }, [])


    const homePress = () => {
        // Navigate to the booking screen
        navigation.navigate('HomeScreen');
    };


    return (
        <View style={styles.container}>
            <Image source={assets.badge} style={styles.successIcon} />
            <Text style={styles.successText}>Payment Successful!</Text>
            <Text style={styles.descriptionText}>Thank you for your payment. Your order has been confirmed.</Text>
            {rewardedInterstitialLoaded ? (<View

                style={{
                    width: "100%",
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    zIndex: 1,
                    bottom: 5
                }}
            >
                <RectButton bgColor={COLORS.primary} minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} title="Continue Shopping!" handlePress={() => { homePress(); rewardedInterstitial.show() }} />
            </View>) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.tertiary
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successIcon: {
        width: 150,
        height: 450,
        marginBottom: 30,
    },
    successText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "white"
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
});

export default SuccessScreen;
