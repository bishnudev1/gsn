import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample data for events
const events = [
  {
    id: '1',
    title: '10 km cycling tour',
    progress: 0.92,
    image: require('../../assets/images/fastrun.png'),
    endDate: '01 Sep 2025',
  },
  {
    id: '2',
    title: '100 days cycling tour',
    progress: 0.22,
    image: require('../../assets/images/fastrun.png'),
    endDate: '01 Sep 2025',
  },
  {
    id: '3',
    title: 'Lorem ipsum is a dummy or text',
    progress: 0.65,
    image: require('../../assets/images/fastrun.png'),
    endDate: '01 Sep 2025',
  },
  {
    id: '4',
    title: '10 km Cycling Tour',
    progress: 0.5,
    image: require('../../assets/images/fastrun.png'),
    endDate: '01 Sep 2025',
  },
  {
    id: '5',
    title: 'Lorem ipsum is a dummy or placeholder text',
    progress: 0.12,
    image: require('../../assets/images/fastrun.png'),
    endDate: '01 Sep 2025',
  },
  {
    id: '6',
    title: '10 km Cycling Tour',
    progress: 0.8,
    image: require('../../assets/images/fastrun.png'),
    endDate: '01 Sep 2025',
  },
];

export default function ResultEvent() {
  const [selectedCategory, setSelectedCategory] = useState('100 days challenges');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const categories = ['100 days challenges', '200 days challenges']; // Add more categories

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => {/* Add navigation logic here */}}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Registered Event Heading */}
        <Text style={styles.headerTitle}>Registered Event</Text>
      </View>

      {/* Dropdown Section */}
      <TouchableOpacity
        onPress={() => setDropdownVisible(!dropdownVisible)}
        style={styles.dropdownButton}
      >
        <Text style={styles.dropdownButtonText}>{selectedCategory}</Text>
        <Ionicons name={dropdownVisible ? "chevron-up" : "chevron-down"} size={16} color="black" />
      </TouchableOpacity>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <View style={styles.dropdownMenu}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedCategory(category);
                setDropdownVisible(false);
              }}
            >
              <Text style={styles.dropdownItem}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Event List */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Image source={item.image} style={styles.eventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventProgress}>{Math.round(item.progress * 100)}% done</Text>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBarFill, { width: `${item.progress * 100}%` }]} />
              </View>
              <Text style={styles.eventEndDate}>End on {item.endDate}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16, // Space between arrow and text
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
  },
  dropdownButtonText: {
    fontSize: 14,
  },
  dropdownMenu: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    elevation: 4,
    zIndex: 10,
  },
  dropdownItem: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  eventContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  eventImage: {
    width: 100,
    height: 100,
  },
  eventInfo: {
    flex: 1,
    padding: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventProgress: {
    fontSize: 14,
    color: '#666',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#6200ee',
    borderRadius: 4,
  },
  eventEndDate: {
    fontSize: 12,
    color: '#999',
  },
});
