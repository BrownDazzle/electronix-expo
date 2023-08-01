import React, { useState, createContext, useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js'
import Category from '../screens/Category.js';
import PaymentScreen from '../screens/PaymentScreen.js';
import CartScreen from '../screens/CartScreen.js';
import ShippingScreen from '../screens/ShippingScreen.js';
import DetailScreen from '../screens/DetailScreen.js';
import SuccessScreen from '../screens/SuccessScreen.js';
import ChatScreen from '../screens/ChatScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';

import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase.js';
const AuthenticatedUserContext = createContext({});

import SignIn from '../screens/SIgnIn.js';
import SignUp from '../screens/SignUp.js';
import { Provider } from 'react-redux';
import store from '../globalRedux/store.jsx';
import StoresScreen from '../screens/StoresScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import PolicyScreen from '../screens/PolicyScreen.js';
import Login from '../screens/Login.js';
import OrdersScreen from '../screens/OrdersScreen.js';
import OrderDetails from '../screens/OrderDetails.js';

const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};



const Home = createNativeStackNavigator();

export function HomeStack() {
    const { user, setUser } = React.useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = onAuthStateChanged(
            auth,
            async authenticatedUser => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
                setIsLoading(false);
            }
        );

        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
    }, [user]);


    if (!isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        );
    }

    return (
        <Home.Navigator>
            {user ? (
                <>
                    <Home.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name='SignIn'
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>

                    <Home.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="Category-Screen"
                        component={Category}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="DetailScreen"
                        component={DetailScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="Cart"
                        component={CartScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="Shipping"
                        component={ShippingScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="Payment"
                        component={PaymentScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="SuccessScreen"
                        component={SuccessScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="ChatScreen"
                        component={ChatScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="StoresScreen"
                        component={StoresScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="SettingsScreen"
                        component={SettingsScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="PolicyScreen"
                        component={PolicyScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="OrdersScreen"
                        component={OrdersScreen}
                        options={{ headerShown: false }}
                    />
                    <Home.Screen
                        name="OrderDetails"
                        component={OrderDetails}
                        options={{ headerShown: false }}
                    />
                </>
            )}
        </Home.Navigator>
    )
}

export function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    );
}

