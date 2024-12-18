import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function UpdatePost() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Update Post</Text>
      </View>

      {/* Banner Image */}
      <Image source={require('../../../../assets/images/cycle.png')} style={styles.banner} resizeMode="contain" />

      {/* Goal Input */}
      <TextInput
        style={styles.input}
        placeholder="Achieve my goal"
        placeholderTextColor="#888"
      />

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Text>
      </View>

      {/* Footer Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.discardButton}>
          <Text style={styles.discardText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    paddingBottom:10,
  },
  banner: {
    marginBottom: 10,
    borderRadius: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FAFAFA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 12,
    paddingBottom:12,
    marginTop:12,
  },
  descriptionBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    padding: 12,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 260,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:100,
  },
  discardButton: {
    backgroundColor: '#ddd',
    borderRadius: 100,
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginRight: 8,
  },
  discardText: {
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    backgroundColor: '#4C00FF',
    borderRadius: 100,
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginLeft: 8,
  },
  updateText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
