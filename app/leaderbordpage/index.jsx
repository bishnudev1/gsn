import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const LeaderboardPage = () => {
  const navigation = useNavigation();
  const [selectedActivity, setSelectedActivity] = useState('Run');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: 'Ascending',
    year: '2024',
    month: 'January',
    gender: 'All',
  });

  const activities = [
    { name: 'Run', icon: 'walk' },
    { name: 'Ride', icon: 'bicycle' },
    { name: 'Workout', icon: 'fitness' },
    { name: 'Yoga', icon: 'body' },
  ];

  const profiles = Array.from({ length: 14 }, (_, index) => ({
    id: index + 1,
    name: 'Alina Raina',
    image: require('../../assets/images/emma.png'),
    distance: '100 km',
    duration: '08:08:46',
    activities: 200,
    isCrowned: true,
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowFilter(true)}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Activity Buttons */}
      <View style={styles.activityButtons}>
        {activities.map(activity => (
          <TouchableOpacity
            key={activity.name}
            onPress={() => setSelectedActivity(activity.name)}
            style={[
              styles.activityButton,
              selectedActivity === activity.name && styles.selectedActivityButton,
            ]}
          >
            <Ionicons name={activity.icon} size={20} color={selectedActivity === activity.name ? 'white' : 'black'} />
            <Text style={[
              styles.activityText,
              selectedActivity === activity.name && styles.selectedActivityText,
            ]}>
              {activity.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Profiles List */}
      <ScrollView style={styles.profilesContainer}>
        {profiles.map((profile, index) => (
          <TouchableOpacity
            key={profile.id}
            style={[
              styles.profileCard,
              selectedProfile === profile.id && styles.selectedProfileCard,
            ]}
            onPress={() => setSelectedProfile(selectedProfile === profile.id ? null : profile.id)}
          >
            <View style={styles.profileMain}>
              <Text style={styles.profileNumber}>{index + 1}</Text>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require('../../assets/images/emma.png')}
                  style={styles.crownIcon}
                />
                <Image source={profile.image} style={styles.profileImage} />
              </View>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileDistance}>{profile.distance}</Text>
              <Ionicons
                name={selectedProfile === profile.id ? "chevron-up" : "chevron-down"}
                size={20}
                color="black"
              />
            </View>

            {selectedProfile === profile.id && (
              <View style={styles.profileDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Distance</Text>
                  <Text style={styles.detailValue}>{profile.distance}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Duration</Text>
                  <Text style={styles.detailValue}>{profile.duration}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Activities</Text>
                  <Text style={styles.detailValue}>{profile.activities}</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        visible={showFilter}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowFilter(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Property Filter</Text>
            <Ionicons name="close" size={24} color="black" style={styles.closeIcon} onPress={() => setShowFilter(false)} />
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Short By</Text>
              <Picker
                selectedValue={filters.sortBy}
                onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                style={styles.picker}
              >
                <Picker.Item label="Ascending" value="Ascending" />
                <Picker.Item label="Descending" value="Descending" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Year</Text>
              <Picker
                selectedValue={filters.year}
                onValueChange={(value) => setFilters({ ...filters, year: value })}
                style={styles.picker}
              >
                <Picker.Item label="2024" value="2024" />
                <Picker.Item label="2023" value="2023" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Month</Text>
              <Picker
                selectedValue={filters.month}
                onValueChange={(value) => setFilters({ ...filters, month: value })}
                style={styles.picker}
              >
                <Picker.Item label="January" value="January" />
                <Picker.Item label="February" value="February" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Gender</Text>
              <Picker
                selectedValue={filters.gender}
                onValueChange={(value) => setFilters({ ...filters, gender: value })}
                style={styles.picker}
              >
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setShowFilter(false)} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowFilter(false)} style={styles.applyButton}>
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  activityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  activityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedActivityButton: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  activityText: {
    color: '#666',
    fontWeight: '500',
    marginLeft: 5,
  },
  selectedActivityText: {
    color: 'white',
  },
  profilesContainer: {
    flex: 1,
    padding: 15,
  },
  profileCard: {
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedProfileCard: {
    backgroundColor: '#F0F8FF',
    borderColor: '#0066FF',
  },
  profileMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileNumber: {
    fontSize: 16,
    fontWeight: '600',
    width: 25,
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  crownIcon: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 20,
    height: 20,
    zIndex: 1,
  },
  profileName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  profileDistance: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  profileDetails: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    color: '#666',
  },
  detailValue: {
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 100,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  applyButton: {
    padding: 10,
    backgroundColor: '#6A1B9A',
    borderRadius: 100,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LeaderboardPage;