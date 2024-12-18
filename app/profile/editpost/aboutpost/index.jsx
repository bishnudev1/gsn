import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function About() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>About</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Row-Wise Information */}
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Athlete Club</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.value}>Institute</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Admin</Text>
          <Text style={styles.value}>Imdadul Haque</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Member</Text>
          <Text style={styles.value}>500</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date Created</Text>
          <Text style={styles.value}>30 May, 2024</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Region</Text>
          <Text style={styles.value}>India</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>
            Salt Lake, Sec 5, Kolkata, India, 700012
          </Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
          </Text>
        </View>
      </ScrollView>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 17,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
  
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#888',
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  descriptionContainer: {
    marginTop: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    paddingTop: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  updateButton: {
    backgroundColor: '#4C00FF',
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    
  },
});
