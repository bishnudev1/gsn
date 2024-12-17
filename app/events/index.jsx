import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from "react-native";
import { useRouter } from 'expo-router';
// Dummy event data
const EVENTS_DATA = [
  {
    id: "1",
    title: "Multi days challenge",
    description: "Uniting Creating of the Memories Uniting Creating of the Memories",
    details: "Real estate is a lucrative industry that involves the buying selling and renting properties",
    startDate: "01 April 2023",
    endDate: "30 April 2023",
    image: require("../../assets/fastrun.png"),
    icon: require("../../assets/run_icon.png"),
  },
  {
    id: "2",
    title: "Multi days challenge",
    description: "Uniting Creating of the Memories Uniting Creating of the Memories",
    details: "Real estate is a lucrative industry that involves the buying selling and renting properties",
    startDate: "01 April 2023",
    endDate: "30 April 2023",
    image: require("../../assets/keeprunning.png"),
    icon: require("../../assets/run_icon.png"),
  },
  {
    id: "3",
    title: "Multi days challenge",
    description: "Uniting Creating of the Memories Uniting Creating of the Memories",
    details: "Real estate is a lucrative industry that involves the buying selling and renting properties",
    startDate: "01 April 2023",
    endDate: "30 April 2023",
    image: require("../../assets/marathon.png"),
    icon: require("../../assets/run_icon.png"),
  },
];

export default function App() {
    
    const router = useRouter();

    const renderEventItem = ({ item }) => (
      <View style={styles.card}>
        {/* Event Image */}
        <Image source={item.image} style={styles.eventImage} />
  
        {/* Event Details */}
        <View style={styles.eventContent}>
          <View style={styles.titleContainer}>
            {/* Local Run Image */}
            <Image source={item.icon} style={styles.runIcon} />
            <Text style={styles.eventTitle}>{item.title}</Text>
          </View>
          <Text style={styles.eventDescription}>{item.description}</Text>
          <Text style={styles.eventDetails}>{item.details}</Text>
  
          {/* Dates Row */}
          <View style={styles.dateRow}>
            <Text style={styles.dateText}>📅 Start: {item.startDate}</Text>
            <Text style={styles.dateText}>📅 End: {item.endDate}</Text>
          </View>
  
          {/* Register Button */}
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Events</Text>
  
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.activeTabText}>On Going</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Past</Text>
          </TouchableOpacity>
        </View>
  
        {/* Events List */}
        <FlatList
          data={EVENTS_DATA}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
  
        {/* Bottom Button */}
        <TouchableOpacity style={styles.bottomButton}  onPress={() => router.push('/events/registeredevent')}>
          <Text style={styles.bottomButtonText}>View Registered Event</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f9fa" },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      padding: 15,
      textAlign: "center",
      backgroundColor: "#fff",
    },
    tabsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#fff",
      paddingVertical: 10,
    },
    tabButton: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      backgroundColor: "#e0e0e0",
    },
    activeTab: {
      backgroundColor: "#4F9AFB",
    },
    tabText: { color: "#555", fontSize: 14 },
    activeTabText: { color: "#fff", fontWeight: "bold" },
    listContainer: {
      paddingHorizontal: 15,
      paddingBottom: 20,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 15,
      overflow: "hidden",
      elevation: 3,
    },
    eventImage: {
      width: "100%",
      height: 150,
    },
    eventContent: {
      padding: 15,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
    runIcon: {
      width: 45,
      height: 20,
      marginRight: 8,
    },
    eventTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    eventDescription: {
      fontSize: 14,
      color: "#555",
      marginBottom: 10,
    },
    eventDetails: {
      fontSize: 12,
      color: "#777",
      marginBottom: 10,
    },
    dateRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    dateText: {
      fontSize: 12,
      color: "#555",
    },
    registerButton: {
      backgroundColor: "#4F9AFB",
      paddingVertical: 8,
      borderRadius: 20,
      alignItems: "center",
    },
    registerButtonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
    },
    bottomButton: {
      backgroundColor: "#4F9AFB",
      paddingVertical: 12,
      alignItems: "center",
      marginHorizontal: 15,
      marginBottom: 10,
      borderRadius: 25,
    },
    bottomButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });