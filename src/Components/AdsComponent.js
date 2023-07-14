import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AdsComponent = ({ adData, onPress }) => {
    //const { title, description, imageSource } = adData;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={adData.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{adData.name}</Text>
                <Text style={styles.description}>{adData.review}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});

export default AdsComponent;
