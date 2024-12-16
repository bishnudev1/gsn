import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

export default function FillProfileScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  // Pick Image Function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fill Your Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.image} />
        ) : (
          <Image
            source={require("../../../assets/images/Ellipse.png")}
            style={styles.image}
          />
        )}
        <View style={styles.editIcon}>
          <Text style={styles.editText}>✏️</Text>
        </View>
      </TouchableOpacity>

      {/* Form Fields */}
      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.phoneContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          placeholder="Phone Number"
          style={[styles.input, styles.phoneInput]}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{birthDate.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setBirthDate(date);
          }}
        />
      )}

      {/* Gender Selection */}
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setGender("Male")} style={styles.radio}>
          <View style={gender === "Male" ? styles.radioSelected : styles.radioUnselected} />
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender("Female")} style={styles.radio}>
          <View style={gender === "Female" ? styles.radioSelected : styles.radioUnselected} />
          <Text>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender("Other")} style={styles.radio}>
          <View style={gender === "Other" ? styles.radioSelected : styles.radioUnselected} />
          <Text>Other</Text>
        </TouchableOpacity>
      </View>

      {/* Country Picker */}
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Choose country" value="" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="UK" value="UK" />
      </Picker>

      {/* Password */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.button,
          !(firstName && email && password && confirmPassword) &&
            styles.buttonDisabled,
        ]}
        disabled={!(firstName && email && password && confirmPassword)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#3498db",
    borderRadius: 20,
    padding: 5,
  },
  editText: {
    color: "#fff",
    fontSize: 12,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryCode: {
    marginRight: 10,
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
  },
  datePicker: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 8,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 5,
  },
  radioSelected: {
    width: 20,
    height: 20,
    backgroundColor: "#3498db",
    borderRadius: 10,
    marginRight: 5,
  },
  picker: {
    width: "100%",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
