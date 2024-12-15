import React, { useState, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image, ActivityIndicator
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import googleLogo from '../../../assets/images/google.png';
import CongratsModal from '../welcome';
import {Toast} from "toastify-react-native";
import { loginAction} from '../../store/actions/authActions';

export default function LoginScreen() {

  const { loading,user } = useSelector(state => state.auth);

  console.log("User in GSN",user);
  console.log("Loading Value in AuthReducer",loading);
  

  const dispatch = useDispatch();

  
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmailChange = (text) => {
    setEmail(text);  // Update state with the new text
  };

  const handlePasswordChange = (text) => {
    setPassword(text);  // Update state with the new text
  };

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const showCongratsModal = () => {
    setModalVisible(true); // Show the modal
  };

  const hideCongratsModal = () => {
    setModalVisible(false); // Hide the modal
  };

  // function dumb(){
  //   console.log("That's a dumb function!");
  // }

  // function loginUser({email, password}) {
  //   console.log(`Executing loginUser email: ${email} & password: ${password}`);
  // }

  const handleEmailLogin = async() => {
    console.log(`Performing handleEmailLogin() in /app/auth/login/index.jsx with ${email} & ${password}`);
  
    if(!email || !password){
      Toast.warn("Please give email and password!");
      return;
    }
    dispatch(loginAction(email, password));

  }

  const isFormValid = email.length > 3 && password.length > 3;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowText} onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={15} />
        </TouchableOpacity>

        <Text style={styles.title1}>Login to your</Text>
        <Text style={styles.title2}>Account</Text>

        <View
          style={[
            styles.inputContainer,
            {
                backgroundColor:  isEmailFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                borderColor: isEmailFocused || isFormValid ? '#0074f3' : '#ccc',
                borderWidth: isEmailFocused || isFormValid ? 1 : 0,
                borderRadius:12
              },
          ]}
        >
          <MaterialIcons name="email" size={20} color={isEmailFocused || isFormValid ? '#0074f3' : '#616161'} style={{ height: 19, width: 19 }} />
          <TextInput
            ref={emailRef}
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            placeholderTextColor="#616161"
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </View>

        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: isPasswordFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
              borderColor: isPasswordFocused || isFormValid ? '#0074f3' : '#ccc',
              borderWidth: isPasswordFocused || isFormValid ? 1 : 0,
            },
          ]}
        >
          <MaterialIcons name="lock" size={20} color={isPasswordFocused || isFormValid ? '#0074f3' : '#616161'} style={styles.icon} />
          <TextInput
            ref={passwordRef}
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            placeholderTextColor="#aaa"
            secureTextEntry={!isPasswordVisible}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={20}
              color={isPasswordFocused || isFormValid ? '#0074f3' : '#616161'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => handleEmailLogin()} disabled={loading}>
  <LinearGradient
    colors={isFormValid ? ['#006BE5', '#4A0AB4'] : ['#cacaca', '#cacaca']}
    start={{ x: 0, y: 0 }} 
    end={{ x: 1, y: 0 }}
    style={styles.signInButton}
  >
    {loading ? (
      <ActivityIndicator size="small" color="skyblue" />
    ) : (
      <Text style={styles.signInText}>Sign in</Text>
    )}
  </LinearGradient>
</TouchableOpacity>




        <TouchableOpacity onPress={() => router.push("/auth/forgetpwd")}>
          <Text style={styles.forgotPassword}>Forgot the password?</Text>
        </TouchableOpacity>


    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        margin: "auto",
        // backgroundColor:"red"
      }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#cacaca',
        }}
      />
      <Text style={styles.orText}
      >or continue with</Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#cacaca',
        }}
      />
    </View>

        <TouchableOpacity 
        onPress={showCongratsModal}
        style={styles.googleButton}>
          {/* <FontAwesome5 name="google" size={20} color="#616161" style={styles.googleLogo} /> */}
          <Image source={googleLogo} style={styles.googleLogo} />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          router.push('/auth/register');
        } }>
          <Text style={styles.signUpText}>
            Don’t have an account?  <Text style={styles.signUpLink}>Sign up</Text>
          </Text>
        </TouchableOpacity>
        <CongratsModal visible={isModalVisible} onContinue={hideCongratsModal} />
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
  arrowText: {
    marginTop: 40,
    marginBottom: 55,
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
