import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CongratsModal = ({ visible, onContinue }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Congrats Image */}
          <Image
            source={require('../../../assets/images/congrats.png')}
            style={styles.congratsImage}
            resizeMode="contain"
          />

          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Welcome to</Text>

          {/* App Name */}
          <Text style={styles.appName}>Global Sports Network</Text>

          {/* Description */}
          <Text style={styles.description}>
            Account Created Successfully! Welcome to Global Sports Network.
            Please login and you can now start exploring and using all the
            features.
          </Text>

          <Text style={[styles.description,{
            marginBottom:25
          }]}>
           Happy to have you on board!
          </Text>

          {/* Continue Button */}
          <TouchableOpacity onPress={onContinue}>
            <LinearGradient
              colors={['#006BE5', '#4A0AB4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.signInButton}
            >
              <Text style={styles.signInText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CongratsModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#818181', // Solid grey background
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        
      },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '85%',
    alignItems: 'center',paddingVertical:35,
    // paddingHorizontal:20
  },
  congratsImage: {
    width: 302,
    height: 176,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',lineHeight:24,
    fontFamily: 'Lato-Bold', // Lato font with 700 weight
    marginBottom: 16,
  },
  appName: {
    fontSize: 20,
    color: '#0074F3',
    fontWeight: '700',
    fontFamily: 'Lato-Bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#000000',lineHeight:16.8,
    textAlign: 'center',
    marginBottom: 15,
  },
  signInButton: {
    paddingVertical: 12,
    // paddingHorizontal: 40,
    borderRadius: 44,
    width:"100%"
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
  },
});
