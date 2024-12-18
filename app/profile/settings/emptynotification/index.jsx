import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NotificationScreen = () => {
  // Dynamic values
  const notificationCount = 0;
  const notificationText = notificationCount === 0 ? 'No Notifications!' : `You have ${notificationCount} notifications`;

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Image source={require('../../../../assets/images/bell.png')} style={styles.bellImage} />
        <View style={styles.badgeContainer}>
          <Image source={require('../../../../assets/images/face.png')} style={styles.faceImage} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>{notificationCount}</Text>
          </View>
        </View>
        <Text style={styles.notificationText}>{notificationText}</Text>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#fff',
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  bellImage: {
    width: 150,
    height: 150,
    tintColor: '#ECECEC',
  },
  badgeContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: '35%',
  },
  faceImage: {
    width: 80,
    height: 80,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2E6CFD',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    color: '#333',
  },
  loremText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default NotificationScreen;
