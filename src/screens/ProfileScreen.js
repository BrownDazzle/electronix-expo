
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import React, { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import BottomMenu from '../Components/BottomMenu';

const BottomSheetContent = () => {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.text}>
                {/* Place your scrollable content here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo magna in eros
                egestas tristique. Etiam tristique quam in urna gravida, at pellentesque arcu euismod.
                Pellentesque in iaculis erat, eu dapibus velit. Duis at dictum odio. Sed feugiat justo id
                semper interdum.
            </Text>
        </ScrollView>
    );
};


export default function ProfileScreen({ props }) {
    const navigation = useNavigation()
    const paperTheme = useTheme();
    const bottomSheetRef = useRef(null);

    const handleSnap = (index) => {
        // Handle events when the bottom sheet snaps (optional)
    };


    const categories = [
        {
            name: 'Home',
            screen: "HomeScreen",
            icon: <MaterialCommunityIcons name="home-circle-outline" size={28} color="black" />,
        },
        {
            name: 'Orders',
            screen: "OrdersScreen",
            icon: <FontAwesome name="shopping-basket" size={22} color="black" />,
        },
        {
            name: 'Near Stores',
            screen: "StoresScreen",
            icon: <MaterialCommunityIcons name="map-marker-star-outline" size={24} color="black" />,
        },
        {
            name: 'Set Payment Option',
            screen: 'SetPayOptions',
            icon: <FontAwesome5 name="comment-dollar" size={22} color="black" />,
        },
        {
            name: 'Settings',
            screen: 'SettingsScreen',
            icon: <Ionicons name="settings-outline" size={24} color="black" />,
        },
        {
            name: 'Policy & Safety',
            screen: 'PolicyScreen',
            icon: <AntDesign name="Safety" size={24} color="black" />,
        },

    ];

    const handleCategoryPress = (category) => {
        // Handle category press logic

        navigation.navigate(`${category.screen}`, { category: category.name })
    };

    //const { signOut, toggleTheme } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <BottomMenu />
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                            <Avatar.Image
                                source={assets.person02}
                                size={70}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Text style={styles.title}>Martin Mulenga</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.caption}>
                                    <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.secondary, borderBottomWidth: 0.5, borderBottomColor: COLORS.lightGray, marginRight: 60, marginTop: 3, paddingVertical: 2, alignItems: 'center', flexDirection: 'row' }}><Entypo name="plus" size={14} color="black" /> edit profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingTop: 20, marginTop: 30, borderTopWidth: 0.5, borderTopColor: COLORS.lightGray }}>
                    {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.categoryButton}
                            onPress={() => handleCategoryPress(category)}
                        >
                            {category.icon}
                            <Text style={styles.categoryText}>{category.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ borderTopWidth: 0.5, borderTopColor: COLORS.lightGray, padding: 20, marginHorizontal: 30 }}>
                    <TouchableOpacity style={{
                        paddingVertical: 5,
                        marginVertical: 5,
                        backgroundColor: COLORS.white,
                        borderRadius: 5,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        onPress={() => { }}>
                        <AntDesign name="logout" size={24} color="black" />
                        <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.secondary, marginLeft: 20 }}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={-1} // Start with the sheet closed
                    snapPoints={['10%', '50%', '90%']} // Define the snap points for the bottom sheet
                    onChange={handleSnap} // Event listener when the bottom sheet snaps (optional)
                >
                    {/* Content inside the BottomSheet */}
                    <BottomSheetContent />
                </BottomSheet>
                <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        paddingLeft: 20
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 5,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryText: {
        fontSize: 16,
        fontWeight: FONTS.semiBold,
        marginLeft: 20,
        marginRight: 70,
        color: COLORS.secondary
    },
    contentContainer: {
        padding: 16,
    },
    text: {
        fontSize: 16,
    },
});