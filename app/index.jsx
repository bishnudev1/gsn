import React, { useEffect } from 'react';
import { View, Image, StyleSheet ,Text } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/profile/sportsactivity'); // Navigate to the onboarding screen after 3 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}
      />
      {/* <Text varient='h5' fontFamily='Medium' style={{paddingTop:20} } >

        Made in 🇮🇳 
       
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 273,
    height: 273,
  },
  text:{
    paddingTop:20
  }
});

export default SplashScreen;
