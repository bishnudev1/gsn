import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const ResultsPage = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('Run');

  const activityButtons = [
    { id: 1, label: 'Run', icon: '🏃' },
    { id: 2, label: 'Ride', icon: '🚲' },
    { id: 3, label: 'Workout', icon: '💪' },
    { id: 4, label: 'Yoga', icon: '🧘' },
  ];

  const activities = [
    {
      id: 1,
      image: require('../../assets/images/Cards.png'),
      title: 'Multiple Days Activity',
      type: 'Run',
      date: '10 Aug, 2024',
    },
    {
      id: 2,
      image: require('../../assets/images/workout1.png'),
      title: 'Multiple Days Activity',
      type: 'Run',
      date: '10 Aug, 2024',
    },
    {
      id: 3,
      image: require('../../assets/images/mountain.png'),
      title: 'Multiple Days Activity',
      type: 'Run',
      date: '10 Aug, 2024',
    },
    {
      id: 4,
      image: require('../../assets/images/trophy.png'),
      title: 'Multiple Days Activity',
      type: 'Run',
      date: '10 Aug, 2024',
    },
    {
      id: 5,
      image: require('../../assets/images/Cards.png'),
      title: 'Multiple Days Activity',
      type: 'Run',
      date: '10 Aug, 2024',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Results</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Activity Type Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.buttonScroll}
        contentContainerStyle={styles.buttonContainer}
      >
        {activityButtons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={[
              styles.activityButton,
              activeButton === button.label && styles.activeButton,
            ]}
            onPress={() => setActiveButton(button.label)}
          >
            <Text style={[
              styles.buttonText,
              activeButton === button.label && styles.activeButtonText,
            ]}>
              {button.icon} {button.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Activity Cards */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.cardsContainer}
      >
        {activities.map((activity) => (
          <View key={activity.id} style={styles.card}>
            <Image 
              source={activity.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{activity.title}</Text>
              <View style={styles.activityInfo}>
                <Image 
                  source={require('../../assets/images/run_icon.png')}
                  style={styles.runIcon}
                  resizeMode="contain"
                />
                <Text style={styles.activityType}>{activity.type}</Text>
              </View>
              <Text style={styles.date}>{activity.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  buttonScroll: {
    maxHeight: 60,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    gap: 10,
    paddingVertical: 10,
  },
  activityButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
  },
  activeButton: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  buttonIcon: {
    width: 16,
    height: 16,
    tintColor: '#666',
  },
  activeButtonIcon: {
    tintColor: 'white',
  },
  buttonText: {
    color: '#666',
    fontWeight: '500',
  },
  activeButtonText: {
    color: 'white',
  },
  cardsContainer: {
    flex: 1,
    padding: 15,
    paddingBottom: 30,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  cardContent: {
    flex: 1,
    padding: 15,
    gap: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#F3F4F6',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginVertical: 8,
  },
  activityType: {
    color: '#666',
    fontSize: 14,
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  runIcon: {
    width: 16,
    height: 16,
  },
});

export default ResultsPage;
