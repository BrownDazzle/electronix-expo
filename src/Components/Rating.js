import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ rating, onSelectRating }) => {
    const [selectedRating, setSelectedRating] = useState(rating);

    const handleRatingSelect = (selected) => {
        setSelectedRating(selected);
        onSelectRating(selected);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rate the Experience:</Text>
            <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => handleRatingSelect(item)}
                        style={styles.starButton}
                    >
                        <FontAwesome
                            name={selectedRating >= item ? 'star' : 'star-o'}
                            size={20}
                            color={selectedRating >= item ? '#ffc107' : '#ccc'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    starButton: {
        marginRight: 10,
    },
});

export default Rating;
