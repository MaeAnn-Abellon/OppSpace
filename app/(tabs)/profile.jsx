import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// Import your cover image
const CoverImage = require('../../assets/image/cover.png');

export default function Profile() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar with Icon */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search other users"
          placeholderTextColor="#aaa"
        />
        <Image
          source={require('../../assets/image/search.png')}
          style={styles.searchIcon}
        />
      </View>

      {/* Profile Picture and Name */}
      <View style={styles.profileInfoContainer}>
        <Image
          source={CoverImage}
          style={styles.profileBackground}
        />
        <Image
          source={require('../../assets/image/pfp.png')}
          style={styles.profileImage}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>Mae Ann Abellon</Text>
          <Text style={styles.jobTitle}>Job Applicant</Text>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Contact Information:</Text>
        <Text>Phone: 0912 345 6789</Text>
        <Text>Email: wingmanforthewin@gmail.com</Text>
        <Text>LinkedIn: raketph.com/@sera</Text>
      </View>

      {/* Skills and Expertise */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Skills and Expertise:</Text>
        <Text>Digital Marketing</Text>
        <Text>App Development</Text>
        <Text>Programming</Text>
      </View>

      {/* Portfolio */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Portfolio:</Text>
        <Text>Resume/CV Upload                                             📂</Text>
        <Text>Projects and Design                                            📂</Text>
        <Text>Certifications and Awards                                 📂</Text>
      </View>

      {/* Educational Background */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Educational Background:</Text>
        <Text>Bachelor of Science in Computer Science</Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0CCFF',
    paddingTop: 20,
  },

  profileInfoContainer: {
    width: '100%',
    height: 200,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },

  profileBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
    zIndex: 1,
  },

  profileName: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
  },

  jobTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
  },

  infoSection: {
    width: '95%',
    left: 10,
    marginBottom: 20,
    backgroundColor: '#FAF7F0',
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  infoTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#333',
    marginBottom: 5,
  },

  searchContainer: {
    position: 'relative',
    width: 380,
    left: 10,
    marginBottom: 20,
  },

  searchBar: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 50,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },

  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    width: 20,
    height: 20,
  },
});
