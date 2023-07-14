import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Notifications } from 'expo-notifications';
import { GiftedChat } from 'react-native-gifted-chat';
import moment from 'moment';

const NotificationsScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
  };

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.user.name}: {item.text}</Text>
      <Text style={styles.notificationTime}>{moment(item.createdAt).fromNow()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Received Notifications</Text>
      <FlatList
        data={messages}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
  },
});

export default NotificationsScreen;
