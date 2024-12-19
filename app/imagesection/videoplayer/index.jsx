import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import * as ScreenOrientation from 'expo-screen-orientation';

const VideoPlayer = () => {
  const [status, setStatus] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    // Update dimensions on screen rotation
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({
        width: window.width,
        height: window.height,
      });
    });

    return () => {
      subscription?.remove();
      // Reset orientation when component unmounts
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const handlePlayPause = async () => {
    if (status.isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
  };

  const handleClose = () => {
    if (isFullscreen) {
      handleFullscreen();
    }
    // Handle close functionality
    console.log('Close pressed');
  };

  const handleFullscreen = async () => {
    if (isFullscreen) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      setIsFullscreen(false);
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      setIsFullscreen(true);
    }
  };

  const videoStyle = isFullscreen ? styles.fullscreenVideo : styles.video;

  return (
    <View style={[styles.container, isFullscreen && styles.fullscreenContainer]}>
      <StatusBar 
        translucent 
        backgroundColor="transparent" 
        hidden={isFullscreen}
      />
      <Video
        ref={videoRef}
        style={videoStyle}
        source={require('../../../assets/videos/video1.mp4')}
        resizeMode="contain"
        useNativeControls={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      {/* Top Controls */}
      <View style={[styles.topControls, isFullscreen && styles.fullscreenTopControls]}>
        <TouchableOpacity onPress={handleClose} style={styles.iconButton}>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Controls */}
      <View style={[styles.bottomControls, isFullscreen && styles.fullscreenBottomControls]}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={status.durationMillis || 1}
          value={status.positionMillis || 0}
          onValueChange={value => videoRef.current.setPositionAsync(value)}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="rgba(255,255,255,0.5)"
          thumbTintColor="#FFFFFF"
        />
        <View style={styles.controlButtons}>
          <TouchableOpacity onPress={handleClose} style={styles.iconButton}>
            <Ionicons name="close-outline" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause} style={styles.iconButton}>
            <Ionicons 
              name={status.isPlaying ? "pause-circle-outline" : "play-circle-outline"} 
              size={32} 
              color="white" 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFullscreen} style={styles.iconButton}>
            <Ionicons 
              name={isFullscreen ? "contract-outline" : "expand-outline"} 
              size={28} 
              color="white" 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  fullscreenContainer: {
    backgroundColor: '#000',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fullscreenVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  topControls: {
    position: 'absolute',
    top: StatusBar.currentHeight || 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  fullscreenTopControls: {
    top: 0,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fullscreenBottomControls: {
    paddingBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 40,
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  iconButton: {
    padding: 10,
  },
});

export default VideoPlayer;
