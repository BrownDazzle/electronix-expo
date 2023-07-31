import { View, Text } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import GlobalApi from '../Shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { bannerData, categoryData } from '../constants/dummy';

export default function Slider() {
  const [slider, setSlider] = useState([])
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
      const nextIndex = (currentIndex + 1) % bannerData.length;
      flatListRef.current.scrollToIndex({ index: nextIndex });
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  useEffect(() => {
    // Check if reached the last item and reset to the first item
    if (currentIndex === bannerData.length - 1) {
      setTimeout(() => {
        flatListRef.current.scrollToIndex({ index: 0 });
        setCurrentIndex(0);
      }, 500); // Add a small delay to ensure smooth transition
    }
  }, [currentIndex]);

  /*useEffect(() => {
    getSlider();
  }, [])*/

  const getSlider = async () => {
    const result = (await GlobalApi.getSlider()).data;

    const resp = result.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      image: item.attributes.image.data.attributes.url
    }))

    setSlider(resp)
  }
  return (
    <View style={{ paddingLeft: 20 }}>
      <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChangedRef.current}
        data={bannerData}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Image source={item.cover}
              style={{
                width: 350
                , height: 150, borderRadius: 10, marginRight: 15
              }}
            />
          </View>
        )}
      />
    </View>
  )
}