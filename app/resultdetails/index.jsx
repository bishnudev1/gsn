import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const ResultDetails = () => {
  const router = useRouter();
  const [activeLevel, setActiveLevel] = useState('Level 1');
  const [selectedProfile, setSelectedProfile] = useState(1);
  const [showGenderFilter, setShowGenderFilter] = useState(false);
  const [selectedGender, setSelectedGender] = useState('All');
  const [expandedProfile, setExpandedProfile] = useState(1);

  const levels = [
    { id: 1, label: 'Level 1' },
    { id: 2, label: 'Level 2' },
    { id: 3, label: 'Level 3' },
    { id: 4, label: 'Level 4' },
  ];

  const genderOptions = ['Male', 'Female', 'Other'];

  const profiles = [
    {
      id: 1,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 2,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 3,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 4,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 5,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 6,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 7,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 8,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 9,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 10,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 11,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 12,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 13,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 14,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 15,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
    {
      id: 16,
      name: 'Alina Raina',
      image: require('../../assets/images/profile.png'),
      gender: 'Female',
      distance: '100 km',
      duration: '08:08:46',
      pace: '18.50 m/km',
      isCrowned: true,
    },
  ];

  const filteredProfiles = profiles.filter(profile => 
    selectedGender === 'All' || profile.gender === selectedGender
  );

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
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowGenderFilter(true)}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Level Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.levelScroll}
        contentContainerStyle={styles.levelContainer}
      >
        {levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={[
              styles.levelButton,
              activeLevel === level.label && styles.activeLevelButton,
            ]}
            onPress={() => setActiveLevel(level.label)}
          >
            <Text style={[
              styles.levelText,
              activeLevel === level.label && styles.activeLevelText,
            ]}>
              {level.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Profiles List */}
      <ScrollView style={styles.profilesContainer}>
        {filteredProfiles.map((profile, index) => (
          <TouchableOpacity
            key={profile.id}
            style={[
              styles.profileCard,
              selectedProfile === profile.id && styles.selectedProfileCard,
            ]}
            onPress={() => {
              setSelectedProfile(profile.id);
              setExpandedProfile(expandedProfile === profile.id ? null : profile.id);
            }}
          >
            <View style={styles.profileMain}>
              <Text style={styles.profileNumber}>{index + 1}</Text>
              <View style={styles.profileImageContainer}>
                {profile.isCrowned && (
                  <Image
                    source={require('../../assets/images/medal.png')}
                    style={styles.crownIcon}
                  />
                )}
                <Image
                  source={profile.image}
                  style={styles.profileImage}
                />
              </View>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileDistance}>{profile.distance}</Text>
              <TouchableOpacity>
                <Ionicons 
                  name={expandedProfile === profile.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="black" 
                />
              </TouchableOpacity>
            </View>

            {expandedProfile === profile.id && (
              <View style={styles.profileDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Gender</Text>
                  <Text style={styles.detailValue}>{profile.gender}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Distance</Text>
                  <Text style={styles.detailValue}>{profile.distance}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Duration</Text>
                  <Text style={styles.detailValue}>{profile.duration}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Pace</Text>
                  <Text style={styles.detailValue}>{profile.pace}</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Gender Filter Modal */}
      <Modal
        visible={showGenderFilter}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowGenderFilter(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowGenderFilter(false)}
        >
          <View style={styles.modalContent}>
            {genderOptions.map((gender) => (
              <TouchableOpacity
                key={gender}
                style={styles.genderOption}
                onPress={() => {
                  setSelectedGender(gender);
                  setShowGenderFilter(false);
                }}
              >
                <Text style={styles.genderText}>{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
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
  levelScroll: {
    maxHeight: 60,
  },
  levelContainer: {
    paddingHorizontal: 15,
    gap: 10,
    paddingVertical: 10,
  },
  levelButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
  },
  activeLevelButton: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  levelText: {
    color: '#666',
    fontWeight: '500',
  },
  activeLevelText: {
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
    gap: 10,
  },
  profileNumber: {
    fontSize: 16,
    fontWeight: '600',
    width: 25,
  },
  profileImageContainer: {
    position: 'relative',
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
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  genderOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  genderText: {
    fontSize: 16,
  },
});

export default ResultDetails;
