import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Lato_700Bold } from '@expo-google-fonts/lato';

const OnboardingPage = () => {
  const swiperRef = useRef(null); // Create a reference to the swiper
  const navigation = useNavigation(); // Hook to handle navigation

  // Function to handle next slide navigation
  const goToNextSlide = (index) => {
    console.log("Going to next slide...");
    
    swiperRef.current.scrollBy(1); // Move to the next slide
  };

  return (
    <Swiper
      ref={swiperRef} // Assign the ref to the swiper
      style={styles.wrapper}
      showsButtons={false}
      activeDot={<View style={styles.activeDot} />}
      dot={<View style={styles.inactiveDot} />}
      paginationStyle={{ bottom: 140 }} // Position pagination dots above the button
    >
      {/* Page 1 */}
      <View style={styles.slide}>
        <Image source={require('../../assets/images/onboarding1.png')} style={styles.image1} />
        <Text style={styles.title}>The best app to track athlete's activity</Text>
        
        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={()=> {
            console.log("Getting exited...");
            
            goToNextSlide();
            }}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Page 2 */}
      <View style={styles.slide}>
        <Image source={require('../../assets/images/onboarding2.png')} style={styles.image2} />
        <Text style={styles.title}>Get more experience with communities</Text>
        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => goToNextSlide()}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Page 3 */}
      <View style={styles.slide}>
        <Image source={require('../../assets/images/onboarding3.png')} style={styles.image3} />
        <Text style={styles.title2}>Connect with your wearable devices</Text>
        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  image1: {
    width: '100%',
    height: 214.83,
    marginBottom: 90,
    resizeMode: 'cover',
  },
  image2: {
    width: '100%',
    height: 250.03,
    marginBottom: 55,
    resizeMode: 'cover',
  },
  image3: {
    width: '100%',
    height: 387,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Lato_700Bold',
    marginBottom: 55,
    lineHeight: 48,
    paddingHorizontal: 20,
  },
  title2: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Lato_700Bold',
    marginBottom: 140,
    marginTop: 60,
    lineHeight: 48,
  },
  activeDot: {
    backgroundColor: '#0074F3',
    width: 32,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  inactiveDot: {
    backgroundColor: '#E0E0E0',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    width: '95%',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingPage;
