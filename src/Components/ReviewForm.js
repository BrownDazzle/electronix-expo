import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Rating from './Rating';

const ReviewForm = ({ isVisible, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        // Perform validation or additional logic here before submitting the review
        const reviewData = {
            name,
            comment,
            rating,
        };
        onSubmit(reviewData);
        onClose();
    };

    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.container}>
                <Text style={styles.title}>Write Review</Text>
                <Rating rating={rating} onSelectRating={handleRatingSelect} />
                <TextInput
                    style={styles.input}
                    placeholder="Your Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={[styles.input, styles.commentInput]}
                    placeholder="Write your comment"
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    multiline
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
    commentInput: {
        height: 100,
    },
    submitButton: {
        backgroundColor: '#2ecc71',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ReviewForm;
