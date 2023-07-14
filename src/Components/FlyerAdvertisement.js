import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FlyerAdvertisement = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/barber1.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Special Offer</Text>
                <Text style={styles.description}>
                    Get 20% off on your first haircut using our mobile app! Book now and experience the
                    Blueprint Barbershop service.
                </Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    imageContainer: {
        flex: 1,
        height: 165,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    content: {
        flex: 2,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2ecc71',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default FlyerAdvertisement;
