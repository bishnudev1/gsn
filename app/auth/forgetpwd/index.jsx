import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import googleLogo from '../../../assets/images/google.png';

export default function ForgetPWDScreen() {
  const [email, setEmail] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);

  const emailRef = useRef(null);

  const handleEmailChange = (text) => {
    setEmail(text);  // Update state with the new text
  };

  const router = useRouter();

  const isFormValid = email.length > 6;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <View style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems:"center",
        flexDirection:"row",
        marginTop:50,
        marginBottom:80
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
        }}>Forgot Password</Text>
      </View>

        <View style={{            display:"flex",
              alignItems:"center",
              justifyContent:"center"}}>
      <Image
            source={require('../../../assets/images/forgetpwd.png')}
            style={{
              width: 276,
              height: 250,
              marginBottom: 70,
            }}
            resizeMode="contain"
          />

              </View>

              <Text style={{
                fontWeight:"500",
                fontSize:14,
                lineHeight:16.8,
                color: "#212121",
                marginBottom:25
              }}>
              Select which contact details should we use to reset your password
              </Text>

              <Text style={{
                color:"#757575",
                fontWeight:"500",
                fontSize:14,
                lineHeight:16.8,
                marginBottom:10
              }}>via Email:</Text>


        <View
          style={[
            styles.inputContainer,
            {
                // backgroundColor:  isEmailFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                backgroundColor:  isEmailFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                borderColor: isEmailFocused || isFormValid ? '#0074f3' : '#ccc',
                borderWidth: isEmailFocused || isFormValid ? 1 : 0,
                borderRadius:12
              },
          ]}
        >
          <MaterialIcons name="email" size={20} color={isEmailFocused || isFormValid ? '#0074f3' : '#212121'} style={{ height: 19, width: 19 }} />
          <TextInput
            ref={emailRef}
            style={styles.input}
            placeholder="Enter registered email id"
            value={email}
            onChangeText={handleEmailChange}
            placeholderTextColor="#9e9e9e"
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>
        <LinearGradient
          colors={isFormValid ? ['#006BE5', '#4A0AB4'] : ['#cacaca', '#cacaca']}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >
          <Text style={styles.signInText}>Continue</Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title1: {
    fontSize: 32,
    lineHeight: 38.4,
    fontWeight: '700',
    color: "#212121",
  },
  title2: {
    fontSize: 32,
    lineHeight: 38.4,
    fontWeight: '700',
    marginBottom: 65,
    color: "#212121",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
    height: 60,
    marginBottom: 25,
  },
  icon: {
    height: 19,
    width: 19,
  },
  input: {
    borderRadius: 12,
    paddingHorizontal: 12,
    flex: 1,
  },
  signInButton: {
    height: 48,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20,
    marginTop:50,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#0073f3',
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 45,
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    // textAlign: 'center',
    color: '#616161',
    // marginBottom: 23,
    fontSize: 14,
    fontWeight: '600',
    marginInline:17
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#141414',
    height: 48,
    borderRadius: 48,
    // padding: 16,
    marginBottom: 65,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  googleText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
  },
  signUpText: {
    textAlign: 'center',
    color: '#9e9e9e',
    fontWeight: "400",
    fontSize: 14,
  },
  signUpLink: {
    color: '#0074f3',
    fontWeight: "600",
    fontSize: 14,
    marginRight:10
  },
});
