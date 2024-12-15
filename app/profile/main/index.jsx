import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,Dimensions, FlatList
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserProfileScreen() {


    const images = [
        require('../../../assets/images/Cards.png'), // Replace with your local images
        require('../../../assets/images/Cards.png'),
        require('../../../assets/images/Cards.png')
      ];
    
      const { width } = Dimensions.get('window');
      const imageWidth = width * 0.7; // Adjust width for the carousel effect

      const pages = [
        {
          id: '1',
          image: require('../../../assets/images/Cards.png'), // Replace with your local images
          profile: require('../../../assets/images/emma.png'),
          title: 'Goals',
          likes: '20K Likes',
        },
        {
          id: '2',
          image: require('../../../assets/images/Cards.png'),
          profile: require('../../../assets/images/emma.png'),
          title: 'Goals',
          likes: '20K Likes',
        },
        {
          id: '3',
          image: require('../../../assets/images/Cards.png'),
          profile: require('../../../assets/images/emma.png'),
          title: 'Goals',
          likes: '20K Likes',
        },
      ];

      const [selectedId, setSelectedId] = useState(null);

      const data = [
        { id: 1, title: "Running", distance: "310.22 km" },
        { id: 2, title: "Cycling", distance: "200.00 km" },
        { id: 3, title: "Walking", distance: "150.50 km" },
        { id: 4, title: "Swimming", distance: "50.10 km" },
      ];
    
      const renderItem = ({ item }) => {
        const isSelected = selectedId === item.id;
    
        return (
          <TouchableOpacity
            onPress={() => setSelectedId(item.id)}
            style={{
              marginLeft: 20,
              height: 188,
              width: 135,
              borderRadius: 12,
              backgroundColor: isSelected ? "#1b85f3" : "#ffffff",
              marginRight: 0,
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <View style={{ paddingHorizontal: 15 }}>
              <View
                style={{
                  marginTop: 15,
                  height: 40,
                  backgroundColor: isSelected ? "#f4ecff" : "#eceff2",
                  borderRadius: 100,
                  width: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="directions-run"
                  size={28}
                  color={isSelected ? "#ffffff" : "#000000"}
                />
              </View>
              <Text
                style={{
                  color: isSelected ? "#ffffff" : "#808b9a",
                  fontSize: 14,
                  fontWeight: "600",
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                color: isSelected ? "#ffffff" : "#39434f",
                fontWeight: "700",
                fontSize: 20,
                lineHeight: 24,
                position: "absolute",
                bottom: 13,
                left: 15,
              }}
            >
              {item.distance}
            </Text>
            <Image
              source={require('../../../assets/images/mountain.png')}
              style={{
                height: 114.5,
                width: "100%",
                position: "static",
                bottom: 0,
                marginBottom: 30,
                tintColor: isSelected ? undefined : "#eceff2",
              }}
            />
          </TouchableOpacity>
        );
      };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image source={require('../../../assets/images/profile.png')} style={styles.coverPhoto} />
          <View style={styles.profileInfo}>
            <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/8234/8960/d0e0ce2f4c2fa242f168c35f930c5145?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyRcMTDj1GlubOxQcPTwEAWAmhrOYyqul0W0blnsFkHzyDB-iDzVLO0I8WUU7SDxX5mkw-jp7zGybv7rmist-pCVZ911NBLNT2ZagAfZSxaocgan9e3Fvr0J84TMUA1TcupWcXSBHINGoqiDVfLS8ui9vZOFIrMhMGLU3md99qZ0OGzVe07Pkk4R4iAdrLUoFfQBTprBt5V3jTb1tv23v9xXIIVjHlGOpIbI68x0W0wHdgZfPaWMvK8uMYuAsfSrQ1~6k8KvmNgwzfofT7BBbzQ7GrdiPFYESwzAX4wtoun923aqOtPaCXpPxPA1P7zDzDSXr3PVkAaHngkGPNEndg__' }} style={styles.profileImage} />
<View 
style={{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
}}
>
<Text style={[styles.profileName,{
    marginRight:15
}]}>Nataly Nelson</Text>
            <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height:23,
            width:62,
            backgroundColor:"red",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:6
        }}
        >
           <Text style={styles.badge}>Yoga</Text>
        </LinearGradient>
</View>
            <Text style={styles.profileDescription}>
              "My mantra is self-love. If you push me towards a weakness, I will turn that..."
            </Text>
            <View style={styles.statsContainer}>
              <View style={styles.statsItem}>
                <Text style={styles.statsNumber}>1024</Text>
                <Text style={styles.statsLabel}>Followers</Text>
              </View>
              <View style={styles.statsItem}>
                <Text style={styles.statsNumber}>74</Text>
                <Text style={styles.statsLabel}>Following</Text>
              </View>
                          <LinearGradient
          colors={['#006BE5', '#4A0AB4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.followButton}
        >
            <Text style={styles.followButtonText}>Follow</Text>
        </LinearGradient>
            </View>
          </View>
        </View>

        <Text style={{
            paddingLeft:25,
            fontWeight:"400",
            fontSize:14,
            lineHeight:16.8,
            marginTop:10,
            marginBottom:15
        }}>More</Text>

        {/* Menu Section */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.menuSection}>
      {[{
        name: "About",
        icon: "user-circle",
      },{
        name: "Event",
        icon: "bars",
      },{
        name: "Request",
        icon: "user-plus",
      },{
        name: "Photos",
        icon: "images",
      },{
        name: "Video",
        icon: "video",
      },].map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <FontAwesome5 name={item.icon} size={20} color="#6E6E6E" />
          <Text style={[styles.menuItemText,{
            marginTop:5
          }]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {/* Post Section */}

    <View style={{
        backgroundColor:"#ffffff",
        borderRadius:8,
        // height:93,
        width:"87%",
        margin:"auto",
        marginVertical:15,
        
    }}>
        <View style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            // justifyContent:"flex-start"
            marginBottom:5,
            padding:15
        }}>
        <FontAwesome5 name="cloud-upload-alt" size={16} color="#0074f3" />
        <Text style={{
            color:"#000000",
            fontWeight:"400",
            fontSize:12,
            lineHeight:16.8,
            marginLeft:10
        }}>What on your mind today</Text>
        </View>
        <View style={{
            display:"flex",
            justifyContent:"space-between",
            paddingHorizontal:15,
            flexDirection:"row",
           marginBottom:20
        }}>
             {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.menuSection}>{ */}
             {
                [{
                  name: "Image/Video",
                  icon: "file-image"
                },{
                  name: "Post",
                  icon: "file-import"
                },{
                  name: "Event List",
                  icon: "bars"
                },].map((item,index) =>    <TouchableOpacity key={index} style={{
                    height:29,
                    borderRadius:6,
                    backgroundColor:"#f4ecff",
                    paddingHorizontal:10,
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    flexDirection:"row",
                    marginRight:15,
                //    flex:1
                }}>
               
                <Text style={[styles.menuItemText,{
                    marginRight:10
                }]}>{item.name}</Text>
                <FontAwesome5 name={item.icon} size={13} color="#0049af" />
              </TouchableOpacity>)}
            {/* }</ScrollView> */}
        </View>
    </View>

    {/* Activity Section */}

    <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
        marginLeft:3
,        marginVertical:15
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 10 }}>
            <Image source={item} style={{
                  height: 180,
                  borderRadius: 6,
                //   width:"100%"
            }} />
          </View>
        )}
      />

        {/* Achievements Section */}
        <View style={{
            display:"flex",
            flexDirection:"column",
            // alignItems:"center",
            justifyContent:"center",
            paddingHorizontal:25,marginTop:15
        }}>
          <TouchableOpacity style={{
            height:103,
            borderWidth:1,
            borderColor:"#f7fafc",
            backgroundColor:"#ffffff",
            borderRadius:12,
            marginBottom:32,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:15
          }}>

<View
      style={{
        position: 'relative', // Enables absolute positioning for overlay
        height: 78,
        width: 78,
      }}
    >
      <Image
        source={require('../../../assets/images/circle.png')}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
      <View
        style={{
          position: 'absolute', // Positioning overlay on top of image
          top: '50%',
          left: '50%',
          transform: [{ translateX: -28 }, { translateY: -28 }], // Center overlay
          height: 56,
          width: 56,
          backgroundColor: '#1996ff',
          borderRadius: 30, // Circular overlay
          alignItems: 'center',
          justifyContent: 'center',opacity: 0.67,
        }}
      >
        <Image
          source={require('../../../assets/images/medal.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>

            

            <View style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start"
            }}>
            <Text style={{
                fontWeight:"700",
                fontSize:18,
                lineHeight:21.6,
                color:"#39434f",
                marginBottom:8
            }}>140</Text>
            <Text style={{
                  fontWeight:"500",
                  fontSize:14,
                  lineHeight:16.8,
                  color:"#757575"
            }}>My Achievements</Text>
            </View>
           <View style={{
            marginLeft:30
           }}>
            {/* <FontAwesome5 name="plus-circle" size={32} color="#1b85f3" /> */}
            <Image
          source={require('../../../assets/images/plus-btn.png')}
          style={{
            height: 32,
            width: 31,
          }}
        />
           </View>
          </TouchableOpacity>
          <TouchableOpacity style={{
            height:103,
            borderWidth:1,
            borderColor:"#f7fafc",
            backgroundColor:"#ffffff",
            borderRadius:12,
            marginBottom:16,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:15
          }}>

<View
      style={{
        position: 'relative', // Enables absolute positioning for overlay
        height: 78,
        width: 78,
      }}
    >
      <Image
        source={require('../../../assets/images/circle2.png')}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
      <View
        style={{
          position: 'absolute', // Positioning overlay on top of image
          top: '50%',
          left: '50%',
          transform: [{ translateX: -28 }, { translateY: -28 }], // Center overlay
          height: 56,
          width: 56,
          backgroundColor: '#4a0ab4',
          borderRadius: 30, // Circular overlay
          alignItems: 'center',
          justifyContent: 'center',opacity: 0.67,
        }}
      >
        <Image
          source={require('../../../assets/images/scroll.png')}
          style={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>

            

            <View style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start"
            }}>
            <Text style={{
                fontWeight:"700",
                fontSize:18,
                lineHeight:21.6,
                color:"#39434f",
                marginBottom:8
            }}>140</Text>
            <Text style={{
                  fontWeight:"500",
                  fontSize:14,
                  lineHeight:16.8,
                  color:"#757575"
            }}>My Certificate</Text>
            </View>
           <View style={{
            marginLeft:55
           }}>
            {/* <FontAwesome5 name="plus-circle" size={32} color="#1b85f3" /> */}
            <Image
          source={require('../../../assets/images/plus-btn.png')}
          style={{
            height: 32,
            width: 31,
          }}
        />
           </View>
          </TouchableOpacity>
        </View>

        {/* My Page Section */}
        <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: '#F8F9FF',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 16,
        }}
      >
        My Page
      </Text>
      
      <FlatList
        data={pages}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: '48%',
              backgroundColor: '#FFF',
              borderRadius: 12,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Image
              source={item.image}
              style={{
                height: 100,
                width: '100%',
                // borderRadius: 12,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom:"47%",
                left: '37%',
                // height: 40,
                // width: 40,
                backgroundColor: '#FFF',
                borderRadius: "100%",
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                
              }}
            >
              <Image
                source={item.profile}
                style={{
                  height: 47,
                  width: 45,
                //   borderRadius: 18,
                }}
                resizeMode='cover'
              />
            </View>
