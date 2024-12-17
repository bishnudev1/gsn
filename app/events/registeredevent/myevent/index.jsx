import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for arrow icon

const EventPage = ({ navigation }) => {
  // Dynamic Content
const headerImage = require('../../../../assets/fastrun.png'); // Replace with your local header image
const runIcon = require('../../../../assets/run_icon.png'); // Replace with your local run icon

  const eventDetails = {
    title: 'Uniting Creating of the Memories Uniting Creating of the Memories',
    description:
      'Real estate is a lucrative industry that involves the buying selling and renting properties',
    startDate: '01 April 2023',
    endDate: '30 April 2023',
    buttonLabel: 'Register Now',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Navigation Header */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>My Events</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* Header Image */}
      <Image source={headerImage} style={styles.headerImage} />

      {/* Run Tag */}
      <View style={styles.tagContainer}>
        <Image source={runIcon} style={styles.runIcon} />
        <Text style={styles.tagText}>Run</Text>
        <Text style={styles.tagSubText}>Multi days challenge</Text>
      </View>

      {/* Event Title */}
      <Text style={styles.eventTitle}>{eventDetails.title}</Text>

      {/* Event Description */}
      <Text style={styles.eventDescription}>{eventDetails.description}</Text>

      {/* Dates */}
      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>Start date</Text>
          <Text style={styles.dateText}>{eventDetails.startDate}</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>End date</Text>
          <Text style={styles.dateText}>{eventDetails.endDate}</Text>
        </View>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>{eventDetails.buttonLabel}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginBottom: 5,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingTop:40,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  runIcon: {
    
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6A5AE0',
    marginRight: 5,
  },
  tagSubText: {
    fontSize: 15,
    color: '#777',
    fontWeight: 'bold',
    paddingLeft:"19",
    textAlign:"center"
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateBox: {
    width: '48%',
    backgroundColor: '#F4F4F4',
    padding: 12,
    borderRadius: 8,
  },
  dateLabel: {
    fontSize: 12,
    color: '#888',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  registerButton: {
    backgroundColor: '#6A5AE0',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventPage;



