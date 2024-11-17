import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const hiringStores = [
  { name: 'Don Macchiatos', qualifications: 'Barista, Customer Service' },
  { name: 'Messy Cup', qualifications: 'Barista, Cashier' },
  { name: 'Tatings', qualifications: 'Cook, Cashier' },
  { name: 'McDonalds', qualifications: 'Crew Member, Manager' },
];

const applicants = [
  { name: 'John Doe', appliedFor: 'Barista' },
  { name: 'Jane Smith', appliedFor: 'Cook' },
  { name: 'Sam Brown', appliedFor: 'Cashier' },
  { name: 'Melody Samson', appliedFor: 'Crew Member' },
];

export default function Create() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({ applicantName: '', appliedFor: '' });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleAddPost = () => {
    // Logic to add post (e.g., add to applicants)
    setNewPost({ applicantName: '', appliedFor: '' });
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
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


      {/* Add Post Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add Post</Text>
      </TouchableOpacity>

      {/* Add Post Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Post Your Application</Text>

            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={newPost.applicantName}
              onChangeText={(text) => setNewPost({ ...newPost, applicantName: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Position Applied For"
              value={newPost.appliedFor}
              onChangeText={(text) => setNewPost({ ...newPost, appliedFor: text })}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleAddPost}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Hiring Stores List */}
      <Text style={styles.sectionTitle}>Hiring Stores</Text>
      {hiringStores.map((store, index) => (
        <View key={index} style={styles.storeContainer}>
          <Text style={styles.storeName}>{store.name}</Text>
          <Text style={styles.qualifications}>Qualifications: {store.qualifications}</Text>
        </View>
      ))}

      {/* Applicants List */}
      <Text style={styles.sectionTitle}>Applicants</Text>
      {applicants.map((applicant, index) => (
        <View key={index} style={styles.applicantContainer}>
          <Text style={styles.applicantName}>{applicant.name}</Text>
          <Text style={styles.appliedFor}>Applied for: {applicant.appliedFor}</Text>
        </View>
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0CCFF',
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  addButton: {
    backgroundColor: '#de88ff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modalContent: {
    width: '90%',
    height: '60%', // Make the modal larger
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalTitle: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },

  submitButton: {
    backgroundColor: '#de88ff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },

  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },

  closeButtonText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },

  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    color: '#333',
  },

  storeContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  storeName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#003366',
  },

  qualifications: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#666',
  },

  applicantContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  applicantName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#003366',
  },

  appliedFor: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#666',
  },

  searchContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 1,
  },

  searchBar: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  searchIcon: {
    position: 'absolute',
    left: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    width: 20,
    height: 20,
  },
});
