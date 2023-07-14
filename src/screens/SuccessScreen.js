import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { ImageBackground } from 'react-native';
import { RectButton } from '../Components';

const SuccessScreen = ({ route, navigation }) => {
    const homePress = () => {
        // Navigate to the booking screen
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Image source={assets.badge} style={styles.successIcon} />
            <Text style={styles.successText}>Payment Successful!</Text>
            <Text style={styles.descriptionText}>Thank you for your payment. Your order has been confirmed.</Text>
            <View

                style={{
                    width: "100%",
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    zIndex: 1,
                }}
            >
                <RectButton bgColor={COLORS.primary} minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} title="Thank You!" handlePress={homePress} />
            </View>
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
        height: 150,
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
