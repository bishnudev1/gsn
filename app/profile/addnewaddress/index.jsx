import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

export default function AddNewAddress() {
  const [nameAddress, setNameAddress] = useState("Apartment");
  const [addressDetails, setAddressDetails] = useState(
    "931 Indian Summer Drive Taylor, MI 48180"
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>Add New Address</Text>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 42.2405, // Example coordinates (Taylor, MI)
            longitude: -83.2696,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* Map Marker */}
          <Marker
            coordinate={{ latitude: 42.2405, longitude: -83.2696 }}
            title="Selected Location"
          >
            <View style={styles.markerContainer}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
                style={styles.markerImage}
              />
            </View>
          </Marker>
        </MapView>
      </View>

      {/* Address Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name Address</Text>
        <TextInput
          style={styles.input}
          value={nameAddress}
          onChangeText={setNameAddress}
          placeholder="Enter name address"
        />

        <Text style={styles.label}>Address Details</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={addressDetails}
            onChangeText={setAddressDetails}
            placeholder="Enter address details"
          />
          <Ionicons name="location" size={20} color="black" />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
  },
  mapContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerContainer: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 2,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  detailsContainer: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
    backgroundColor: "#f7f7f7",
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#f7f7f7",
  },
  button: {
    backgroundColor: "#4c00ff",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});