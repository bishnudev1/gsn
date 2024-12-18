import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CreatePostScreen = () => {
  const [selectedImage, setSelectedImage] = useState(require('../../../assets/images/cycle.png'));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    // Request permission to access the library
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access media library is required!');
      return;
    }

    // Allow the user to select an image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
      </View>

      {/* Image Upload Section */}
      <TouchableOpacity style={styles.imageUploadContainer} onPress={pickImage}>
        {selectedImage ? (
          <Image source={selectedImage} style={styles.image} />
        ) : (
          <View style={styles.placeholderContainer}>
            <MaterialIcons name="add-photo-alternate" size={48} color="#AAA" />
            <Text style={styles.placeholderText}>Upload Image</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      {/* Description Input */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type anything here..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Post Button */}
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imageUploadContainer: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    borderStyle: 'dashed',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  placeholderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 8,
    color: '#AAA',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    
    borderColor: '#DDD',
    borderRadius: 15,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  postButton: {
    marginTop: 200,
    backgroundColor: '#3D5CFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 100,
  },
  postButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatePostScreen;
