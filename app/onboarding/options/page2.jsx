import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function SportsSelectionScreen() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(23);
  const [selectedHeight, setSelectedHeight] = useState(150);

  const sports = [
    { id: 1, name: 'Male', icon: <MaterialIcons name="male" size={80} color={selectedSport === 1 ? '#fff' : '#0074f3'} /> },
    { id: 2, name: 'Female', icon: <MaterialIcons name="female" size={80} color={selectedSport === 2 ? '#fff' : '#0074f3'} /> },
  ];

  const handleSportSelection = (id) => {
    setSelectedSport(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Few more things about you</Text>
          <Text style={styles.subtitle}>Below information only require to improve your activity quality and give you better experience</Text>
        </View>

        <View style={styles.gridContainer}>
          {sports.map((sport) => (
            <TouchableOpacity
              key={sport.id}
              style={[
                styles.sportItem,
                selectedSport === sport.id && styles.selectedSportItem
              ]}
              onPress={() => handleSportSelection(sport.id)}
            >
              {sport.icon}
              <Text
                style={[
                  styles.sportText,
                  selectedSport === sport.id && styles.selectedSportText
                ]}
              >
                {sport.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.metricsContainer}>
        <View
  style={{
    width: '46%',
    height: 466,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderRadius: 12,
    paddingTop: 15,
    paddingBottom:25
  }}
>
  <Text
    style={{
      fontFamily: 'Lato',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 14.4,
      textAlign: 'center',
      marginBottom: 40,
      color: '#000000',
      marginTop: 5,
    }}
  >
    Height
  </Text>

  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    }}
  >
    {/* Bar Container */}
    <View
      style={{
        height: 374,
        width: 18,
        backgroundColor: '#c9deff',
        borderRadius: 9,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#c9deff',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: selectedHeight - 112, // Dynamic height
          backgroundColor: '#0074f3',
        }}
      />
    </View>

    {/* Labels with Horizontal Lines */}
    <View
      style={{
        height: 374,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      {[190, 180, 170, 160, 150, 140, 130, 120, 112].map((label, index) => (
        <View
          key={label}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: index === 8 ? 0 : 15, // Space between labels
          }}
        >
          {/* Horizontal Line */}
          <View
            style={{
              height: 1,
              width: 52,
              backgroundColor: '#8c8c8c',
              marginRight: 15, // Space between line and label
            }}
          />
          {/* Label Text */}
          <Text
            style={{
              fontFamily: 'Lato',
              fontWeight: '500',
              fontSize: 12,
              lineHeight: 14.4,
              textAlign: 'center',
              color: '#c9c9c9',
            }}
          >
            {label}
          </Text>
        </View>
      ))}
    </View>
  </View>
</View>


         
          <View style={{width:"4%"}}></View>
          <View style={{
            flex:1, width:"46%",
            // backgroundColor:"blue"
          }}>
        <View style={{
            backgroundColor: "#f8f8f8",
            height:220,
            width:175,
            borderRadius:10,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            flexDirection:"column",
            padding:15,
            marginBottom:25
        }}>
            <Text style={{
                color:"#000000",
                fontSize:16,
                fontWeight:"500"
            }}>Weight</Text>
              <Text style={{
                color:"#0049af",
                fontSize:48,
                fontWeight:"700",
                lineHeight:57.6
              }}>{weight}</Text><View style={{
                display:"flex",
                justifyContent:"space-around",
                width:"100%",
                alignItems:"center",
                flexDirection:"row"
            }}>
 
              <TouchableOpacity
                style={styles.metricButton}
                onPress={() => setWeight(weight - 1)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.metricButton}
                onPress={() => setWeight(weight + 1)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            
          </View>

          <View style={{
            backgroundColor: "#f8f8f8",
            height:220,
            width:175,
            borderRadius:10,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            flexDirection:"column",
            padding:15
        }}>
            <Text style={{
                color:"#000000",
                fontSize:16,
                fontWeight:"500"
            }}>Age</Text>
              <Text style={{
                color:"#0049af",
                fontSize:48,
                fontWeight:"700",
                lineHeight:57.6
              }}>{age}</Text><View style={{
                display:"flex",
                justifyContent:"space-around",
                width:"100%",
                alignItems:"center",
                flexDirection:"row"
            }}>
 
              <TouchableOpacity
                style={styles.metricButton}
                onPress={() => setAge(age - 1)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.metricButton}
                onPress={() => setAge(age + 1)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          </View>
            
      
        </View>

        <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.continueButton}
        >
          <Text style={styles.continueText}>Let&apos;s Start</Text>
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
  headerContainer: {
    marginBottom: 20,
    marginTop:40,
  },
  title: {
    color: '#39434f',
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    color: '#616161',
    fontSize: 14,
    lineHeight: 16.8,
    fontWeight: '400',
    marginBottom:25
  },  metricLabel: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: 'center',
    marginBottom: 14,
    color: '#c9c9c9',
  },
  barContainer: {
    height: 374,
    width: 18,
    // position: 'relative',
    backgroundColor: '#c9deff', // Unselected bar background
    borderRadius: 9,
    overflow: 'hidden',
  },
  unselectedBar: {
    flex: 1,
    backgroundColor: '#c9deff',
  },
  selectedBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0074f3',
  },
  labelsContainer: {
    // position: 'absolute',
    left: 30,
    height: 374,
    justifyContent: 'space-between',
  },
  labelText: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: 'center',
    color: '#c9c9c9',
  },
  horizontalLine: {
    width: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
    position: 'absolute',
    bottom: 14,
    left: '50%',
    marginLeft: -26,
  },
  gridContainer: {
    flexDirection: 'row',
    // width:"100%",
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sportItem: {
    width: '48%',
    height: 160,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#323247',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },
  selectedSportItem: {
    backgroundColor: '#006BE5',
  },
  sportText: {
    marginTop: 12,
    color: '#39434f',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedSportText: {
    color: '#fff',
  },
  metricsContainer: {
    marginTop:10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"flex-start",
    flexDirection:"row",
    marginBottom:35
  },
  metricBox1: {
    marginBottom: 15,backgroundColor:"cyan"
    // width:100
  },  metricBox2: {
    marginBottom: 15,
    backgroundColor:"cyan"
  },metricBox3: {
    marginBottom: 15,
    backgroundColor:"cyan",
    flex:1
  },
  metricLabel: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 45,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 10,
  },
  metricButton: {
    backgroundColor: '#1996ff',
    width: 42,
    height: 42,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  continueButton: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom:5
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
