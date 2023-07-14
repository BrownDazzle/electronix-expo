import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { assets } from '../../constants';

const Player = ({ url }) => {
    const videoUrl = assets.video1; // Replace with your video URL

    return (
        <View style={styles.container}>
            <Video
                source={videoUrl} // Replace with your video URL or local file path
                style={{ width: "100%", height: "100%" }} // Adjust the dimensions as needed
                useNativeControls
                //shouldPlay
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    videoPlayer: {
        flex: 1,
    },
});

export default Player;
