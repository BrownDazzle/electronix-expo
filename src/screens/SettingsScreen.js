import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { BottomMenu, CircleButton } from '../Components';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


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
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium, color: COLORS.primary }}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
};

const SettingsScreen = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <>
            <DetailsHeader />
            <BottomMenu />
            <View style={styles.container}>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <FontAwesome name="credit-card" size={24} color="black" style={{ marginRight: 30 }} />
                    <Text style={styles.settingText}>Set Payment Method</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <FontAwesome5 name="user-lock" size={20} color="black" style={{ marginRight: 30 }} />
                    <Text style={styles.settingText}>Change User Password</Text>
                </TouchableOpacity>
                <View style={styles.settingItem}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Entypo name="location" size={24} color="black" style={{ marginRight: 30 }} />
                        <Text style={styles.settingText}>Set Default Address</Text>
                    </View>
                    <Switch
                        value={isDarkTheme}
                        onValueChange={handleThemeToggle}
                        thumbColor={isDarkTheme ? COLORS.blueish : COLORS.secondary}
                        trackColor={{ false: '#bdc3c7', true: '#34495e' }}
                    />
                </View>
                <View style={styles.settingItem}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" style={{ marginRight: 30 }} />
                        <Text style={styles.settingText}>Change Theme</Text>
                    </View>
                    <Switch
                        value={isDarkTheme}
                        onValueChange={handleThemeToggle}
                        thumbColor={isDarkTheme ? COLORS.blueish : COLORS.secondary}
                        trackColor={{ false: '#bdc3c7', true: '#34495e' }}
                    />
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <AntDesign name="Safety" size={24} color="black" style={{ marginRight: 30 }} />
                    <Text style={styles.settingText}>Legal Policy</Text>
                </TouchableOpacity>

                {/* Add more settings items here */}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingText: {
        fontSize: SIZES.font,
        fontWeight: FONTS.semiBold,
        color: COLORS.secondary
    },
});

export default SettingsScreen;
