import React from 'react'
import Directions from '../Components/Directions'
import { useNavigation } from '@react-navigation/native';
import { BottomMenu, CircleButton } from '../Components';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { StatusBar, TouchableOpacity, View, Text } from 'react-native';
import MapComponent from '../Components/MapComponent';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import Email from '../Components/Email';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const DetailsHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={{ width: "100%", height: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 40,
                    backgroundColor: COLORS.white,
                    position: "absolute",
                    borderRadius: SIZES.extraLarge,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: SHADOWS.light,
                    alignSelf: "center",
                    top: StatusBar.currentHeight + 10
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium, color: COLORS.primary }}>Nearest Stores</Text>
            </TouchableOpacity>
        </View>
    )
};


function StoresScreen() {
    const phoneNumber = '+260973302063'; // Replace this with the desired phone number

    const handleCallPress = () => {
        const callUrl = `tel:${phoneNumber}`;
        Linking.canOpenURL(callUrl)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(callUrl);
                } else {
                    console.log("Phone call not supported");
                }
            })
            .catch((error) => console.error('Error opening phone app:', error));
    };
    return (
        <>
            <DetailsHeader />
            <BottomMenu />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', marginVertical: 10 }}>
                        <BannerAd
                            unitId={adUnitId}
                            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                            requestOptions={{
                                requestNonPersonalizedAdsOnly: true,
                            }}
                        />
                    </View>

                    <Text style={{ fontSize: SIZES.extraLarge, fontWeight: FONTS.bold, color: COLORS.blueish, marginBottom: 10 }}>
                        With 20+ stores around the country for efficient and quick delivery to our customers.
                    </Text>
                    <Text style={styles.infoText}>
                        Visit your nearest store for product purchase and pick ups.
                    </Text>
                </View>
                <MapComponent />
                <View style={{ justifyContent: 'center', marginVertical: 10 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.FULL_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.infoText}>
                        For any inquiries or assistance, please feel free to contact us at:
                    </Text>
                    <Text style={styles.contactInfo}>Email: customerservice@example.com</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            marginRight: 0, fontSize: SIZES.large,
                            marginBottom: 5,
                            color: COLORS.tertiary,
                            fontWeight: FONTS.light
                        }}>Email us now !</Text>
                        <Email />
                    </View>

                    <Text style={styles.contactInfo}>Phone: +1 (123) 456-7890</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            marginRight: 0, fontSize: SIZES.large,
                            marginBottom: 5,
                            color: COLORS.tertiary,
                            fontWeight: FONTS.light
                        }}>Call us now !</Text>
                        <TouchableOpacity onPress={handleCallPress} style={styles.callButton}>
                            <Entypo name="phone" size={30} color={COLORS.blueish} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.infoText}>Our HeadQuaters Address :</Text>
                    <Text style={styles.address}>
                        123 CBD
                        {'\n'}
                        Lusaka,
                        Zambia
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.FULL_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
                <View style={{ height: 60 }}></View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        fontSize: SIZES.font,
        marginBottom: 5,
        color: COLORS.secondary,
        fontWeight: FONTS.light
    },
    contactInfo: {
        fontSize: SIZES.font,
        marginBottom: 5,
        color: COLORS.secondary,
        fontWeight: FONTS.light
    },
    address: {
        fontSize: SIZES.font,
        marginBottom: 5,
        color: COLORS.secondary,
        fontWeight: FONTS.light
    },
    callButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        width: 80
    },
    callButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default StoresScreen