<View style={{padding:12}}>            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginTop: 8,
                textAlign: 'center',
                color:"#39434f"
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight:14.4,
                fontWeight:"400",
                color: '#616161',
                textAlign: 'center',
                marginBottom:12,
              }}
            >
              {item.likes}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#f4ecff',
                  height:28,
                //   paddingVertical: 6,
                //   paddingHorizontal: 12,
                  borderRadius: 6,
                  flex:1,
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  marginRight:10
                }}
              >
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 11,
                    lineHeight:12,
                    textAlign:"center",
                    fontWeight:"700"
                  }}
                >
                  Edit Page
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                height:28,
                width:28,
                backgroundColor:"#f4ecff",
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                borderRadius:6
              }}>
                <Text
                  style={{
                    textAlign:"center",
                    fontSize: 13,
                    color: '#FF0000',
                  }}
                >🗑</Text>
              </TouchableOpacity>
            </View></View>
          </View>
        )}
        // Add Create Page button as part of the list using ListFooterComponent
        ListFooterComponent={
          <View
            style={{
              width: '48%',
              backgroundColor: '#FFF',
              borderRadius: 14,
              marginBottom: 16,
              padding: 12,
              alignItems: 'center',
              justifyContent: 'center',
              height:200
            }}
          >
                    <Image
          source={require('../../../assets/images/plus-btn.png')}
          style={{
            height: 39,
            width: 39,
            marginBottom:30
          }}
        />
            <Text
              style={{
                fontSize: 16,
                lineHeight:19.2,
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 7,
                color:"#39434f"
              }}
            >
              Create Page
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight:"400",
                textAlign: 'center',
                color: '#808b9a',
                lineHeight:14.4
              }}
            >
              It's only take a few minutes!
            </Text>
          </View>
        }
      />
    </View>

        {/* Digital Badges Section */}
        <View style={{
                  paddingHorizontal:20,
                  marginBottom:20,
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"space-between",
                  width:"99%"
        }}>
        <Text style={{
            fontWeight:"400",
            fontSize:14,
            lineHeight:16.8,
            color:"#000000",
          }}>Digital Badges</Text>
          <View style={{
            display:"flex",
            flexDirection:"row",

          }}>
            <Text style={{
                color:"#0049af",
                fontSize:14,
                fontWeight:"600",
                lineHeight:16.8,
                marginRight:10
            }}>See all</Text>
             <FontAwesome5 name="arrow-right" size={15} color="#0049af" />
          </View>
        </View>
        <View style={{
            // paddingHorizontal:10,
            marginBottom:40,
            flex:1
        }}>
            <FlatList 
                data={[
                    {id:1},
                    {id:2},
                    {id:3},
                    {id:4},
                ]}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{
                        // height:106,
                        // width:86,
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        justifyContent:"center",
                        // padding:20
                        paddingHorizontal:10
                    }}>
                                    <Image
          source={require('../../../assets/images/trophy.png')}
          style={{
            height: 86,
            width: 86,
            marginBottom:15
          }}
        />
        <Text style={{
            fontSize:12,
            lineHeight:14.4,
            fontWeight:"400",
            color:"#606873",
            // marginTop:40
        }}>Oct 2024</Text>
                    </View>
                )}
            />
        </View>

        {/* Overall Activity Stats */}
        <View style={{
                  paddingHorizontal:20,
                  marginBottom:20,
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"space-between",
                  width:"99%"
        }}>
        <Text style={{
            fontWeight:"400",
            fontSize:14,
            lineHeight:16.8,
            color:"#000000",
          }}>Overall Activity Stats</Text>
          <View style={{
            display:"flex",
            flexDirection:"row",

          }}>
            <Text style={{
                color:"#0049af",
                fontSize:14,
                fontWeight:"600",
                lineHeight:16.8,
                marginRight:10
            }}>See all</Text>
             <FontAwesome5 name="arrow-right" size={15} color="#0049af" />
          </View>
        </View>
        <View style={{
            flex:1,
            // paddingHorizontal:20,
            marginBottom:30
        }}>
                       {/* <FlatList 
                data={[
                    {id:1},
                    {id:2},
                    {id:3},
                    {id:4},
                ]}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{
                        marginLeft:20,
                        height:188,
                        width:135,
                        borderRadius:12,
                        // padding:12,
                        backgroundColor:"#1b85f3",
                        marginRight:0,
                        display:"flex",
                        alignItems:"flex-start",
                        flexDirection:"column"
                    }}>
                        <View style={{
                            paddingHorizontal:15
                        }}>
                        <View style={{
                            // marginLeft:15
                            marginTop:15,
                            height:40,
                            backgroundColor:"#f4ecff",
                            borderRadius:"100%",
                            // padding:15,
                            width:40,
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                        }}>
                        <MaterialIcons name="directions-run" size={28} color="#ffffff" />
                        </View>
                        <Text style={{
                            color:"#ffffff",
                            fontSize:14,
                            fontWeight:"600",
                            marginTop:15,marginBottom:15
                        }}>
                            Running
                        </Text>
                        </View>
                        <Text style={{
                            color: "#ffffff",
                            fontWeight:"700",
                            fontSize:20,
                            lineHeight:24,
                            position:"absolute",
                            bottom:13,
                            left:15
                        }}>310.22 km</Text>
                        <Image
          source={require('../../../assets/images/mountain.png')}
          style={{
            height: 114.5,
            // width: 135.5,
            position:"static",
            bottom:0,
            // width: 39,
            width:"100%",
            marginBottom:30
          }}
        />
        </View>
        )}
            /> */}
                <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    /> 
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
  },
  container: {
    flex: 1,
    // padding: 10,
  },
  profileHeader: {
    marginBottom: 20,
  },
  coverPhoto: {
    // height: 200,
    width:"100%",
    backgroundColor: '#D9D9D9',
  },
  profileInfo: {
    alignItems: 'flex-start',
    marginTop: -50,
    marginLeft:25
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 5,
  },
  badgeContainer: {
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    padding: 5,
  },
  badge: {
    color: '#FFF',
    fontSize: 13,
    fontWeight:"700"
  },
  profileDescription: {
    // textAlign: 'center',
    color: '#616161',
    lineHeight:16.8,
    fontSize:14,
    marginVertical: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems:"center"
  },
  statsItem: {
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: '700',
  },
  statsLabel: {
    fontSize: 14,
    color: '#828282',
    fontWeight:"400"
  },
  followButton: {
    backgroundColor: '#6C63FF',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    height:32,
    width:84,
    borderRadius: 6,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",marginRight:20
  },
  followButtonText: {
    color: '#FFF', fontSize: 14,
    fontWeight: '700',
    textAlign:"center"
  },
  menuSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal:20
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 63,
    height: 63,
    borderRadius: 6, // Makes the item circular
    backgroundColor: '#fff', // Behind transparent areas
    margin: 6, // Gap between items
  },
  menuItemText: {
    fontSize: 12,
    color: '#000000', // Adjusted for better visibility
    // marginTop: 5,
    fontWeight:"500"
  },
  
  activitySection: {
    marginBottom: 20,
  },
  activityCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  activityCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  activityCardSubtitle: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 10,
  },
  activityImage: {
    height: 100,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  achievementsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  achievementCard: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  achievementSubtitle: {
    fontSize: 12,
    color: '#757575',
  },
  myPageSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  myPageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageCard: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  pageImage: {
    height: 80,
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  pageSubtitle: {
    fontSize: 12,
    color: '#757575',
  },
  digitalBadgesSection: {
    marginBottom: 20,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  badgeCard: {
    alignItems: 'center',
  },
  badgeImage: {
    height: 50,
    width: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    marginBottom: 5,
  },
  badgeDate: {
    fontSize: 12,
    color: '#757575',
  },
  statsSection: {
    marginBottom: 20,
  },
  statsCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  statsTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },
  statsValue: {
    fontSize: 12,
    color: '#757575',
  },
});
