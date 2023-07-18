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
//import ProfileScreen from '../screens/ProfileScreen.js';

import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase.js';
const AuthenticatedUserContext = createContext({});

import SignIn from '../screens/SIgnIn.js';
import SignUp from '../screens/SignUp.js';
import { Provider } from 'react-redux';
import store from '../globalRedux/store.jsx';



const Home = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Home.Navigator>
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
            {/*  <Home.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />*/}
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

