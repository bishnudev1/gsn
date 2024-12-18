import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FOLLOWERS_DATA = [
  {
    id: '1',
    name: 'Alina Raina',
    image: require('../../../assets/images/Ellipse.png'),
  },
  {
    id: '2',
    name: 'Alina Raina',
    image: require('../../../assets/images/Ellipse.png'),
  },
  {
    id: '3',
    name: 'Alina Raina',
    image: require('../../../assets/images/Ellipse.png'),
  },
  {
    id: '4',
    name: 'Alina Raina',
    image: require('../../../assets/images/Ellipse.png'),
  },
];

export default function FollowersScreen() {
  const [followers, setFollowers] = useState(FOLLOWERS_DATA);
  const [optionsVisible, setOptionsVisible] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter followers based on search input
  const filteredFollowers = followers.filter((follower) =>
    follower.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBlockReport = (action) => {
    console.log(`Action: ${action}`);
    setOptionsVisible(null); // Close the modal
  };

  const sortFollowers = (type) => {
    let sortedData = [...followers];
    if (type === 'AtoZ') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === 'ZtoA') {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === 'Newest') {
      sortedData.reverse();
    }
    setFollowers(sortedData);
    setFilterVisible(false);
  };

  const renderFollower = ({ item }) => (
    <View style={styles.followerRow}>
      <View style={styles.followerInfo}>
        <Image source={item.image} style={styles.avatar} />
        <Text style={styles.followerName}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={() => setOptionsVisible(item.id)}>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {searchVisible ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Search Followers"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        ) : (
          <Text style={styles.headerText}>Followers</Text>
        )}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
            <MaterialIcons
              name={searchVisible ? 'close' : 'search'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilterVisible(true)}>
            <MaterialIcons name="sort" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Followers List */}
      <FlatList
        data={filteredFollowers}
        keyExtractor={(item) => item.id}
        renderItem={renderFollower}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No followers found</Text>
        }
      />

      {/* Filter Options */}
      {filterVisible && (
        <View style={styles.filterMenu}>
          <TouchableOpacity onPress={() => sortFollowers('Newest')}>
            <Text style={styles.filterText}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortFollowers('Oldest')}>
            <Text style={styles.filterText}>Oldest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortFollowers('AtoZ')}>
            <Text style={styles.filterText}>A to Z</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortFollowers('ZtoA')}>
            <Text style={styles.filterText}>Z to A</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Options (Block/Report) */}
      {optionsVisible && (
        <View style={styles.optionsMenu}>
          <TouchableOpacity onPress={() => handleBlockReport('Report')}>
            <Text style={styles.optionsText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBlockReport('Block')}>
            <Text style={styles.optionsText}>Block</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    marginLeft: 10,
  },
  followerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  followerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  followerName: {
    fontSize: 18,
  },
  filterMenu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  filterText: {
    fontSize: 16,
    paddingVertical: 5,
  },
  optionsMenu: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -50 }],
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    elevation: 5,
    width: 150,
  },
  optionsText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
});
