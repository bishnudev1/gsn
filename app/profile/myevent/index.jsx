import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const PromoteEventScreen = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [details, setDetails] = useState('');

  const pickImage = async () => {
    // Request permissions
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    // Pick the image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setUploadedImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Promote Event Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Promote an event</Text>

        {/* Achievement Image Upload */}
        <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
          {uploadedImage ? (
            <View style={styles.uploadedImageContainer}>
              <MaterialIcons name="check-circle" size={48} color="#3D5CFF" />
              <Text style={styles.imageUploadedText}>Image Uploaded</Text>
            </View>
          ) : (
            <>
              <MaterialIcons name="add-photo-alternate" size={48} color="#AAA" />
              <Text style={styles.imageUploadText}>Achievement Image</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Event Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Event name"
          value={eventName}
          onChangeText={setEventName}
        />

        {/* Event Link Input */}
        <TextInput
          style={styles.input}
          placeholder="External event link"
          value={eventLink}
          onChangeText={setEventLink}
        />

        {/* Start Date and Time */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Start date"
            value={startDate}
            onChangeText={setStartDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Start time"
            value={startTime}
            onChangeText={setStartTime}
          />
        </View>

        {/* End Date and Time */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="End date"
            value={endDate}
            onChangeText={setEndDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="End time"
            value={endTime}
            onChangeText={setEndTime}
          />
        </View>

        {/* Event Details */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Event details..."
          value={details}
          onChangeText={setDetails}
          multiline
        />

        {/* Post Button */}
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  imageUpload: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    marginBottom: 16,
  },
  imageUploadText: {
    marginTop: 8,
    color: '#AAA',
    fontSize: 14,
  },
  uploadedImageContainer: {
    alignItems: 'center',
  },
  imageUploadedText: {
    marginTop: 8,
    color: '#3D5CFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
   
    
    borderRadius: 15,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: '#006BE5',
    paddingVertical: 14,
    paddingTop:18,
    marginTop: 50,
    borderRadius: 100,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PromoteEventScreen;
