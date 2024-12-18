import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Arrow */}
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Notification</Text>

        {/* Right Button (Menu or Options) */}
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="more-vert" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Section: Today */}
        <Text style={styles.sectionHeader}>Today</Text>
        <NotificationCard
          icon="person"
          title="Account Setup Successful!"
          description="Your account has been created!"
        />

        {/* Section: Yesterday */}
        <Text style={styles.sectionHeader}>Yesterday</Text>
        <NotificationCard
          icon="place"
          title="New Services Available!"
          description="Now you can track drivers in real time"
        />

        {/* Section: December 22, 2024 */}
        <Text style={styles.sectionHeader}>December 22, 2024</Text>
        <NotificationCard
          icon="photo-camera"
          title="Payment Successful!"
          description="You have made a payment"
        />
        <NotificationCard
          icon="person"
          title="Account Setup Successful!"
          description="Your account has been created!"
        />
        <NotificationCard
          icon="person"
          title="Account Setup Successful!"
          description="Your account has been created!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Notification Card Component
const NotificationCard = ({ icon, title, description }) => {
  return (
    <View style={styles.card}>
      {/* Gradient Circle */}
      <LinearGradient
        colors={["#e0e0ff", "#f3f3ff"]}
        style={styles.iconContainer}
      >
        <MaterialIcons name={icon} size={24} color="#4b4dbf" />
      </LinearGradient>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212121",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#777",
  },
});

export default NotificationScreen;
