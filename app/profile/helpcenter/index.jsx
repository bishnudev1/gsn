import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function HelpCenter() {
  const [activeTab, setActiveTab] = useState("FAQ");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      id: "1",
      question: "What is the app?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { id: "2", question: "How to use the app?", answer: "To use the app, sign up and follow the tutorial." },
    { id: "3", question: "How do I cancel?", answer: "Go to settings > account > cancel subscription." },
    { id: "4", question: "Is the app free to use?", answer: "Yes, the app offers a free tier for all users." },
    { id: "5", question: "How to add on the app?", answer: "Navigate to 'Add-ons' in the settings menu." },
  ];

  const categories = ["General", "Account", "Service", "Payment"];

  const toggleExpand = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredFaqData = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFAQItem = ({ item }) => (
    <View style={styles.faqItem}>
      <TouchableOpacity
        style={styles.questionContainer}
        onPress={() => toggleExpand(item.id)}
      >
        <Text style={styles.question}>{item.question}</Text>
        <FontAwesome
          name={expandedQuestion === item.id ? "chevron-up" : "chevron-down"}
          size={16}
          color="#007BFF"
        />
      </TouchableOpacity>
      {expandedQuestion === item.id && (
        <Text style={styles.answer}>{item.answer}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Arrow and Title */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={20} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Help Center</Text>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "FAQ" && styles.activeTab]}
          onPress={() => setActiveTab("FAQ")}
        >
          <Text
            style={[styles.tabText, activeTab === "FAQ" && styles.activeTabText]}
          >
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Contact Us" && styles.activeTab]}
          onPress={() => setActiveTab("Contact Us")}
        >
          <Text
            style={[styles.tabText, activeTab === "Contact Us" && styles.activeTabText]}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>

     
      

      {/* Category Buttons */}
      {activeTab === "FAQ" && (
        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.activeCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
 {/* Search Bar */}
 
  {activeTab === "FAQ" && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search FAQs..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      )}

    
      {/* FAQ Section */}
      {activeTab === "FAQ" && (
        <FlatList
          data={filteredFaqData}
          renderItem={renderFAQItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.faqList}
        />
      )}

      {/* Contact Us Section */}
      {activeTab === "Contact Us" && (
        <View style={styles.contactContainer}>
          <Text style={styles.contactInfo}>📞 Customer Service</Text>
          <Text style={styles.contactInfo}>📧 Email</Text>
          <Text style={styles.contactInfo}>🏠 www.example.com</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  tabButton: {
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007BFF",
  },
  tabText: {
    fontSize: 16,
    color: "#777",
  },
  activeTabText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  categoryButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeCategory: {
    backgroundColor: "#007BFF",
  },
  categoryText: {
    color: "#007BFF",
    fontSize: 14,
  },
  activeCategoryText: {
    color: "#fff",
  },
  faqList: {
    marginTop: 10,
    marginBottom: 20,
    
  },
  faqItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  contactContainer: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    elevation: 1,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
    fontWeight: "900",
    paddingBottom: 30,
    
  },
});
 
