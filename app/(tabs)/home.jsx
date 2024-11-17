import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const topStores = [
    { name: 'Don Macchiatos', logo: require('../../assets/image/dclogo.png'), rating: 4.8, image: require('../../assets/image/graph.png') },
    { name: 'Messy Cup', logo: require('../../assets/image/mcuplogo.png'), rating: 4.7, image: require('../../assets/image/graph.png') },
    { name: 'Tatings', logo: require('../../assets/image/tatings.png'), rating: 4.9, image: require('../../assets/image/graph.png') },
    { name: 'McDonalds', logo: require('../../assets/image/mcdologo.png'), rating: 4.5, image: require('../../assets/image/graph.png') },
    { name: 'Burger King', logo: require('../../assets/image/bklogo.png'), rating: 4.6, image: require('../../assets/image/graph.png') },
    { name: 'Jollibee', logo: require('../../assets/image/jbeelogo.png'), rating: 4.8, image: require('../../assets/image/graph.png') },
  ];

  const handleStorePress = (store) => {
    setSelectedStore(store);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Search Bar with Icon */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#aaa"
          />
          <Image
            source={require('../../assets/image/search.png')}
            style={styles.searchIcon}
          />
        </View>

        <Image
          source={require('../../assets/image/banner.png')}
          style={styles.banner}
        />

        {/* Buttons side by side */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explore Jobs</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Applicants</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Jobs Section */}
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <View style={styles.featuredJobsContainer}>
          {/* Example job cards */}
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Software Developer</Text>
            <Text style={styles.jobCompany}>Tech Co.</Text>
          </View>
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Graphic Designer</Text>
            <Text style={styles.jobCompany}>Creative Inc.</Text>
          </View>
        </View>

        {/* User Testimonials */}
        <Text style={styles.sectionTitle}>User Testimonials</Text>
        <View style={styles.testimonialContainer}>
          <Text style={styles.testimonialText}>"I found my dream job through this app!"</Text>
          <Text style={styles.testimonialAuthor}>- Happy User</Text>
        </View>

        {/* Top Stores Section */}
        <Text style={styles.sectionTitle}>Top Stores</Text>
        <View style={styles.topStoresContainer}>
          {topStores.map((store, index) => (
            <TouchableOpacity key={index} style={styles.storeCard} onPress={() => handleStorePress(store)}>
              <Image source={store.logo} style={styles.storeLogo} />
              <View style={styles.storeInfo}>
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeRating}>⭐ {store.rating}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Modal for showing store image */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setSelectedStore(null);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedStore && (
                <>
                  <Image source={selectedStore.image} style={styles.modalImage} />
                  <Text style={styles.modalTitle}>{selectedStore.name}</Text>
                </>
              )}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedStore(null);
                }}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F0CCFF', // Keeping the original background
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },

  searchContainer: {
    position: 'relative',
    width: 340,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    width: 20,
    height: 20,
  },

  banner: {
    width: 370,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10, // Soft rounded edges
  },

  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    color: '#673AB7', // More vibrant purple
  },

  featuredJobsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  jobCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  jobTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#673AB7', // Adding color to job titles
  },

  jobCompany: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#757575',
  },

  testimonialContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  testimonialText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
    textAlign: 'center',
  },

  testimonialAuthor: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#888',
    marginTop: 5,
  },

  topStoresContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },

  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  storeLogo: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'contain',
  },

  storeInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  storeName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#333',
    textAlign: 'left',
    marginBottom: 5,
  },

  storeRating: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#888',
    textAlign: 'left',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', 
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#BF40BF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    // Adding a gradient
    background: 'linear-gradient(90deg, #f78da7 0%, #c43ad6 100%)',
  },

  buttonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Center the modal vertically
    alignItems: 'center', // Center the modal horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
  },
  
  modalContent: {
    width: '80%', // Limit modal width
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center', // Center content inside modal
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  
  modalImage: {
    width: '100%', // Ensure the image takes up full modal width
    height: undefined, // Make sure the height adjusts automatically
    aspectRatio: 1, // Keep the image square
    resizeMode: 'contain', // Contain the image within the modal without cropping
    marginBottom: 20, // Space between image and text
  },
  
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#333',
    marginBottom: 15, // Space between title and close button
  },
  
  closeButton: {
    backgroundColor: '#de88ff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});  