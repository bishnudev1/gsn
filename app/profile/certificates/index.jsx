import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CertificateDetails = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    certificateName: '',
    issuingInstitute: '',
    issueDate: '',
    expirationDate: '',
    certificateId: '',
    certificateLink: '',
  });

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Details</Text>

        {/* Image Upload Section */}
        <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          ) : (
            <View style={styles.uploadPlaceholder}>
              <Text style={styles.plusIcon}>+</Text>
              <Text style={styles.uploadText}>Upload Image</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Certificate Name"
          placeholderTextColor="#BFBFBF"
          onChangeText={(text) => handleInputChange('certificateName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Issuing Institute/ University"
          placeholderTextColor="#BFBFBF"
          onChangeText={(text) => handleInputChange('issuingInstitute', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Issue Date"
          placeholderTextColor="#BFBFBF"
          onChangeText={(text) => handleInputChange('issueDate', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiration Date"
          placeholderTextColor="#BFBFBF"
          onChangeText={(text) => handleInputChange('expirationDate', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Certificate Id"
          placeholderTextColor="#BFBFBF"
          onChangeText={(text) => handleInputChange('certificateId', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Certificate Link"
          placeholderTextColor="#BFBFBF"
          onChangeText={(text) => handleInputChange('certificateLink', text)}
        />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.discardButton}>
            <Text style={styles.buttonText}>Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonTextSave}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
  },
  imageUpload: {
    height: 120,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  plusIcon: {
    fontSize: 24,
    color: '#BFBFBF',
  },
  uploadText: {
    fontSize: 14,
    color: '#BFBFBF',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  discardButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonTextSave: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CertificateDetails;
