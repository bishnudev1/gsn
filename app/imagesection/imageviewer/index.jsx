import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const ImageViewer = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleDelete = () => {
    // Implement delete functionality
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose} style={styles.headerButton}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.headerButton}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <Image
        source={require('../../../assets/marathon.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Bottom Metrics */}
      <BlurView intensity={80} style={styles.bottomMetrics}>
        <View style={styles.metricContainer}>
          <TouchableOpacity style={styles.metricItem}>
            <Ionicons name="heart-outline" size={24} color="white" />
            <Text style={styles.metricText}>1K</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.metricItem}>
            <Ionicons name="chatbubble-outline" size={24} color="white" />
            <Text style={styles.metricText}>160K</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.metricItem}>
            <Ionicons name="share-outline" size={24} color="white" />
            <Text style={styles.metricText}>82K</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height,
  },
  bottomMetrics: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  metricItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricText: {
    color: 'white',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ImageViewer;
