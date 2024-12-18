import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dropdown } from 'react-native-element-dropdown';

const PostEvent = () => {
  const [activity, setActivity] = useState(null);
  const [rewardType, setRewardType] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");
  const [goal, setGoal] = useState("");
  const [rewardDetails, setRewardDetails] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");

  const activityOptions = [
    { label: 'Running', value: 'running' },
    { label: 'Cycling', value: 'cycling' },
    { label: 'Swimming', value: 'swimming' },
    // Add more activities as needed
  ];

  const rewardTypeOptions = [
    { label: 'Medal', value: 'medal' },
    { label: 'Certificate', value: 'certificate' },
    { label: 'Trophy', value: 'trophy' },
    // Add more reward types as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>Post Event</Text>
      </View>

      {/* Select Activity */}
      <Dropdown
        style={styles.dropdown}
        data={activityOptions}
        labelField="label"
        valueField="value"
        placeholder="Select activity"
        value={activity}
        onChange={item => setActivity(item.value)}
        renderLeftIcon={() => (
          <MaterialIcons name="directions-run" size={20} color="gray" />
        )}
      />

      {/* Date Selection */}
      <View style={styles.dateContainer}>
        <View style={styles.dateInput}>
          <MaterialIcons name="event" size={20} color="gray" />
          <TextInput
            placeholder="Start date --/--/--"
            style={styles.dateTextInput}
            value={startDate}
            onChangeText={setStartDate}
          />
        </View>
        <View style={styles.dateInput}>
          <MaterialIcons name="event" size={20} color="gray" />
          <TextInput
            placeholder="End date --/--/--"
            style={styles.dateTextInput}
            value={endDate}
            onChangeText={setEndDate}
          />
        </View>
      </View>

      {/* Event Details */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type event details..."
        value={details}
        onChangeText={setDetails}
        multiline
      />

      {/* Goal */}
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={goal}
        onChangeText={setGoal}
      />

      {/* Reward Type */}
      <Dropdown
        style={styles.dropdown}
        data={rewardTypeOptions}
        labelField="label"
        valueField="value"
        placeholder="Reward type"
        value={rewardType}
        onChange={item => setRewardType(item.value)}
        renderLeftIcon={() => (
          <MaterialIcons name="card-giftcard" size={20} color="gray" />
        )}
      />

      {/* Reward Details */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Type details here..."
        value={rewardDetails}
        onChangeText={setRewardDetails}
        multiline
      />

      {/* Reward Image */}
      <View style={styles.rewardImageContainer}>
        <MaterialIcons name="add-photo-alternate" size={40} color="gray" />
        <Text style={styles.rewardText}>Reward Image</Text>
      </View>

      {/* Registration Link */}
      <TextInput
        style={styles.input}
        placeholder="Enter link here..."
        value={registrationLink}
        onChangeText={setRegistrationLink}
      />

      {/* Join Now Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:5,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    marginTop:20,
    flexDirection: "row",
    alignItems: "center",
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 14,
  },
  textArea: {
    height: 80,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  dateTextInput: {
    marginLeft: 5,
    flex: 1,
  },
  rewardImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderStyle: "dashed",
    borderRadius: 8,
    height: 120,
    marginVertical: 10,
  },
  rewardText: {
    marginTop: 10,
    color: "gray",
  },
  button: {
    backgroundColor: "#4C00FF",
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PostEvent;
