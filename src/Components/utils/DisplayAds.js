/* import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-ads';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob'

 Display a banner
<AdMobBanner
adSize="fullBanner"
adUnitID="your-admob-unit-id"
testDevices={[AdMobBanner.simulatorId]}
onAdFailedToLoad={error => console.error(error)}
/>

// Display a DFP Publisher banner
<PublisherBanner
adSize="fullBanner"
adUnitID="your-admob-unit-id"
testDevices={[PublisherBanner.simulatorId]}
onAdFailedToLoad={error => console.error(error)}
onAppEvent={event => console.log(event.name, event.info)}
/>

// Display an interstitial
AdMobInterstitial.setAdUnitID('your-admob-unit-id');
AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

// Display a rewarded ad
AdMobRewarded.setAdUnitID('your-admob-unit-id');
AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());


const DisplayAdScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Display Ad Example</Text>

            <BannerAd
                unitId={TestIds.BANNER}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default DisplayAdScreen;*/
