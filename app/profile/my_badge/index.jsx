
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const badges = [
  { 
    title: 'Limit Breaker', 
    date: 'Aug, 2024', 
    image: require('../../../assets/images/trophy.png'), 
    university: 'GSN University', 
    issueDate: '12/03/2024',
    expiryDate: '12/03/2032',
    certificateCode: 'Cert3024GSN',
    website: 'www.gsn/certificate.com'
  },
  { 
    title: 'Victory Vanguard', 
    date: 'Aug, 2024', 
    image: require('../../../assets/images/trophy.png'), 
    university: 'GSN University',
    issueDate: '12/03/2024',
    expiryDate: '12/03/2032',
    certificateCode: 'Cert3025GSN',
    website: 'www.gsn/certificate.com'
  },
  { 
    title: 'Endurance Elite', 
    date: 'Aug, 2024', 
    image: require('../../../assets/images/trophy.png'), 
    university: 'GSN University',
    issueDate: '12/03/2024',
    expiryDate: '12/03/2032',
    certificateCode: 'Cert3026GSN',
    website: 'www.gsn/certificate.com'
  },
  { 
    title: 'Speed Striker', 
    date: 'Aug, 2024', 
    image: require('../../../assets/images/trophy.png'), 
    university: 'GSN University',
    issueDate: '12/03/2024',
    expiryDate: '12/03/2032',
    certificateCode: 'Cert3026GSN',
    website: 'www.gsn/certificate.com'
  },
  { 
    title: 'Champion Crest', 
    date: 'Aug, 2024', 
    image: require('../../../assets/images/trophy.png'), 
    university: 'GSN University',
    issueDate: '12/03/2024',
    expiryDate: '12/03/2032',
    certificateCode: 'Cert3026GSN',
    website: 'www.gsn/certificate.com'
  },
  { 
    title: 'Agility Ace', 
    date: 'Aug, 2024', 
    image: require('../../../assets/images/trophy.png'), 
    university: 'GSN University',
    issueDate: '12/03/2024',
    expiryDate: '12/03/2032',
    certificateCode: 'Cert3026GSN',
    website: 'www.gsn/certificate.com'
  },
];

export default function App() {
  const [selectedBadge, setSelectedBadge] = useState(null);

  return (
    <View style={styles.container}>
      {/* Badge Grid Screen */}
      {!selectedBadge ? (
        <>
          {/* Header */}
          <View style={styles.header}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="black" style={styles.backIcon} />
            <Text style={styles.totalBadgeCount}>200</Text>
            <Text style={styles.totalBadgeText}>Total Badges</Text>
           
            <View style={styles.illustrationContainer}>
              <Image source={require('../../../assets/images/hero.png')} style={styles.heroImage} />
            </View>
            
          </View>

          {/* Badge Cards */}
          <ScrollView contentContainerStyle={styles.grid}>
            {badges.map((badge, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.card} 
                onPress={() => setSelectedBadge(badge)}
              >
                <Image source={badge.image} style={styles.badgeImage} />
                <Text style={styles.cardTitle}>{badge.title}</Text>
                <Text style={styles.cardDate}>{badge.date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Add Badge Button */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Badge</Text>
          </TouchableOpacity>
        </>
      ) : (
        // Badge Details Screen
        <View style={styles.detailsContainer}>
          <TouchableOpacity onPress={() => setSelectedBadge(null)} style={styles.backButton}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="#333" />
          </TouchableOpacity>
          <Image source={selectedBadge.image} style={styles.badgeDetailsImage} />
          <Text style={styles.detailsTitle}>{selectedBadge.title}</Text>
          <Text style={styles.detailText}>University: {selectedBadge.university}</Text>
          <Text style={styles.detailText}>Issue Date: {selectedBadge.issueDate}</Text>
          <Text style={styles.detailText}>Expiry Date: {selectedBadge.expiryDate}</Text>
          <Text style={styles.detailText}>Certificate Code: {selectedBadge.certificateCode}</Text>
          <Text style={styles.detailText}>Website: {selectedBadge.website}</Text>
          {/* Add Badge Button */}
          <TouchableOpacity style={styles.detailbutton}>
            <Text style={styles.detailText}>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  illustrationContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  totalBadgeCount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  totalBadgeText: {
    fontSize: 16,
    color: '#666',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 160,
    paddingVertical: 20,
    alignItems: 'center',
    margin: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  badgeImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  badgeDetailsImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  detailbutton: {
    backgroundColor: '#3B82F6',

    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    width: 100,
  }
});
