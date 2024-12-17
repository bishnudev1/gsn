import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
const EventDetails = () => {

  const router = useRouter();
  // Local images
  const headerImage = require('../../../assets/fastrun.png'); // Header image
  const certificateImage = require('../../../assets/certificate.png'); // Certificate image
  const runimage = require('../../../assets/run_icon.png')
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={headerImage} style={styles.headerImage} />
        <Text style={{fontWeight: 'bold', paddingTop:5,fontSize:15}}>
          Multi days Challenge
        </Text>
      </View>

      {/* Event Title */}
      <View style={styles.event}>
      <Image source={runimage}  />
      <Text style={{fontWeight: 'bold',paddingTop:5}}>
      Uniting Creating of the Memories Uniting Creating of the Memories
        </Text>
      </View>
      

      {/* Dates */}
      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>Start date</Text>
          <Text style={styles.dateText}>01 April 2023</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateLabel}>End date</Text>
          <Text style={styles.dateText}>30 April 2023</Text>
        </View>
      </View>

      {/* Event Info */}
      <Text style={styles.eventInfo}>
        Real estate is a lucrative industry that involves the buying, selling,
        and renting properties
      </Text>

      {/* About the Event */}
      <Text style={styles.sectionTitle}>About the event</Text>
      <Text style={styles.eventDetails}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Certificate Image */}
      <Image source={certificateImage} style={styles.certificateImage} />

      {/* Checklist Section */}
      <View style={styles.checklistContainer}>
        <View style={styles.checklistItem}>
          <Text style={styles.checkmark}>✔</Text>
          <Text style={styles.checklistText}>
            Vehicle front image with clear number
          </Text>
        </View>
        <View style={styles.checklistItem}>
          <Text style={styles.checkmark}>✔</Text>
          <Text style={styles.checklistText}>
            Vehicle back image with clear number
          </Text>
        </View>
        <View style={styles.checklistItem}>
          <Text style={styles.checkmark}>✔</Text>
          <Text style={styles.checklistText}>Vehicle side view image</Text>
        </View>
      </View>

      {/* Event Reward */}
      <Text style={styles.sectionTitle}>Event reward</Text>
      <Text style={styles.eventDetails}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/events/registeredevent/myevent')} >
        <Text style={styles.registerButtonText}>Register Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
    width: 'Full',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
 
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dateBox: {
    width: '48%',
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 8,
  },
  dateLabel: {
    fontSize: 12,
    color: '#555',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  eventInfo: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  eventDetails: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  event:{
    flexDirection: "",
    justifyContent: "space-between", 
  },
  certificateImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  checklistContainer: {
    marginVertical: 10,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkmark: {
    fontSize: 18,
    color: '#4CAF50', // Green color for tick mark
    marginRight: 10,
  },
  checklistText: {
    fontSize: 14,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#6A5AE0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetails;
