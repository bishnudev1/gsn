import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ActiveEventScreen = () => {
  const [isActivityResumed, setActivityResumed] = useState(false);

  const handleResumeActivity = () => {
    setActivityResumed(!isActivityResumed);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Active Event</Text>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>

      {/* Event Banner */}
      <Image source={require('../../assets/images/marathon.png')} style={styles.banner} />

      {/* Event Details */}
      <Text style={styles.eventTitle}>1009 km Cycling Tour</Text>
      <Text style={styles.progressText}>92% done</Text>
      <Text style={styles.progressText}>5/40 activity</Text>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}></View>
      </View>

      {/* Challenges */}
      <View style={styles.challengeContainer}>
        {[1, 2, 3, 4].map((item, index) => (
          <View key={index} style={styles.challengeCard}>
            <Text style={styles.challengeNumber}>{item}</Text>
            <View style={styles.challengeDetails}>
              <Text style={styles.challengeTitle}>Challenge {item * 5} km</Text>
              <Text
                style={[styles.statusBadge, index < 3 ? styles.completed : styles.ongoing]}
              >
                {index < 3 ? 'Completed' : 'Ongoing'}
              </Text>
            </View>
            <Text style={styles.challengeScore}>{index < 3 ? '10/10' : '12/20'}</Text>
          </View>
        ))}
      </View>

      {/* Distance & Duration */}
      <View style={styles.infoContainer}>
        <Text>Total Distance</Text>
        <Text style={styles.infoText}>300 km</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>Total Duration</Text>
        <Text style={styles.infoText}>20h 40m 30s</Text>
      </View>

      {/* Dates */}
      <View style={styles.dateContainer}>
        <MaterialIcons name="calendar-today" size={16} color="gray" />
        <Text> Start date</Text>
        <Text style={styles.dateText}>01 April 2023</Text>
        <MaterialIcons name="calendar-today" size={16} color="gray" />
        <Text> End date</Text>
        <Text style={styles.dateText}>30 April 2023</Text>
      </View>

      {/* Reward */}
      <View style={styles.rewardContainer}>
        <View><Text>Rewards</Text></View>
        <FontAwesome name="gift" size={24} color="purple" />
        <Text style={styles.rewardText}>Not Disclosed</Text>
      </View>

      {/* Resume Button */}
      <TouchableOpacity
        style={[styles.resumeButton, isActivityResumed && styles.activeButton]}
        onPress={handleResumeActivity}
      >
        <FontAwesome name="play" size={20} color="white" />
        <View  style={styles.resume}><Text style={styles.resumeText}>
          {isActivityResumed ? 'Pause Activity' : 'Resume Activity'}
        </Text>
        </View>
        
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  progressText: {
    marginLeft: 16,
    fontSize: 14,
    color: 'gray',
  },
  progressBarContainer: {
    marginHorizontal: 16,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    width: '92%',
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  challengeContainer: {
    padding: 16,
  },
  challengeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  challengeNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 16,
  },
  challengeDetails: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
  },
  statusBadge: {
    marginTop: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontSize: 12,
    overflow: 'hidden',
  },
  completed: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  ongoing: {
    backgroundColor: '#cce5ff',
    color: '#004085',
  },
  challengeScore: {
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  infoText: {
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  dateText: {
    marginLeft: 8,
  },
  rewardContainer: {
    alignItems: 'baseline',
    marginLeft:5,
    padding: 16,
  },
  rewardText: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  resumeButton: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#4b4dbf',
    padding: 16,
    margin: 16,
    borderRadius: 100,
  },
  activeButton: {
    backgroundColor: '#ff6b6b',
  },
  resumeText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  resume: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActiveEventScreen;
