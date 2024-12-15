import React, { useState, useRef,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,ActivityIndicator, FlatList, Modal
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import googleLogo from '../../../assets/images/google.png';
import RNPickerSelect from 'react-native-picker-select';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


export default function RegisterScreen() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname,  setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob,setDob] = useState("");
    let country = "IN";
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isDOBFocused, setDOBFocused] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);
    const [isCPasswordFocused, setCPasswordFocused] = useState(false);
    const [isFirstNameFocused, setFirstNameFocused] = useState(false);
    const [isSecondNameFocused, setSecondNameFocused] = useState(false);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    const [countryCode, setCountryCode] = useState('IN'); // Default to India
    const [callingCode, setCallingCode] = useState('91'); // Default to India's code
    const [countryy, setCountryy] = useState(null); // Country data (if needed)
    const onSelect = (country) => {
      setCountryCode(country.cca2);
      setCallingCode(country.callingCode[0]);
      setCountryy(country);
    };

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch('https://api.first.org/data/v1/countries');
            const data = await response.json();
    
            // Extract and format countries
            const formattedCountries = Object.entries(data.data).map(([code, details]) => ({
              label: details.country,
              value: details.country,
            }));
    
            setCountries(formattedCountries);
          } catch (error) {
            console.error('Error fetching countries:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCountries();
      }, []);
    
    //   if (loading) {
    //     return <ActivityIndicator size="large" color="#0000ff" />;
    //   }
  
  
    const secondNameRef = useRef(null);
    const firstNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dobRef = useRef(null);
    const cpasswordRef = useRef(null);const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
      };

    const handleFirstNameChange = (text) => {
        setFirstname(text);  // Update state with the new text
      };

      const handleLastNameChange = (text) => {
        setLastname(text);  // Update state with the new text
      };

    const handleEmailChange = (text) => {
        setEmail(text);  // Update state with the new text
      };
    
      const handlePasswordChange = (text) => {
        setPassword(text);  // Update state with the new text
      };

      const handleDOBChange = (text) => {
        setPassword(text);  // Update state with the new text
      };
          
      const handleCPasswordChange = (text) => {
        setCpassword(text);  // Update state with the new text
      };

    const router = useRouter();

    const isFormValid = email.length > 3 && password.length > 3;
    // const isFormValid = true;

    return (<ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
        <TouchableOpacity style={styles.arrowText} onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={15} />
        </TouchableOpacity>

        <Text style={styles.title1}>Create your</Text>
        <Text style={styles.title2}>Account</Text>

        <View
          style={[
            styles.inputContainer,
            {
                backgroundColor:  isFirstNameFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                borderColor: isFirstNameFocused || isFormValid ? '#0074f3' : '#ccc',
                borderWidth: isFirstNameFocused || isFormValid ? 1 : 0,
                borderRadius:12
              },
          ]}
        >
          <MaterialIcons name="person" size={20} color={isFirstNameFocused || isFormValid ? '#0074f3' : '#616161'} style={{ height: 19, width: 19 }} />
          <TextInput
            ref={firstNameRef}
            style={styles.input}
            placeholder="Firstname"
            value={firstname}
            onChangeText={handleFirstNameChange}
            placeholderTextColor="#616161"
            // keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setFirstNameFocused(true)}
            onBlur={() => setFirstNameFocused(false)}
          />
        </View>


<View
  style={[
    styles.inputContainer,
    {
        backgroundColor:  isSecondNameFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
        borderColor: isSecondNameFocused || isFormValid ? '#0074f3' : '#ccc',
        borderWidth: isSecondNameFocused || isFormValid ? 1 : 0,
        borderRadius:12
      },
  ]}
>
  <MaterialIcons name="person" size={20} color={isSecondNameFocused || isFormValid ? '#0074f3' : '#616161'} style={{ height: 19, width: 19 }} />
  <TextInput
    ref={secondNameRef}
    style={styles.input}
    placeholder="Lastname"
    value={lastname}
    onChangeText={handleLastNameChange}
    placeholderTextColor="#616161"
    // keyboardType="email-address"
    autoCapitalize="none"
    onFocus={() => setSecondNameFocused(true)}
    onBlur={() => setSecondNameFocused(false)}
  />
</View>


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

        <View style={[styles.phoneContainer,{
"backgroundColor":'#fafafa'
        }]}>
      {/* Country Picker */}
      <TouchableOpacity style={styles.countryyContainer}>
        <CountryPicker
          countryCode={countryCode}
          withCallingCode={false} // We'll show calling code manually
          withFlag
          withFilter
          withAlphaFilter
          onSelect={onSelect}
          withEmoji
        
          containerButtonStyle={{ padding: 0, margin: 0, }}
        />
        {/* Chevron Icon */}
        <Icon name="keyboard-arrow-down" size={23} color="#888" style={styles.chevron} />
        {/* Calling Code */}
        <Text style={styles.callingCode}>+{callingCode}</Text>
      </TouchableOpacity>
      <View style={
        {
          width:1.5,
          backgroundColor:"#616161",
          height:17,
          marginRight:13
        }
      }></View>

      {/* Phone Number Input */}
      <TextInput
        style={styles.phoneInput}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
    </View>

        <View
          style={[
            styles.inputContainer,
            {
                backgroundColor:  isDOBFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                borderColor: isDOBFocused || isFormValid ? '#0074f3' : '#ccc',
                borderWidth: isDOBFocused || isFormValid ? 1 : 0,
                borderRadius:12
              },
          ]}
        >
          <FontAwesome5 name="calendar-alt" size={20} color={isDOBFocused || isFormValid ? '#0074f3' : '#616161'} style={{ height: 19, width: 19 }} />
          <TextInput
            ref={dobRef}
            style={styles.input}
            placeholder="DOB"
            value={dob}
            onChangeText={handleEmailChange}
            placeholderTextColor="#616161"
            // keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setDOBFocused(true)}
            onBlur={() => setDOBFocused(false)}
          />
        </View>
        <View
  style={[
    styles.countryContainer,
    {
      backgroundColor:
        isFirstNameFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
      borderColor: isFirstNameFocused || isFormValid ? '#0074f3' : '#ccc',
      borderWidth: isFirstNameFocused || isFormValid ? 1 : 0,
      borderRadius: 12,
    },
  ]}
>
  {loading ? (
    <ActivityIndicator size="large" color="#0074f3" />
  ) : (
<RNPickerSelect
  onValueChange={(value) => setSelectedCountry(value)}
  items={countries}
  placeholder={{
    label: 'Choose Country',
    value: null,
  }}
  
  value={selectedCountry}
  style={{
    inputIOS: {
      color: selectedCountry ? '#212121' : '#212121', // Text color for selected item
      fontSize: 14,
      fontWeight: "bold",
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    inputAndroid: {
      color: selectedCountry ? '#212121' : '#212121', // Text color for selected item
      fontSize: 14,fontWeight: "bold",
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    placeholder: {
      color: '#212121', // Placeholder color
      fontSize: 14,fontWeight: "bold",
    },
  }}
  // Icon={() => <FontAwesome5 name="chevron-down" size={20} color="#212121" />}
/>

  )}
</View>

        <View
          style={[
            styles.inputContainer,
            {
                backgroundColor:  isPasswordFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                borderColor: isPasswordFocused || isFormValid ? '#0074f3' : '#ccc',
                borderWidth: isPasswordFocused || isFormValid ? 1 : 0,
                borderRadius:12
              },
          ]}
        >
          <MaterialIcons name="lock" size={20} color={isPasswordFocused || isFormValid ? '#0074f3' : '#616161'} style={{ height: 19, width: 19 }} />
          <TextInput
            ref={passwordRef}
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={!isPasswordVisible}
            onChangeText={handlePasswordChange}
            placeholderTextColor="#616161"
            // keyboardType="numeric"
            autoCapitalize="none"
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

        <View
          style={[
            styles.inputContainer,
            {
                backgroundColor:  isCPasswordFocused || isFormValid ? 'rgba(126, 185, 255, 0.08)' : '#fafafa',
                borderColor: isCPasswordFocused || isFormValid ? '#0074f3' : '#ccc',
                borderWidth: isCPasswordFocused || isFormValid ? 1 : 0,
                borderRadius:12
              },
          ]}
        >
          <MaterialIcons name="lock" size={20} color={isCPasswordFocused || isFormValid ? '#0074f3' : '#616161'} style={{ height: 19, width: 19 }} />
          <TextInput
            ref={cpasswordRef}
            style={styles.input}
            placeholder="Confirm Password"
            value={cpassword}
            secureTextEntry={!isPasswordVisible}
            onChangeText={handleCPasswordChange}
            placeholderTextColor="#616161"
            // keyboardType="numeric"
            autoCapitalize="none"
            onFocus={() => setCPasswordFocused(true)}
            onBlur={() => setCPasswordFocused(false)}
          />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={20}
              color={isPasswordFocused || isFormValid ? '#0074f3' : '#616161'}
            />
          </TouchableOpacity>
        </View>

        
        
        <LinearGradient
          colors={isFormValid ? ['#006BE5', '#4A0AB4'] : ['#cacaca', '#cacaca']}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >
          <Text style={styles.signInText}>Sign up</Text>
        </LinearGradient>
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
      >or signup with</Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#cacaca',
        }}
      />
    </View>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={googleLogo} style={styles.googleLogo} />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => router.push('/auth/login')}
        >
          <Text style={styles.signUpText}>
            Already have an account?  <Text style={styles.signUpLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
        </View>
    </ScrollView>);
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
      marginBottom: 35,
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
      marginBottom: 25,
      color: "#212121",
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      paddingHorizontal: 20,
      height: 60,
      marginBottom: 20,
    },
    countryContainer: {
      flex: 1,
      justifyContent: 'center',
      height: 60,
      width: '100%',
      borderRadius: 12,
      marginBottom: 20,
      paddingHorizontal:7
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
      marginBottom: 35,
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
    //   marginBottom: 23,
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
      marginTop:28,
      marginBottom: 25,
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
      marginBottom:30,
    },
    signUpLink: {
      color: '#0074f3',
      fontWeight: "600",
      fontSize: 14,
      marginRight:10,marginBottom:30,
    },  label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
      },
      inputAndroid: {
        // height: 60,
        backgroundColor: '#fafafa',
        // borderRadius: 12,
        // paddingHorizontal: 20,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
      },
      inputIOS: {
        // height: 60,
        backgroundColor: '#fafafa',
        // borderRadius: 12,
        // paddingHorizontal: 20,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
      },
      selectedText: {
        marginTop: 20,
        fontSize: 16,
        color: '#0074f3',
      },
         phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderRadius: 12,
        // borderWidth: 1,
        // borderColor: '#ccc',
        paddingHorizontal: 20,
        backgroundColor:'#fafafa',
        marginBottom: 20,
        backgroundColor: '#fff', // White background for better visibility
      },
      countryyContainer: {
        flexDirection: 'row',
        backgroundColor:'#fafafa',
        alignItems: 'center',
        justifyContent:"flex-start"
        // marginRight: 10, // Add space between country code and text input
      },
      flagContainer: {
        // marginRight: 5, // Space between flag and chevron
      },
      chevron: {
        marginLeft: -7,
        marginRight: 8, // Space between chevron and country code
      },
      callingCode: {
        fontSize: 16,
        color: '#616161',
        marginRight: 10, // Space between calling code and phone input
      },
      phoneInput: {
        flex: 1, // Take up remaining space
        fontSize: 16,
        color: '#616161',
      },
  });