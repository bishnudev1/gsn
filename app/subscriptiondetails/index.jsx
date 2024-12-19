import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SubscriptionSuccess = () => {
  const router = useRouter();
  const { plan } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push('/subscription')}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/target.png')}
            style={styles.targetImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Congratulation!</Text>
        
        <Text style={styles.subtitle}>
          Thank you for subscribing to the{'\n'}
          <Text style={styles.planText}>{plan || 'Professional Tier'}!</Text>
        </Text>

        <Text style={styles.description}>
          We're excited to see you make the most{'\n'}
          of these features. Get started today!
        </Text>

        <TouchableOpacity 
          style={styles.goBackButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E6F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  targetImage: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
    lineHeight: 24,
  },
  planText: {
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    lineHeight: 22,
  },
  goBackButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SubscriptionSuccess;
