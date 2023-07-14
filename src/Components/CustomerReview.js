import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from "../constants";
import { FontAwesome } from '@expo/vector-icons';

const CustomerReview = ({ name, rating, review, image }) => {
    const [text, setText] = useState(review.slice(0, 120));
    const [readMore, setReadMore] = useState(false);


    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={styles.starButton}
                    >
                        <FontAwesome
                            name={rating >= item ? 'star' : 'star-o'}
                            size={20}
                            color={rating >= item ? COLORS.blueish : '#ccc'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.review}>{text}
                {!readMore && "..."}
                <Text
                    style={{
                        color: COLORS.primary,
                        fontSize: SIZES.small,
                        fontFamily: FONTS.semiBold,
                    }}
                    onPress={() => {
                        if (!readMore) {
                            setText(review);
                            setReadMore(true);
                        } else {
                            setText(review.slice(0, 120));
                            setReadMore(false);
                        }
                    }}
                >
                    {readMore ? " ...Show Less" : " Read More"}
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    review: {
        fontSize: 14,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    starButton: {
        marginRight: 10,
    },
});

export default CustomerReview;
