import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UsersMenu = ({ onProfilePress, onSettingsPress, onLogoutPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuItem} onPress={onProfilePress}>
                <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={onSettingsPress}>
                <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={onLogoutPress}>
                <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 10,
    },
    menuItem: {
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default UsersMenu;
