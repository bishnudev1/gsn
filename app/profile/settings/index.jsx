import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  const menuItems = [
    { label: 'Edit Profile', icon: <FontAwesome5 name="user-edit" size={15} color="#212121" />, route: '/edit-profile' },
    { label: 'Address', icon: <Ionicons name="location-outline" size={15} color="#212121" />, route: '/address' },
    { label: 'Notification', icon: <Ionicons name="notifications-outline" size={15} color="#212121" />, route: '/notification' },
    { label: 'Payment', icon: <MaterialIcons name="payment" size={15} color="#212121" />, route: '/payment' },
    { label: 'Security', icon: <Ionicons name="shield-checkmark-outline" size={15} color="#212121" />, route: '/security' },
    { label: 'Privacy Policy', icon: <Feather name="lock" size={15} color="#212121" />, route: '/privacy-policy' },
    { label: 'Terms & Conditions', icon: <MaterialIcons name="description" size={15} color="#212121" />, route: '/terms-conditions' },
    { label: 'Help Center', icon: <Ionicons name="help-circle-outline" size={15} color="#212121" />, route: '/help-center' },
    { label: 'Share App', icon: <Feather name="share-2" size={15} color="#212121" />, route: '/share-app' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <FontAwesome5 name="arrow-left" size={14} color="#212121" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
        </View>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => router.push(item.route)}
          >
            <View style={styles.menuItemContent}>
              {item.icon}
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="#212121" />
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logged out!')}>
          <MaterialIcons name="logout" size={18} color="#E53935" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 25,
  },
  backButton: {
    marginRight: 20,
  },
  headerText: {
    color: '#212121',
    fontSize: 20,
    fontWeight: '700',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 9,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E0E0E0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#212121',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#E53935',
    fontWeight: '500',
  },
});
