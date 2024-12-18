import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('About');
  const [showImageOptions, setShowImageOptions] = useState(false);

  const tabs = ['About', 'Event', 'Post', 'Photos', 'Video'];

  const renderTab = (tab) => (
    <TouchableOpacity 
      key={tab}
      style={[styles.tab, activeTab === tab && styles.activeTab]}
      onPress={() => setActiveTab(tab)}
    >
      <MaterialIcons 
        name={
          tab === 'About' ? 'person' :
          tab === 'Event' ? 'event' :
          tab === 'Post' ? 'post-add' :
          tab === 'Photos' ? 'photo-library' : 'videocam'
        } 
        size={24} 
        color={activeTab === tab ? '#1a73e8' : '#666'} 
      />
      <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
        {tab}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/images/img.png')}
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <MaterialIcons name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../../assets/images/profile1.png')}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>Athlete Club Page</Text>
        <Text style={styles.profileType}>Coach Page</Text>
        <Text style={styles.location}>Kolkata, India</Text>
        <Text style={styles.bio}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Text>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1024</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>74</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map(renderTab)}
        </View>
      </View>

      {/* Post Options */}
      <View style={styles.postOptions}>
        <Text style={styles.whatsMind}>What on your mind today</Text>
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.optionButton}>
            <MaterialIcons name="image" size={20} color="#666" />
            <Text style={styles.optionText}>Image/Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <MaterialIcons name="post-add" size={20} color="#666" />
            <Text style={styles.optionText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <MaterialIcons name="event" size={20} color="#666" />
            <Text style={styles.optionText}>Event List</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sliding Challenge Cards */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.challengeCardsContainer}
      >
        <View style={styles.challengeCard}>
          <View style={styles.challengeCardContent}>
            <View style={styles.challengeInfo}>
              <MaterialIcons name="directions-run" size={24} color="#fff" />
              <Text style={styles.challengeCount}>+32</Text>
            </View>
            <View>
              <Text style={styles.challengeTitle}>End September 200 km Challenge</Text>
              <View style={styles.startDateContainer}>
                <MaterialIcons name="play-circle-filled" size={16} color="#fff" />
                <Text style={styles.startDateText}>Starts on 01 April</Text>
              </View>
            </View>
          </View>
          <Image 
            source={require('../../../assets/images/img.png')} 
            style={styles.challengeImage}
          />
        </View>

        {/* Duplicate challenge card */}
        <View style={[styles.challengeCard, { marginLeft: 15 }]}>
          <View style={styles.challengeCardContent}>
            <View style={styles.challengeInfo}>
              <MaterialIcons name="directions-run" size={24} color="#fff" />
              <Text style={styles.challengeCount}>+32</Text>
            </View>
            <View>
              <Text style={styles.challengeTitle}>End September 200 km Challenge</Text>
              <View style={styles.startDateContainer}>
                <MaterialIcons name="play-circle-filled" size={16} color="#fff" />
                <Text style={styles.startDateText}>Starts on 01 April</Text>
              </View>
            </View>
          </View>
          <Image 
            source={require('../../../assets/images/img.png')} 
            style={styles.challengeImage}
          />
        </View>
      </ScrollView>

      {/* Posts Section */}
      <View style={styles.postCard}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image 
              source={require('../../../assets/images/profile1.png')} 
              style={styles.postProfilePic} 
            />
            <View>
              <Text style={styles.postUsername}>Virag Mercedez</Text>
              <Text style={styles.postTime}>10 Aug 2024 • Kolkata, IND</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Post Content */}
        <Text style={styles.postText}>
          When given a mistake, be grateful. When faced with a mistake, be patient.
        </Text>

        {/* Post Footer */}
        <View style={styles.postFooter}>
          <View style={styles.postStat}>
            <MaterialIcons name="thumb-up" size={20} color="#666" />
            <Text style={styles.postStatText}>48.8K</Text>
          </View>
          <View style={styles.postStat}>
            <MaterialIcons name="comment" size={20} color="#666" />
            <Text style={styles.postStatText}>160K</Text>
          </View>
          <View style={styles.postStat}>
            <MaterialIcons name="share" size={20} color="#666" />
            <Text style={styles.postStatText}>82K</Text>
          </View>
        </View>
      </View>

      {/* Fun Run Event Card */}
      <View style={styles.postCard}>
        {/* Event Header */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image 
              source={require('../../../assets/images/profile1.png')} 
              style={styles.postProfilePic} 
            />
            <View>
              <Text style={styles.postUsername}>Multi days challenge</Text>
              <Text style={styles.postSubtitle}>Uniting Creating of the Memories Creating of</Text>
            </View>
          </View>
        </View>

        {/* Event Image */}
        <Image 
          source={require('../../../assets/images/img.png')} 
          style={styles.eventImage}
          resizeMode="cover"
        />

        {/* Event Details */}
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Fun Run</Text>
          <Text style={styles.eventDescription}>
            Real estate is a lucrative industry that involves the buying selling and renting properties
          </Text>
          <View style={styles.eventDateContainer}>
            <View style={styles.eventDateItem}>
              <Text style={styles.eventDateLabel}>Start Date</Text>
              <View style={styles.eventDateValue}>
                <MaterialIcons name="calendar-today" size={16} color="#666" />
                <Text style={styles.eventDateText}>01 April 2023</Text>
              </View>
            </View>
            <View style={styles.eventDateItem}>
              <Text style={styles.eventDateLabel}>End Date</Text>
              <View style={styles.eventDateValue}>
                <MaterialIcons name="calendar-today" size={16} color="#666" />
                <Text style={styles.eventDateText}>30 April 2023</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Running Activity Post */}
      <View style={styles.postCard}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image 
              source={require('../../../assets/images/profile1.png')} 
              style={styles.postProfilePic} 
            />
            <View>
              <Text style={styles.postUsername}>Virag Mercedez</Text>
              <Text style={styles.postTime}>10 Aug 2024 • Kolkata, IND</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Activity Title */}
        <View style={styles.activityTitleContainer}>
          <Text style={styles.activityTitle}>30 days running</Text>
          <View style={styles.completedBadge}>
            <MaterialIcons name="check-circle" size={16} color="#4CAF50" />
            <Text style={styles.completedText}>completed</Text>
          </View>
        </View>

        {/* Activity Description */}
        <Text style={styles.postText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>

        {/* Map Image */}
        <Image 
          source={require('../../../assets/images/map.png')} 
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Activity Stats */}
        <View style={styles.activityStatsContainer}>
          <View style={styles.activityStatRow}>
            <View style={styles.activityStat}>
              <MaterialIcons name="straighten" size={16} color="#666" />
              <Text style={styles.activityStatValue}>15km</Text>
              <Text style={styles.activityStatLabel}>distance</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="speed" size={16} color="#666" />
              <Text style={styles.activityStatValue}>5:20/km</Text>
              <Text style={styles.activityStatLabel}>Avg Pace</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="timer" size={16} color="#666" />
              <Text style={styles.activityStatValue}>1h 30min</Text>
              <Text style={styles.activityStatLabel}>Moving Time</Text>
            </View>
          </View>
          <View style={styles.activityStatRow}>
            <View style={styles.activityStat}>
              <MaterialIcons name="trending-up" size={16} color="#666" />
              <Text style={styles.activityStatValue}>15km</Text>
              <Text style={styles.activityStatLabel}>Elevation Gain</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="whatshot" size={16} color="#666" />
              <Text style={styles.activityStatValue}>520kCal</Text>
              <Text style={styles.activityStatLabel}>Calories</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="height" size={16} color="#666" />
              <Text style={styles.activityStatValue}>1h 30min</Text>
              <Text style={styles.activityStatLabel}>Max Elevation</Text>
            </View>
          </View>
        </View>

        {/* Post Footer */}
        <View style={styles.postFooter}>
          <View style={styles.postStat}>
            <MaterialIcons name="thumb-up" size={20} color="#666" />
            <Text style={styles.postStatText}>1K</Text>
          </View>
          <View style={styles.postStat}>
            <MaterialIcons name="comment" size={20} color="#666" />
            <Text style={styles.postStatText}>150K</Text>
          </View>
          <View style={styles.postStat}>
            <MaterialIcons name="share" size={20} color="#666" />
            <Text style={styles.postStatText}>82K</Text>
          </View>
        </View>
      </View>

      {/* Challenge Post with Gallery */}
      <View style={styles.postCard}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image 
              source={require('../../../assets/images/profile1.png')} 
              style={styles.postProfilePic} 
            />
            <View>
              <Text style={styles.postUsername}>Virag Mercedez</Text>
              <Text style={styles.postTime}>10 Aug 2024 • Kolkata, IND</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Challenge Title */}
        <Text style={styles.challengePostTitle}>100 Days Challenge</Text>
        <Text style={styles.postText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>

        {/* Activity Stats */}
        <View style={styles.activityStatsContainer}>
          <View style={styles.activityStatRow}>
            <View style={styles.activityStat}>
              <MaterialIcons name="straighten" size={16} color="#666" />
              <Text style={styles.activityStatValue}>15km</Text>
              <Text style={styles.activityStatLabel}>distance</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="speed" size={16} color="#666" />
              <Text style={styles.activityStatValue}>5:20/km</Text>
              <Text style={styles.activityStatLabel}>Avg Pace</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="timer" size={16} color="#666" />
              <Text style={styles.activityStatValue}>1h 30min</Text>
              <Text style={styles.activityStatLabel}>Moving Time</Text>
            </View>
          </View>
          <View style={styles.activityStatRow}>
            <View style={styles.activityStat}>
              <MaterialIcons name="trending-up" size={16} color="#666" />
              <Text style={styles.activityStatValue}>15km</Text>
              <Text style={styles.activityStatLabel}>Elevation Gain</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="whatshot" size={16} color="#666" />
              <Text style={styles.activityStatValue}>520kCal</Text>
              <Text style={styles.activityStatLabel}>Calories</Text>
            </View>
            <View style={styles.activityStat}>
              <MaterialIcons name="height" size={16} color="#666" />
              <Text style={styles.activityStatValue}>1h 30min</Text>
              <Text style={styles.activityStatLabel}>Max Elevation</Text>
            </View>
          </View>
        </View>

        {/* Image Gallery */}
        <View style={styles.galleryContainer}>
          <Image 
            source={require('../../../assets/images/map.png')} 
            style={styles.galleryImage}
          />
          <View style={styles.galleryRow}>
            <Image 
              source={require('../../../assets/images/img.png')} 
              style={styles.galleryImageSmall}
            />
            <Image 
              source={require('../../../assets/images/profile.png')} 
              style={styles.galleryImageSmall}
            />
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={[styles.navButton, styles.activeNavButton]}
          onPress={() => {}}
        >
          <MaterialIcons name="home" size={24} color="#1a73e8" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => {}}>
          <MaterialIcons name="fitness-center" size={24} color="#666" />
          <Text style={styles.navText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => {}}>
          <MaterialIcons name="format-list-bulleted" size={24} color="#666" />
          <Text style={styles.navText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => {}}>
          <MaterialIcons name="person" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  settingsButton: {
    position: 'absolute',
    top: 40,
    right: 15,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
  },
  profileSection: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 20,
    elevation: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileType: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
  },
  statItem: {
    marginRight: 30,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  followButton: {
    backgroundColor: '#1a73e8',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  followButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a73e8',
  },
  tabText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeTabText: {
    color: '#1a73e8',
  },
  postOptions: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  whatsMind: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  optionText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
  },
  challengeCardsContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  challengeCard: {
    width: 300,
    height: 160,
    backgroundColor: '#4A3AFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  challengeCardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  challengeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeCount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  startDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  startDateText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  challengeImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -20,
    bottom: -20,
    transform: [{ rotate: '15deg' }],
  },
  postCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  postText: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  postFooter: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  postStatText: {
    marginLeft: 5,
    color: '#666',
  },
  eventImage: {
    width: '100%',
    height: 180,
  },
  eventDetails: {
    padding: 15,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  eventDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventDateItem: {
    flex: 1,
  },
  eventDateLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  eventDateValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDateText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  activityTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 10,
  },
  completedText: {
    color: '#4CAF50',
    fontSize: 12,
    marginLeft: 4,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  activityStatsContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  activityStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  activityStat: {
    flex: 1,
    alignItems: 'center',
  },
  activityStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  activityStatLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  challengePostTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  galleryContainer: {
    padding: 15,
  },
  galleryImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  galleryImageSmall: {
    width: '48.5%',
    height: 150,
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
  activeNavButton: {
    borderTopWidth: 2,
    borderTopColor: '#1a73e8',
    marginTop: -2,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#1a73e8',
  },
});
