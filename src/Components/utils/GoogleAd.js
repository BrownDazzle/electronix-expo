/*import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'react-native-google-mobile-ads';

const GoogleAd = ({ adUnitID, adType }) => {
    const showInterstitialAd = async () => {
        try {
            await AdMobInterstitial.requestAdAsync();
            await AdMobInterstitial.showAdAsync();
        } catch (error) {
            console.error('Error showing interstitial ad:', error);
        }
    };

    const showRewardedAd = async () => {
        try {
            await AdMobRewarded.requestAdAsync();
            await AdMobRewarded.showAdAsync();
        } catch (error) {
            console.error('Error showing rewarded ad:', error);
        }
    };

    return (
        <View style={styles.container}>
            <AdMobBanner adSize="banner" adUnitID={adUnitID} />

            {adType === 'interstitial' && (
                <Button title="Show Interstitial Ad" onPress={showInterstitialAd} />
            )}

            {adType === 'rewarded' && (
                <Button title="Show Rewarded Ad" onPress={showRewardedAd} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GoogleAd;
*/