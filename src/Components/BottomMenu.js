import React from 'react'
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import assets from '../constants/assets'
import { COLORS, FONTS, SIZES } from "../constants";
import { CircleButton, RectButton } from './Button';
import { selectCartItems } from '../globalRedux/features/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotificationState, setOpenNotification } from '../globalRedux/features/NotificationSlice';


function BottomMenu() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const ifCartState = useSelector(selectNotificationState);

    const cartItems = useSelector(selectCartItems);

    const handleNotification = () => {
        dispatch(setOpenNotification({
            notificationState: true
        }))
    }

    const handleProfile = () => {
        // Navigate to the booking screen
        navigation.navigate('ProfileScreen');
        console.log("Profile")
    };

    return (
        <>

            <View style={styles.totalContainer}>
                <TouchableOpacity onPress={() => handleNotification()/*navigation.navigate("HomeScreen")*/} >
                    <MaterialCommunityIcons name="home-circle" size={34} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")} >
                    <AntDesign name="message1" size={24} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")} >
                    {cartItems.length >= 1 ? (<View style={{
                        position: "absolute",
                        bottom: 0,
                        left: -3,
                        height: 20,
                        width: 20,
                        borderRadius: 50,
                        backgroundColor: COLORS.primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        zIndex: 10
                    }}><Text style={{ fontSize: SIZES.small, color: COLORS.white }}>{cartItems.length}</Text></View>) : null}
                    <FontAwesome5 name="opencart" size={30} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleProfile()}>
                    <Image
                        source={assets.person01}
                        resizeMode="contain"
                        style={{ width: 34, height: 34 }}

                    />
                    <Image
                        source={assets.badge}
                        resizeMode="contain"
                        style={{
                            position: "absolute",
                            width: 15,
                            height: 15,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default BottomMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
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
        justifyContent: "space-around",
        alignItems: 'center',
        padding: 10,
        bottom: 0,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: COLORS.white
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
