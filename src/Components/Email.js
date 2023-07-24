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
                <Text style={styles.emailButtonText}>Send Email</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    emailButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3498db',
        borderRadius: 5,
    },
    emailButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Email;
