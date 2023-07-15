import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { bannerData, categoryData } from '../constants/dummy';

export default function Slider() {
  const [slider, setSlider] = useState([])
  useEffect(() => {
    getSlider();
  }, [])

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
        data={bannerData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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