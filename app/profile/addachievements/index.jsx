import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const AddAchievement = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    visibility: '',
  });

  const [image, setImage] = useState(null); // State for uploaded image

  // Function to handle image selection
  const pickImage = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to upload images!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#000"
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Add New Achievement</Text>
      </View>

      {/* Dynamic Image Upload */}
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Ionicons name="image-outline" size={40} color="#6C63FF" />
            <Text style={styles.imageText}>Upload Image</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        placeholder="Certificate of Excellence"
        style={styles.input}
        value={form.title}
        onChangeText={(text) => setForm({ ...form, title: text })}
      />
      <TextInput
        placeholder="Running"
        style={styles.input}
        value={form.description}
        onChangeText={(text) => setForm({ ...form, description: text })}
      />
      <TextInput
        placeholder="500 km Running event\nNew York, US."
        style={[styles.input, styles.multilineInput]}
        value={form.description}
        onChangeText={(text) => setForm({ ...form, description: text })}
        multiline
      />
      <TextInput
        placeholder="10 Aug, 2024"
        style={styles.input}
        value={form.date}
        onChangeText={(text) => setForm({ ...form, date: text })}
      />
      <TextInput
        placeholder="Visibility"
        style={styles.input}
        value={form.visibility}
        onChangeText={(text) => setForm({ ...form, visibility: text })}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/profile/achievements')}
      >
        <Text style={styles.addButtonText}>Add To Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 18, fontWeight: '600', marginLeft: 10 },
  image: { width: '100%', height: 180, marginVertical: 10, borderRadius: 8 },
  imagePlaceholder: {
    height: 180,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#EDEDED',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DADADA',
  },
  imageText: { color: '#6C63FF', fontSize: 14, marginTop: 10 },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    fontSize: 14,
    elevation: 1,
  },
  multilineInput: { height: 80, textAlignVertical: 'top' },
  addButton: {
    backgroundColor: '#6C63FF',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});

export default AddAchievement;
