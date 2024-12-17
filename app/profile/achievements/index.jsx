import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useRouter } from 'expo-router';

const MyAchievement = () => {

    const router = useRouter();
    
  const achievements = [
    {
      id: 1,
      icon: 'walk-outline',
      title: 'Run',
      date: '10 Aug, 2024',
      location: 'IND',
      description: 'Certificate of Excellence\n500 km Running event\nNew York, US.',
      image: require('../../../assets/images/hero.png'), // Local image
    },
    {
      id: 2,
      icon: 'bicycle-outline',
      title: 'Cycling',
      date: '15 Aug, 2024',
      location: 'IND',
      description: 'Medal of Excellence\n500 km Cycling event\nNew York, US.',
      image: require('../../../assets/images/hero.png'), // Local image
    },
    {
      id: 3,
      icon: 'barbell-outline',
      title: 'Workout',
      date: '25 Aug, 2024',
      location: 'IND',
      description: 'Flyer of Excellence\n100 kg weight lifting event\nNew York, US.',
      image: require('../../../assets/images/hero.png'), // Local image
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>My Achievement</Text>
      </View>

      {/* Achievements List */}
      <ScrollView>
        {achievements.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name={item.icon} size={24} color="#6C63FF" />
              <View style={styles.cardHeaderText}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>
                  {item.date} • {item.location}
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={20} color="#A3A3A3" />
              </TouchableOpacity>
            </View>

            <Text style={styles.cardDescription}>{item.description}</Text>

            <Image source={item.image} style={styles.cardImage} />
          </View>
        ))}
      </ScrollView>

      {/* Add New Achievement Button */}
      <TouchableOpacity style={styles.addButton}
      onPress={() => router.push('/profile/addachievements')}
      >
        <Text style={styles.addButtonText}>Add New Achievement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderText: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888888',
    marginTop: 3,
  },
  cardDescription: {
    fontSize: 13,
    color: '#555555',
    marginVertical: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  addButton: {
    backgroundColor: '#6C63FF',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default MyAchievement;
