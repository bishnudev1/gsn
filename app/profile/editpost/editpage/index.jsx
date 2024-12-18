import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function EditPage() {
  const [pageType, setPageType] = useState("Page Type");
  const [visibility, setVisibility] = useState("Public");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Edit Page</Text>
      </View>

      {/* Image Section */}
      <Image
        source={require("../../../../assets/images/Frame 107.png")} // Replace with your first local image
        style={styles.image}
        resizeMode="cover"
      />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Athlete Club"
          placeholderTextColor="#888"
        />
      </View>

      {/* Page Type Dropdown */}
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>{pageType}</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
      </View>

      {/* Visibility Dropdown */}
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>{visibility}</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
      </View>

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  textInput: {
    height: 50,
    
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000",
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: "#000",
  },
  descriptionBox: {
    
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  updateButton: {
    marginTop:170,
    backgroundColor: "#4C00FF",
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
