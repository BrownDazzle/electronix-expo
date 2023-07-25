import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { COLORS, FONTS, SIZES } from '../constants';
import { Image } from 'react-native';
import { RectButton } from '../Components';
import { ScrollView } from 'react-native';

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSignIn = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log('SignIn success'))
                .catch(err => console.log(`SignIn err: ${err}`));
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 30 }}>
                    <Image source={require('../../assets/images/banner1.png')} style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 10, }} />
                </View>
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={{ paddingBottom: 15, fontSize: SIZES.small, fontWeight: FONTS.semiBold, color: COLORS.white, alignSelf: 'center' }}>Enter correct crendentials.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <RectButton title='Login' bgColor={COLORS.blueish} minWidth='20%' handlePress={() => onHandleSignIn()} />
                <Text style={{ fontSize: SIZES.font, fontWeight: FONTS.light, color: COLORS.white, marginVertical: 10, alignSelf: 'center' }}>Or</Text>
                <RectButton title='Go to Sign Up' bgColor={COLORS.primary} minWidth='20%' handlePress={() => navigation.navigate('SignUp')} />

                <Text style={{ paddingVertical: 10, fontSize: SIZES.small, fontWeight: FONTS.semiBold, color: COLORS.white, alignSelf: 'center' }}>Copyright @2023</Text>
                <View style={{ height: 30 }}></View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.tertiary,
        paddingTop: 20,
        paddingHorizontal: 30
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
        alignSelf: 'center',
        paddingBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: COLORS.white
    },
});