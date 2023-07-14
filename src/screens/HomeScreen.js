import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import Services from '../Shared/Services'
//import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../Components/Slider'
import PromosList from '../Components/PromosList'
import CourseList from '../Components/CourseList'
import { ScrollView } from 'react-native'
import CategoryList from '../Components/CategoryList'
import PopularProducts from '../Components/PopularProducts'
import BottomMenu from '../Components/BottomMenu'
import DisplayAdScreen from '../Components/utils/DisplayAds'
import GoogleAd from '../Components/utils/GoogleAd'
import ToastManager from 'expo-react-native-toastify'

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';




export default function HomeScreen() {
    //const { userData, setUserData } = useContext(AuthContext)

    return (
        <>
            <ToastManager style={{ top: 0 }} />
            <WelcomeHeader />
            <BottomMenu />
            <ScrollView style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                <Slider />
                <CategoryList />
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                />
                <PopularProducts />
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                />
                <PromosList />
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.LARGE_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                />
            </ScrollView>

        </>
    )
}