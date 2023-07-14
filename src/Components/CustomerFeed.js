import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import CustomerReview from './CustomerReview';
import ReviewForm from './ReviewForm'
import { customerReviewData } from '../constants/dummy';
import { RectButton } from './Button';
import { COLORS, FONTS, SIZES } from '../constants';

function CustomerFeed() {
    const [displayCount, setDisplayCount] = useState(3);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

    const handleOpenBottomSheet = () => {
        setBottomSheetVisible(true);
    };

    const handleCloseBottomSheet = () => {
        setBottomSheetVisible(false);
    };

    const handleReviewSubmit = (reviewData) => {
        // Handle the review submission logic
        console.log('Review submitted:', reviewData);
    };

    const handleReviewCount = () => {
        setDisplayCount(displayCount + 3);
    }
    return (
        <>
            <View style={{ flex: 1, paddingBottom: 20 }}>
                <Text style={{
                    fontSize: SIZES.large,
                    fontWeight: FONTS.bold,
                    color: COLORS.primary,
                    marginTop: 20,
                    paddingLeft: 10
                }}>Customer Reviews</Text>
                {customerReviewData.slice(0, displayCount).map((customer) => (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20, marginTop: 10, borderRadius: 8 }}>
                        <CustomerReview
                            name={customer.name}
                            rating={customer.rating}
                            review={customer.review}
                            image={customer.image}
                        />

                    </View>
                ))}
                {displayCount < customerReviewData?.length && (
                    <View style={{ flex: 1, justifyContent: "flex-start", }}>
                        <TouchableOpacity style={styles.openButton} onPress={handleReviewCount}>
                            <Text style={styles.openButtonText}>See more</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={{ flex: 1, paddingHorizontal: 50 }}>
                    <RectButton title={"Write Review"} handlePress={handleOpenBottomSheet} bgColor={COLORS.primary} />
                    <ReviewForm
                        isVisible={bottomSheetVisible}
                        onClose={handleCloseBottomSheet}
                        onSubmit={handleReviewSubmit}
                    />
                </View>
            </View>
        </>
    )
}

export default CustomerFeed