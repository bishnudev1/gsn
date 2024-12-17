import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {
  const [gender, setGender] = useState("Male");
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(23);
  const [height, setHeight] = useState(150);

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Few more things about you</Text>
      <Text style={styles.subtitle}>
        Below information only require to improve your activity quality and give
        you better experience
      </Text>

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderBox,
            gender === "Male" ? styles.selectedGender : {},
          ]}
          onPress={() => setGender("Male")}
        >
          <Text style={styles.genderIcon}>♂</Text>
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderBox,
            gender === "Female" ? styles.selectedGender : {},
          ]}
          onPress={() => setGender("Female")}
        >
          <Text style={styles.genderIcon}>♀</Text>
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Height Slider */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height</Text>
        <Slider
          style={styles.slider}
          minimumValue={112}
          maximumValue={190}
          step={1}
          value={height}
          onValueChange={(value) => setHeight(value)}
          minimumTrackTintColor="#0066FF"
          thumbTintColor="#0066FF"
        />
        <Text style={styles.heightValue}>{height} cm</Text>
      </View>

      {/* Weight and Age */}
      <View style={styles.rowContainer}>
        {/* Weight */}
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.boxValue}>{weight}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => setWeight(weight - 1)}
            >
              <Text style={styles.circleText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => setWeight(weight + 1)}
            >
              <Text style={styles.circleText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Age */}
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.boxValue}>{age}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => setAge(age - 1)}
            >
              <Text style={styles.circleText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => setAge(age + 1)}
            >
              <Text style={styles.circleText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Let's Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginBottom: 20,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  genderBox: {
    width: "40%",
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  selectedGender: {
    backgroundColor: "#0066FF",
  },
  genderIcon: {
    fontSize: 30,
    color: "#fff",
  },
  genderText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  slider: {
    width: "90%",
    height: 40,
  },
  heightValue: {
    fontSize: 18,
    marginTop: 5,
    color: "#0066FF",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxContainer: {
    width: "45%",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    elevation: 3,
  },
  boxValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0066FF",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  startButton: {
    marginTop: 30,
    backgroundColor: "#0066FF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  startButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});