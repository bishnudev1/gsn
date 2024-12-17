import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    userName: 'Virag Merendez',
    time: '4 May, 2024 - Kolkata, IND',
    post: "When given a mistake, be grateful. When faced with a mistake, be patient.",
    likes: 48000,
    comments: 160000,
    shares: 82000,
    profilePic: require('../../../assets/images/hero.png'),
  },
  {
    id: '2',
    userName: 'Virag Merendez',
    time: '3 May, 2024 - Kolkata, IND',
    post: '30 days running completed!',
    images: [require('../../../assets/images/map.png'), require('../../../assets/images/hero.png')],
    stats: {
      distance: '15km',
      avgPace: '5:20/km',
      movingTime: '1h 30min',
      calories: '520kCal',
      elevationGain: '15m',
    },
    likes: 1000,
    comments: 160000,
    shares: 82000,
    profilePic: require('../../../assets/images/hero.png'),
  },
  {
    id: '3',
    userName: 'Virag Merendez',
    time: '4 May, 2024 - Kolkata, IND',
    post: 'Earned a Badge',
    badgeImage: require('../../../assets/images/hero.png'),
    likes: 1000,
    comments: 160000,
    shares: 82000,
    profilePic: require('../../../assets/images/hero.png'),
  },
];

export default function App() {
  const [likes, setLikes] = useState(DATA.map((item) => item.likes));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = newLikes[index] + 1;
    setLikes(newLikes);
  };

  const renderPost = ({ item, index }) => (
    <View style={styles.postContainer}>
      {/* Header */}
      <View style={styles.postHeader}>
        <Image source={item.profilePic} style={styles.profilePic} />
        <View>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
      </View>

      {/* Post Content */}
      <Text style={styles.postText}>{item.post}</Text>

      {/* Additional Images */}
      {item.images && (
        <View style={styles.imageContainer}>
          {item.images.map((img, i) => (
            <Image key={i} source={img} style={styles.postImage} />
          ))}
        </View>
      )}

      {/* Badge */}
      {item.badgeImage && <Image source={item.badgeImage} style={styles.badgeImage} />}

      {/* Stats */}
      {item.stats && (
        <View style={styles.statsContainer}>
          <Text>📍 {item.stats.distance} distance</Text>
          <Text>🏃 {item.stats.avgPace} Avg Pace</Text>
          <Text>⏱ {item.stats.movingTime}</Text>
          <Text>🔥 {item.stats.calories} Calories</Text>
        </View>
      )}

      {/* Footer */}
      <View style={styles.postFooter}>
        <TouchableOpacity onPress={() => handleLike(index)} style={styles.footerButton}>
          <FontAwesome name="thumbs-up" size={16} color="#555" />
          <Text style={styles.footerText}> {likes[index]} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="comment" size={16} color="#555" />
          <Text style={styles.footerText}> {item.comments} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome name="share" size={16} color="#555" />
          <Text style={styles.footerText}> {item.shares} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Posts */}
      <FlatList
        data={DATA}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>My Post</Text>}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/home.png')}  />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/search.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/notification.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/profile.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { fontSize: 22, fontWeight: 'bold', padding: 15, backgroundColor: '#fff' },
  postContainer: { backgroundColor: '#fff', marginBottom: 10, padding: 15, borderRadius: 10, elevation: 3 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  profilePic: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userName: { fontSize: 16, fontWeight: 'bold' },
  postTime: { fontSize: 12, color: 'gray' },
  postText: { fontSize: 14, marginBottom: 10 },
  imageContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  postImage: { width: '48%', height: 100, borderRadius: 8 },
  badgeImage: { width: '100%', height: 120, marginVertical: 10, borderRadius: 8 },
  statsContainer: { marginTop: 10 },
  postFooter: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, paddingTop: 10 },
  footerButton: { flexDirection: 'row', alignItems: 'center' },
  footerText: { fontSize: 14, color: '#555', marginLeft: 5 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    
  },
  navIcon: { width: 40, height: 30 },
});
