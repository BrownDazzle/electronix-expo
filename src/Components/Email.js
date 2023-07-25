import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Mailer from 'react-native-mail';


const Email = () => {
    const handleEmailPress = () => {
        Mailer.mail(
            {
                subject: 'Support Request',
                recipients: ['support@example.com'],
                ccRecipients: [],
                bccRecipients: [],
                body: 'Hi there, \n\nI need some assistance with...',
                isHTML: false,
            },
            (error, event) => {
                if (error) {
                    // Error sending email
                    console.error('Error sending email:', error);
                } else {
                    // Email sent successfully
                    console.log('Email sent:', event);
                }
            }
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleEmailPress} style={styles.emailButton}>
                <MaterialCommunityIcons name="email-edit-outline" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    emailButton: {
        paddingHorizontal: 20,
    },
    emailButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Email;
