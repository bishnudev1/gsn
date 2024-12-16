import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState("FAQ");
  const [activeSubTab, setActiveSubTab] = useState("General");
  const [selected, setSelected] = useState(null);

  // FAQ Data
  const faqData = [
    {
      id: 1,
      question: "What is app?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "How to use app?",
      answer: "Step-by-step guide to using the app efficiently.",
    },
    {
      id: 3,
      question: "How do I cancel?",
      answer: "You can cancel your subscription via the settings page.",
    },
    {
      id: 4,
      question: "Is app free to use?",
      answer: "Yes, the app offers free features with optional premium plans.",
    },
    {
      id: 5,
      question: "How to add on app?",
      answer: "You can add features via the 'Add Features' section in the app.",
    },
  ];

  // Contact Us Data
  const contactData = {
    phone: "+1 234 567 890",
    email: "support@example.com",
    address: "123 Help Center St, Tech City, TX 12345",
  };

  // Toggle FAQ dropdown
  const toggleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>

      {/* Main Tabs */}
      <View style={styles.mainTabs}>
        {["FAQ", "Contact Us"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.mainTab,
              activeTab === tab && styles.activeMainTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.mainTabText,
                activeTab === tab && styles.activeMainTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Area */}
      {activeTab === "FAQ" && (
        <>
          {/* Sub-Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.subTabsContainer}
          >
            {["General", "Account", "Service", "Payment"].map((section) => (
              <TouchableOpacity
                key={section}
                style={[
                  styles.subTab,
                  activeSubTab === section && styles.activeSubTab,
                ]}
                onPress={() => setActiveSubTab(section)}
              >
                <Text
                  style={[
                    styles.subTabText,
                    activeSubTab === section && styles.activeSubTabText,
                  ]}
                >
                  {section}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Search Bar */}
          <TextInput placeholder="Search" style={styles.searchBar} />

          {/* FAQ List */}
          <ScrollView style={styles.faqList}>
            {activeSubTab === "General" &&
              faqData.map((item) => (
                <View key={item.id} style={styles.faqContainer}>
                  <TouchableOpacity
                    onPress={() => toggleSelection(item.id)}
                    style={styles.questionContainer}
                  >
                    <Text style={styles.question}>{item.question}</Text>
                    <Text style={styles.arrow}>
                      {selected === item.id ? "▲" : "▼"}
                    </Text>
                  </TouchableOpacity>
                  {selected === item.id && (
                    <Text style={styles.answer}>{item.answer}</Text>
                  )}
                </View>
              ))}
            {activeSubTab !== "General" && (
              <Text style={styles.placeholderText}>
                {activeSubTab} FAQs will appear here.
              </Text>
            )}
          </ScrollView>
        </>
      )}

      {/* Contact Us Section */}
      {activeTab === "Contact Us" && (
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Get in Touch</Text>
          <Text style={styles.contactInfo}>
            📞 Phone: {contactData.phone}
          </Text>
          <Text style={styles.contactInfo}>
            📧 Email: {contactData.email}
          </Text>
          <Text style={styles.contactInfo}>
            🏠 Address: {contactData.address}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    elevation: 3,
  },
  backArrow: {
    fontSize: 24,
    color: "#333",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  mainTabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  mainTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeMainTab: {
    borderColor: "#007AFF",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  mainTabText: {
    fontSize: 18,
    color: "#777",
  },
  activeMainTabText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  subTabsContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
  },
  subTab: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007AFF",
    
    paddingHorizontal: 16,
    marginHorizontal: 5,
  },
  activeSubTab: {
    backgroundColor: "#007AFF",
    paddingVertical: 6,
    paddingHorizontal: 16,
   
  },
  subTabText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  activeSubTabText: {
    color: "white",
    fontWeight: "600",
  },
  searchBar: {
    margin: 15,
    padding: 10,
    backgroundColor: "#ECEFF1",
    borderRadius: 8,
    fontSize: 16,
  },
  faqList: {
    marginHorizontal: 15,
  },
  faqContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    elevation: 2,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  arrow: {
    fontSize: 18,
    color: "#007AFF",
  },
  answer: {
    marginTop: 10,
    color: "#555",
    fontSize: 14,
  },
  placeholderText: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
    fontSize: 16,
  },
  contactContainer: {
    padding: 20,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#007AFF",
    textAlign: "center",
  },
  contactInfo: {
    fontSize: 16,
    marginVertical: 5,
    color: "#555",
  },
});

export default function App() {
  return <HelpCenter />;
}
