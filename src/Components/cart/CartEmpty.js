import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { Image } from 'react-native';
import { RectButton } from '../Button';
import BottomMenu from '../BottomMenu';
import { ScrollView } from 'react-native';

const CartEmpty = () => {

    const handleHome = () => {
        navigation.navigate("HomeScreen")
    }

    return (
        <>
            <BottomMenu />
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.message}>Your basket is empty</Text>
                    <Image source={require('../../../assets/package.png')} style={{ width: '100%', height: 300, resizeMode: 'cover', borderRadius: 20, marginVertical: 30, marginHorizontal: 20 }} />
                    <RectButton title='Continue shopping' bgColor={COLORS.tertiary} minWidth='80%' handlePress={handleHome} />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    message: {
        fontSize: SIZES.extraLarge,
        fontWeight: FONTS.semiBold,
    },
});

export default CartEmpty;
