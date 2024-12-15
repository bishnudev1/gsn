import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useFonts } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

const OnboardingPage = () => {
  const swiperRef = useRef(null); // Create a reference to the swiper
  const router = useRouter();

  // Load fonts
  const [fontsLoaded] = useFonts({
    Lato_400Regular: require('@expo-google-fonts/lato/Lato_400Regular.ttf'),
    Lato_700Bold: require('@expo-google-fonts/lato/Lato_700Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // Function to handle next slide navigation
  const goToNextSlide = () => {
    swiperRef.current.scrollBy(1); // Move to the next slide
  };

  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      activeDot={<View style={styles.activeDot} />}
      dot={<View style={styles.inactiveDot} />}
      paginationStyle={{ bottom: 140 }} // Position pagination dots above the button
    >
      {/* Page 1 */}
      <View style={styles.slide}>
        <Image source={require('../../assets/images/onboarding1.png')} style={styles.image1} />
        <Text style={[styles.title, { fontFamily: 'Lato_700Bold' }]}>
          The best app to track athlete's activity
        </Text>
        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={goToNextSlide}>
            <Text style={[styles.buttonText, { fontFamily: 'Lato_700Bold' }]}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Page 2 */}
      <View style={styles.slide}>
        <Image source={require('../../assets/images/onboarding2.png')} style={styles.image2} />
        <Text style={[styles.title, { fontFamily: 'Lato_700Bold' }]}>
          Get more experience with communities
        </Text>
        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={goToNextSlide}>
            <Text style={[styles.buttonText, { fontFamily: 'Lato_700Bold' }]}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Page 3 */}
      <View style={styles.slide}>
        <Image source={require('../../assets/images/onboarding3.png')} style={styles.image3} />
        <Text style={[styles.title2, { fontFamily: 'Lato_700Bold' }]}>
          Connect with your wearable devices
        </Text>
        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={[styles.buttonText, { fontFamily: 'Lato_700Bold' }]}>Get Started</Text>
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
    marginBottom: 55,
    lineHeight: 48,
    paddingHorizontal: 20,
  },
  title2: {
    fontSize: 40,
    textAlign: 'center',
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
