import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const SubscriptionModal = ({ visible, onClose, plan }) => {
  const router = useRouter();
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setMonth(endDate.getMonth() + 1);

  const subscriptionDetails = [
    { label: 'Month', value: currentDate.toLocaleString('default', { month: 'long' }) },
    { label: 'Amount', value: `Amount-$${plan === 'Professional Tier' ? '12.99' : '19.99'}` },
    { label: 'Begins', value: currentDate.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }) },
    { label: 'Ends', value: endDate.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }) },
    { label: 'Type', value: 'Standard' },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{plan}</Text>
          
          {subscriptionDetails.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{item.label}</Text>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}

          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={[styles.modalButton, styles.closeButton]} 
              onPress={onClose}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.continueButton]}
              onPress={() => {
                onClose();
                router.push({
                  pathname: '/subscriptiondetails',
                  params: { plan }
                });
              }}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Subscription = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('Free Tier');
  const [modalVisible, setModalVisible] = useState(false);

  const subscriptionPlans = [
    {
      name: 'Free Tier',
      price: 0.00,
    },
    {
      name: 'Professional Tier',
      price: 2000,
    },
    {
      name: 'Expert Tier',
      price: 5000,
    },
  ];

  const features = [
    '3 Free events',
    '5 Paid events',
    'Max 20 participants per event',
    'Participants will be limited to the group / event admin\'s location. No outside participants can join',
    'Digital badges',
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Subscription</Text>
        <Text style={styles.subtitle}>
          Unlock all the power of this mobile tool and enjoy digital experience like never before!
        </Text>
        <Image 
          source={require('../../assets/images/subscription_plan.png')}
          style={styles.planImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.subscriptionPlanButton}>
        <Text style={styles.planButtonText}>Subscription Plan</Text>
      </View>

      <View style={styles.plansContainer}>
        {subscriptionPlans.map((plan) => (
          <TouchableOpacity
            key={plan.name}
            style={[
              styles.planCard,
              selectedPlan === plan.name && styles.selectedPlan,
            ]}
            onPress={() => setSelectedPlan(plan.name)}
          >
            <Text style={[
              styles.planName,
              selectedPlan === plan.name && styles.selectedText
            ]}>
              {plan.name}
            </Text>
            <Text style={[
              styles.planPrice,
              selectedPlan === plan.name && styles.selectedText
            ]}>
              Rs. {plan.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>User can create up to -</Text>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <View style={styles.bullet} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.readyButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.readyButtonText}>I'm ready to begin</Text>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By placing this order you agree to the Terms of Service and Privacy Policy. Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.
      </Text>

      <SubscriptionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        plan={selectedPlan}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  planImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  subscriptionPlanButton: {
    backgroundColor: '#0066FF',
    padding: 12,
    borderRadius: 25,
    alignSelf: 'center',
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  planButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  plansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  planCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  selectedPlan: {
    borderColor: '#0066FF',
    backgroundColor: '#F0F8FF',
  },
  planName: {
    fontSize: 12,
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#0066FF',
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featuresTitle: {
    fontSize: 16,
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0066FF',
    marginRight: 10,
  },
  featureText: {
    color: '#444',
    flex: 1,
  },
  readyButton: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  readyButtonText: {
    color: 'white',
    fontWeight: '600',
    marginRight: 10,
  },
  termsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '50%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 10,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#eee',
  },
  continueButton: {
    backgroundColor: '#0066FF',
  },
  closeButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Subscription;
