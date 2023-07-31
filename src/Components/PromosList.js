import { View, Text } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Shared/GlobalApi'
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../constants';
import { promotions } from '../constants/dummy';

export default function PromosList() {

    const [videoList, setVideoList] = useState([]);
    const navigation = useNavigation();
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const viewableItemsChangedRef = useRef(({ viewableItems }) => {
        // Get the current index of the visible item
        const visibleIndex = viewableItems[0]?.index || 0;
        setCurrentIndex(visibleIndex);
    });

    useEffect(() => {
        // Auto-slide effect
        const autoSlide = setInterval(() => {
            const nextIndex = (currentIndex + 1) % promotions.length;
            flatListRef.current.scrollToIndex({ index: nextIndex });
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [currentIndex]);

    useEffect(() => {
        // Check if reached the last item and reset to the first item
        if (currentIndex === promotions.length - 1) {
            setTimeout(() => {
                flatListRef.current.scrollToIndex({ index: 0 });
                setCurrentIndex(0);
            }, 500); // Add a small delay to ensure smooth transition
        }
    }, [currentIndex]);


    useEffect(() => {
        getVideoCourse();
    }, [])
    const getVideoCourse = async () => {
        const resp = (await GlobalApi.getVideoCourse()).data;
        const result = resp.data.map((item) => ({
            id: item.id,
            name: item.attributes.title,
            description: item.attributes.description,
            image: item.attributes.image.data.attributes.url,
            Topic: item.attributes.VideoTopic
        }))
        setVideoList(result);
        console.log(result)
    }
    const onPressCourse = (course) => {

        navigation.navigate('course-detail', {
            courseData: course,
            courseType: 'video'
        })
    }
    return (
        <View style={{ marginTop: 15, marginBottom: 20, paddingLeft: 15 }}>
            <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.bold, color: COLORS.secondary, marginBottom: 10, paddingLeft: 10 }}>Promotions</Text>
            <FlatList
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                pagingEnabled
                onViewableItemsChanged={viewableItemsChangedRef.current}
                data={promotions}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onPressCourse(item)} key={item.id}>
                        <Image source={item.cover}
                            style={{
                                width: 210, height: 120,
                                marginRight: 10, borderRadius: 7
                            }} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}