import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation(); // Hook for navigation
  const [gender, setGender] = useState('Male');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#333" />
        <Text style={styles.header}>Fill Your Profile</Text>
      </TouchableOpacity>

      {/* Header */}
     

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
         source={require('../../../assets/images/Ellipse.png')} // Local profile image
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome name="pencil" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#666" />
        <TextInput style={styles.input} placeholder="First Name" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#666" />
        <TextInput style={styles.input} placeholder="Last Name" />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#666" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>

      {/* Phone Number */}
      <View style={styles.inputContainer}>
        <FontAwesome name="phone" size={20} color="#666" />
        <Text style={styles.phoneCode}>+91</Text>
        <TextInput style={styles.phoneInput} placeholder="Phone Number" keyboardType="phone-pad" />
      </View>

      {/* Date of Birth */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="calendar-alt" size={20} color="#666" />
        <TextInput style={styles.input} placeholder="12/27/1995" keyboardType="numeric" />
      </View>

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        {['Male', 'Female', 'Other'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.genderButton, gender === item && styles.selectedGender]}
            onPress={() => setGender(item)}
          >
            <View style={styles.radio}>
              {gender === item && <View style={styles.radioSelected} />}
            </View>
            <Text style={styles.genderText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Country Picker */}
      <View style={styles.inputContainer}>
        <FontAwesome name="globe" size={20} color="#666" />
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Choose country" value="" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="USA" value="USA" />
        </Picker>
      </View>

      {/* Password Fields */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#666" />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <MaterialCommunityIcons
            name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#666" />
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!isConfirmVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setConfirmVisible(!isConfirmVisible)}>
          <MaterialCommunityIcons
            name={isConfirmVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backArrow: {
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginTop:17,
    flexDirection: 'row',
   justifyContent: 'space-between',
   
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
    color: '#333',
  },
  profileContainer: {
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  phoneCode: {
    marginLeft: 10,
    marginRight: 5,
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    height: 50,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genderButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  genderText: {
    fontSize: 14,
    color: '#333',
  },
  picker: {
    flex: 1,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 10,
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});


