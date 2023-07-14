import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Directions = () => {
    const address = '123/45 Chipata Overspill, Lusaka';

    // Coordinates of the barbershop location
    const latitude = -15.355798;
    const longitude = 28.285184;

    return (
        <View style={styles.container}>
            <Text style={styles.address}>{address}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker coordinate={{ latitude: -15.355798, longitude: 28.285184 }} />
                <Marker coordinate={{ latitude: -15.357851, longitude: 28.285114 }} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "white"
    },
    address: {
        fontSize: 16,
        marginBottom: 10,
        color: "white"
    },
    map: {
        width: '100%',
        height: 300,
    },
});

export default Directions;
