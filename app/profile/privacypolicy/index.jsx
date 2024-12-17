// screens/PrivacyPolicy.jsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function PrivacyPolicy() {
  return (
    <ScrollView style={styles.container}>
        <View style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        marginTop:50,
        marginBottom:20
      }}>
      <TouchableOpacity style={{
        marginRight:20
      }} onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={14} />
        </TouchableOpacity>
        <Text style={{
          color:"#212121",
          fontSize:20,
          lineHeight:24,
          fontWeight:"700"
        }}>Privacy Policy</Text>
      </View>

      <Text style={styles.sectionTitle}>1. Types of Data We Collect</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.sectionTitle}>2. Use of Your Personal Data</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.sectionTitle}>3. Disclosure of Your Personal Data</Text>
      <Text style={styles.text}>
      Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nibh tellus molestie nunc non blandit massa. Quam pellentesque nec nam aliquam sem et tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nunc consequat interdum varius sit amet. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et. Lorem donec massa sapien faucibus et molestie. Massa tempor nec feugiat nisl pretium fusce id. Lacinia at quis risus sed vulputate odio. Integer vitae justo eget magna fermentum iaculis. Eget gravida cum sociis natoque penatibus et magnis.
      </Text>

      <Text style={styles.sectionTitle}>4. Data Usage</Text>
      <Text style={styles.text}>
        We use your data to personalize your experience and improve functionality.
      </Text>

      <Text style={styles.sectionTitle}>5. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions, feel free to reach out at support@example.com.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});


