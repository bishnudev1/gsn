import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function SportsSelectionScreen() {
  const [selectedSport, setSelectedSport] = useState(null);

  const sports = [
    { id: 1, name: 'Running', icon: <MaterialIcons name="done" size={24} color={selectedSport === 1 ? '#fff' : '#0074f3'} /> },
    { id: 2, name: 'Walk', icon: <MaterialIcons name="directions-run" size={24} color={selectedSport === 2 ? '#fff' : '#0074f3'} /> },
    { id: 3, name: 'Steps', icon: <FontAwesome5 name="shoe-prints" size={24} color={selectedSport === 3 ? '#fff' : '#0074f3'} /> },
    { id: 4, name: 'Riding', icon: <MaterialIcons name="pedal-bike" size={24} color={selectedSport === 4 ? '#fff' : '#0074f3'} /> },
    { id: 5, name: 'Yoga', icon: <FontAwesome5 name="yoga" size={24} color={selectedSport === 5 ? '#fff' : '#0074f3'} /> },
    { id: 6, name: 'Workout', icon: <FontAwesome5 name="dumbbell" size={24} color={selectedSport === 6 ? '#fff' : '#0074f3'} /> }
  ];

  const handleSportSelection = (id) => {
    setSelectedSport(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Which sports do you enjoy the most?</Text>
          <Text style={styles.subtitle}>Select one that applies:</Text>
        </View>

        <View style={styles.gridContainer}>
          {sports.map((sport) => (
            <TouchableOpacity
              key={sport.id}
              style={[
                styles.sportItem,
                selectedSport === sport.id && styles.selectedSportItem
              ]}
              onPress={() => handleSportSelection(sport.id)}
            >
              {sport.icon}
              <Text
                style={[
                  styles.sportText,
                  selectedSport === sport.id && styles.selectedSportText
                ]}
              >
                {sport.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.continueButton}
        >
          <Text style={styles.continueText}>Continue</Text>
        </LinearGradient>
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
    marginBottom: 20,
    marginTop:50
  },
  title: {
    color: '#39434f',
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    color: '#616161',
    fontSize: 14,
    lineHeight: 16.8,
    fontWeight: '400',
    marginBottom:5
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex:1
  },
  sportItem: {
    width: '30%',
    // height:90,
    // width:90,
    aspectRatio: 1,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginBottom: 15,
    shadowColor: '#323247', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // X and Y offset
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 5, // Blur radius
    elevation: 2, // Elevation for Android
  },
  
  selectedSportItem: {
    backgroundColor: '#006BE5',
  },
  sportText: {
    marginTop: 12,
    color: '#39434f',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedSportText: {
    color: '#fff',
  },
  continueButton: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 50,
    marginBottom:20
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
