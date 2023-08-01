import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import { Notifications } from 'expo-notifications';
import { GiftedChat } from 'react-native-gifted-chat';
import moment from 'moment';
import { selectNotificationState, selectnotificationItems, setCloseNotification, setRemoveItemFromNotifications } from '../globalRedux/features/NotificationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { CircleButton } from './Button';
import { StatusBar } from 'react-native';
import { selectCartItems } from '../globalRedux/features/CartSlice';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const DetailsHeader = ({ items, navigation }) => {
    const [playing, setPlaying] = useState(false);
    const dispatch = useDispatch()

    /*useEffect(() => {
      setVideoChapter(param?.courseContent)
    }, [])
    */

    const handleNotification = () => {
        dispatch(setCloseNotification({
            notificationState: false
        }))
    }

    return (
        <View style={{ width: 300, height: 70, justifyContent: 'center', backgroundColor: COLORS.white, flexDirection: 'row', alignItems: 'center' }}>

            <TouchableOpacity style={{ left: 15, top: 20, position: "absolute" }} onPress={() => handleNotification()}>
                <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 150,
                    height: 40,
                    backgroundColor: COLORS.white,
                    position: "absolute",
                    borderRadius: SIZES.extraLarge,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: SHADOWS.light,
                    alignSelf: "center",
                    top: 10,
                    marginLeft: 20
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large, fontWeight: FONTS.bold, color: COLORS.secondary }}>Notifications</Text>
            </TouchableOpacity>
        </View>
    )
};
const NotificationsPage = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [messages, setMessages] = useState([]);
    const cartItems = useSelector(selectnotificationItems);
    const ifCartState = useSelector(selectNotificationState);
    const translateXValue = useRef(new Animated.Value(0)).current;

    const handleRead = (id) => {
        navigation.navigate('OrdersScreen', { id })
        dispatch(setRemoveItemFromNotifications({
            id: id,
        }))
        dispatch(setCloseNotification({
            notificationState: false
        }))
    }

    useEffect(() => {
        // Start the animation
        if (ifCartState) {
            Animated.loop(
                Animated.timing(translateXValue, {
                    toValue: 200, // Change this value to set the desired end position
                    duration: 1000, // Change this value to adjust the duration of the animation
                    useNativeDriver: true,
                })
            ).start();
        }
    }, []);

    /*  useEffect(() => {
          // Request permission for notifications
          registerForPushNotificationsAsync();
  
          // Handle received notifications
          Notifications.addListener(handleNotification);
  
          // Cleanup function
          return () => {
              Notifications.removeAllListeners();
          };
      }, []);
  
      const registerForPushNotificationsAsync = async () => {
          // Request permission for notifications
          const { status } = await Notifications.requestPermissionsAsync();
          if (status !== 'granted') {
              console.error('Permission not granted for notifications');
              return;
          }
  
          const token = await Notifications.getExpoPushTokenAsync();
          console.log('Push notification token:', token);
  
          // Save the token in your server/database if needed
      };
  
      const handleNotification = (notification) => {
          // Handle the received notification
          console.log('Received notification:', notification);
  
          // Update messages state with the new notification
          const newMessage = {
              _id: notification.data.id,
              text: notification.data.message,
              createdAt: moment(notification.data.timestamp).toDate(),
              user: {
                  _id: notification.data.senderId,
                  name: notification.data.senderName,
              },
          };
  
          setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessage));
      };*/

    const renderNotificationItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleRead(item.id)} style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.notificationTime}>{item.subTitle}</Text>
                <Text style={styles.notificationTime}>{moment(item.createdAt).fromNow()}</Text>
            </View>

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <DetailsHeader />
            <FlatList
                data={cartItems}
                renderItem={renderNotificationItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 0,
        position: 'absolute',
        zIndex: 100,
        marginTop: 78,
        right: 0,
        width: 300,
        borderBottomLeftRadius: 15,
        overflow: 'hidden',
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    notificationItem: {
        borderBottomWidth: 0.2,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    notificationText: {
        fontSize: SIZES.large,
        fontWeight: FONTS.bold,
        marginBottom: 5,
        color: COLORS.primary
    },
    notificationTime: {
        fontSize: 12,
        fontWeight: FONTS.bold,
        color: COLORS.secondary,
    },
});

export default NotificationsPage;
