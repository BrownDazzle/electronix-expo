import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import { CircleButton, RectButton } from '../Components';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQTY, setClearCartItems, setCloseCart, setGetTotals } from '../globalRedux/features/CartSlice';
import { useEffect } from 'react';
import ToastManager from 'expo-react-native-toastify';
import CartItem from '../Components/cart/CartItem';
import CartEmpty from '../Components/cart/CartEmpty';

const DetailsHeader = ({ items, navigation, dispatch }) => {
  const [playing, setPlaying] = useState(false);

  /*useEffect(() => {
    setVideoChapter(param?.courseContent)
  }, [])
  */
  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }
  const handleCart = () => {
    navigation.navigate("cart")
  }

  return (


    <View style={{ width: "100%", height: 90 }}>

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <TouchableOpacity
        style={{
          width: 100,
          height: 40,
          backgroundColor: COLORS.primary,
          position: "absolute",
          borderRadius: SIZES.extraLarge,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: SHADOWS.light,
          alignSelf: "center",
          top: StatusBar.currentHeight + 10
        }}
      >
        <Text style={{ color: COLORS.white, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium }}>{items} Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: COLORS.white,
          position: "absolute",
          borderRadius: SIZES.extraLarge,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: SHADOWS.light,
          right: 15,
          top: StatusBar.currentHeight + 10
        }}
        onPress={() => onClearCartItems()}
      >
        <EvilIcons name="trash" size={34} color={COLORS.tertiary} />
      </TouchableOpacity>

    </View>
  )
};

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} />
  );

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const handlePayment = () => {
    navigation.navigate("Shipping")
  }

  return (

    <View style={styles.container}>
      <ToastManager style={{ top: 0 }} />
      <DetailsHeader items={cartItems.length} dispatch={dispatch} />
      {cartItems.length === 0 ? (<CartEmpty />) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cartList}
          />
          <View style={styles.totalContainer}>
            <View style={{ justifyContent: "center", flexDirection: "row", marginBottom: 5, alignItems: "center" }}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalAmount}>K{totalAmount}</Text>
            </View>
            <RectButton title='Process Payment' bgColor={COLORS.tertiary} minWidth='80%' handlePress={handlePayment} />
          </View>
        </>
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartList: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: "space-around",
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: FONTS.semiBold,
    marginRight: 5
  },
  totalAmount: {
    fontSize: 25,
    fontWeight: FONTS.semiBold,
  },
});

export default CartScreen;
