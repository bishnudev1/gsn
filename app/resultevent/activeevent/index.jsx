import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Import Images
import localImage from '../../../assets/marathon.png';
import certificateImage from '../../../assets/images/certificate.png';
import medalsImage from '../../../assets/images/medals.png';
import badgeImage from '../../../assets/images/badge.png';
import trophyImage from '../../../assets/images/trophy.png';
import tshirtImage from '../../../assets/images/tshirt.png';
import resumeButtonImage from '../../../assets/images/Swipe Button.png'; // Renamed for consistency
import { Button } from 'react-native-paper';

const ActiveEvent = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(92); // 92% progress
  const totalDistance = 300; // in km
  const totalDuration = '20h 40m 30s';
  const startDate = '01 April 2023';
  const endDate = '30 April 2023';

  const handleButtonPress = (reward) => {
    alert(`You clicked on ${reward}`);
  };

  const handleResumeActivity = () => {
    alert('Resuming Activity...');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Active Event</Text>
      </View>

      {/* Banner */}
      <Image source={localImage} style={styles.banner} />

      {/* Event Details */}
      <View style={styles.iconContainer}>
        <FontAwesome name="bicycle" size={24} color="black" />
      </View>
      <Text style={styles.title}>10 km Cycling Tour</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{progress}% done</Text>
        <Text style={styles.progressText}>{progress / 10}/10 km</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Total Distance: {totalDistance} km</Text>
        <Text style={styles.detailText}>Total Duration: {totalDuration}</Text>
        
      </View>

      {/* Dates */}
      <View style={styles.dateContainer}>
        <View style={styles.dateItem}>
          <MaterialIcons name="calendar-today" size={20} color="black" />
          <Text style={styles.dateText}>Start Date: {startDate}</Text>
        </View>
        <View style={styles.dateItem1}>
          <MaterialIcons name="calendar-today" size={20} color="black" />
          <Text style={styles.dateText}>End Date: {endDate}</Text>
        </View>
      </View>

      {/* Rewards */}
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardText}>Reward</Text>
        <View style={styles.rewardItems}>
          {['Certificate', 'Medals', 'Badge', 'Trophy', 'T-Shirt'].map((reward, index) => {
            const images = [certificateImage, medalsImage, badgeImage, trophyImage, tshirtImage];
            return (
              <TouchableOpacity
                key={reward}
                style={styles.rewardItem}
                onPress={() => handleButtonPress(reward)}
              >
                <Image source={images[index]} style={styles.rewardImage} />
                <Text style={styles.rewardItemText}>{reward}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Resume Activity Button */}
      <TouchableOpacity onPress={handleResumeActivity}>
        {/* <Image source={resumeButtonImage} style={styles.fullButtonImage} /> */}
        <View style={styles.fullButtonImage}><Text style={styles.ButtonText}>Resume Activity</Text></View>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
   marginTop: 5,
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '500',
    marginLeft: 15,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:"space-between",
    marginVertical: 10,

  },
  dateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    
  },
  dateItem1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 14,
  },
  rewardContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  rewardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rewardItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  rewardItem: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  rewardImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  rewardItemText: {
    fontSize: 14,
    fontWeight: '600',
  },
  fullButtonImage: {
   alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4ECFF',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: 'grey',
  },
  ButtonText:{
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ActiveEvent;
