import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, ListItem, ButtonGroup } from 'react-native-elements';
import { COLORS, FONTS, SIZES, assets } from '../constants';
import { categoryData, popularProducts, products } from '../constants/dummy';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import ProductCard from '../Components/utils/ProductCard';
import { RectButton } from '../Components/Button';
import { BottomMenu } from '../Components';
import ToastManager from 'expo-react-native-toastify';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';


const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


// Dummy data for categories
const categories = [
    {
        id: 1,
        name: 'Mobile Phones',
        image: assets.slide2,
    },
    {
        id: 2,
        name: 'Laptops',
        image: assets.slide3,
    },
    {
        id: 3,
        name: 'Headphones',
        image: assets.slide2,
    },
    // Add more categories as needed
];

// Dummy data for product filters
const filters = [
    { id: 1, name: 'Rating' },
    { id: 2, name: 'Price Low to High' },
    { id: 3, name: 'Price High to Low' },
    // Add more filters as needed
];

const Category = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [productCount, setProductCount] = useState(4);

    const handleCount = () => {
        setProductCount(productCount + 4)
    }

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity style={item === selectedCategory ? styles.selectedCategoryItem : {
            marginHorizontal: 4,
            borderWidth: 0.5,
            borderRadius: 5
        }} onPress={() => setSelectedCategory(item)}>
            <Text style={{ padding: 5 }}>{item.name}</Text>
        </TouchableOpacity>
    );

    const productRender = ({ item }) => (<ProductCard product={item} />)

    const renderFilterItem = (filter, index) => (
        <TouchableOpacity
            key={filter.id}
            style={[styles.filterItem, index === selectedFilterIndex ? styles.selectedFilterItem : null]}
            onPress={() => setSelectedFilterIndex(index)}
        >
            <Text style={[styles.filterText, index === selectedFilterIndex ? styles.selectedFilterText : null]}>
                {filter.name}
            </Text>
        </TouchableOpacity>
    );

    const handleFilter = (index) => {
        setSelectedFilterIndex(index)

        if (index === 0) {
            const ascData = [...products]?.sort((a, b) => b?.rating - a?.rating)

            setData(ascData)
        } else if (index === 1) {
            const desData = [...products]?.sort((a, b) => a?.price - b?.price)
            setData(desData)
        } else if (index === 2) {
            const desData = [...products]?.sort((a, b) => b?.price - a?.price)
            setData(desData)
        }
    }

    useEffect(() => {
        setData(products)
    }, [products])

    return (
        <View style={styles.container}>
            <ToastManager style={{ top: 0 }} />
            <BottomMenu />

            <View style={{ flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'flex-start', marginRight: 50 }}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ alignItems: "center", fontSize: SIZES.large, fontWeight: FONTS.bold, marginBottom: 3, color: COLORS.secondary, textTransform: "uppercase", justifyContent: 'center' }}>Phone Stock</Text>
            </View>

            <View style={styles.headerContainer}>
                <FlatList
                    data={categoryData}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.filterContainer}>
                <ButtonGroup
                    buttons={filters.map((filter) => filter.name)}
                    selectedIndex={selectedFilterIndex}
                    onPress={(index) => handleFilter(index)}
                    selectedButtonStyle={styles.selectedFilterButton}
                    containerStyle={styles.filterButtonGroup}
                />
            </View>

            {/* Render products based on selected category and filter */}
            {/* Add your product list component or implementation here */}
            <ScrollView>
                <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}>
                    <FlatList
                        data={data?.slice(0, productCount)}
                        numColumns={2}
                        renderItem={productRender}
                        keyExtractor={(item) => item.id.toString()}
                    />
                    <View style={{ flex: 1, paddingHorizontal: 40, marginVertical: 20 }}>
                        {productCount < data?.length && (
                            <RectButton title="More products" handlePress={handleCount} bgColor={COLORS.blueish} />
                        )}
                    </View>
                    <View style={{ justifyContent: 'center', marginVertical: 20, width: '100%', paddingLeft: 50 }}>
                        <BannerAd
                            unitId={adUnitId}
                            size={BannerAdSize.MEDIUM_RECTANGLE}
                            requestOptions={{
                                requestNonPersonalizedAdsOnly: true,
                            }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View>
            </ScrollView>
            <View style={{ height: 50 }}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    headerContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingLeft: 15
    },
    selectedCategoryItem: {
        backgroundColor: COLORS.blue,
        borderColor: COLORS.secondary,
        marginHorizontal: 4,
        borderWidth: 0.5,
        borderRadius: 5
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    filterTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    filterButtonGroup: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
        borderWidth: 0,
        height: 36,
    },
    selectedFilterButton: {
        backgroundColor: '#007aff',
    },
    filterItem: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
    },
    selectedFilterItem: {
        backgroundColor: '#007aff',
    },
    filterText: {
        fontSize: 14,
        color: '#888',
    },
    selectedFilterText: {
        color: '#fff',
    },
});

export default Category;
