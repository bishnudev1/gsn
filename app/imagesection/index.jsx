import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Photos");
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Cover", "Profile"];

  // Mock data for local images and videos
  const images = [
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
  ];

  const videos = [
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
    require("../../assets/images/workout1.png"),
  ];

  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header with Buttons */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{selectedCategory}</Text>
        <TouchableOpacity>
          <MaterialIcons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === "Photos" && styles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory("Photos")}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === "Photos" && styles.selectedCategoryText,
            ]}
          >
            Photos ({images.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === "Videos" && styles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory("Videos")}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === "Videos" && styles.selectedCategoryText,
            ]}
          >
            Videos ({videos.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sub Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.selectedTabButton,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <FlatList
        data={selectedCategory === "Photos" ? images : videos}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  categoryButton: {
    paddingVertical: 8,
  },
  selectedCategoryButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#3B82F6",
  },
  categoryText: {
    fontSize: 16,
    color: "#666",
  },
  selectedCategoryText: {
    color: "#3B82F6",
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#E5E5E5",
  },
  selectedTabButton: {
    backgroundColor: "#3B82F6",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  selectedTabText: {
    color: "#fff",
  },
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  imageContainer: {
    flex: 1,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    overflow: "hidden",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default App;
