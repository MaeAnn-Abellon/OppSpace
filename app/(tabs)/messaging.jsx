import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Messaging() {
  // Load Montserrat fonts
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const [searchText, setSearchText] = useState('');

  // Data for conversations including unread messages and online status
  const conversations = [
    { id: '1', name: 'Claud', lastMessage: 'Helloo! Im hunggryyy fee...', image: require('../../assets/image/claud.png'), unread: 1, online: false, timestamp: '9:45 AM' },
    { id: '2', name: 'Penelope', lastMessage: 'uuuu thereeeeee?????', image: require('../../assets/image/penelope.png'), unread: 28, online: true, timestamp: '9:30 AM' },
    { id: '3', name: '7/11 Toledo', lastMessage: 'We have received your app...', image: require('../../assets/image/sebenleben.png'), unread: 0, online: true, timestamp: '9:15 AM' },
    { id: '4', name: 'Jollibee Toledo', lastMessage: 'See you soon.', image: require('../../assets/image/jbeelogo.png'), unread: 0, online: true, timestamp: '9:00 AM' },
    { id: '5', name: 'Kuzh', lastMessage: 'Okaayy', image: require('../../assets/image/meme.png'), unread: 0, online: true, timestamp: '8:45 AM' },
    { id: '6', name: 'CutesyGetto', lastMessage: 'Skibidi Toilet', image: require('../../assets/image/getto.png'), unread: 0, online: true, timestamp: '8:15 AM' },
    { id: '7', name: 'Anya', lastMessage: 'Peanut', image: require('../../assets/image/anya.png'), unread: 0, online: true, timestamp: '8:30 AM' },
    { id: '8', name: 'Sawako', lastMessage: 'Yes.', image: require('../../assets/image/profile1.png'), unread: 0, online: false, timestamp: '8:00 AM' },
  ];

  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderConversationItem = ({ item }) => (
    <TouchableOpacity style={styles.conversationContainer}>
      <View style={styles.profileContainer}>
        <Image source={item.image} style={styles.profileImage} />
        {item.online && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.profileName, item.unread > 0 && { fontFamily: 'Montserrat-Bold' }]}>
            {item.name}
          </Text>
          {item.unread > 0 && (
            <Text style={styles.unreadCount}>({item.unread})</Text>
          )}
        </View>
        <Text style={[styles.lastMessage, item.unread > 0 && { fontFamily: 'Montserrat-Bold', color: '#000' }]}>
          {item.lastMessage}
        </Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar with Icon inside */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Image
          source={require('../../assets/image/search.png')}
          style={styles.searchIcon}
        />
      </View>

      {/* FlatList for displaying conversations */}
      <FlatList
        data={filteredConversations}
        renderItem={renderConversationItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F0CCFF',
    paddingTop: 20,
    paddingHorizontal: 10, // Add horizontal padding for the entire container
  },

  searchContainer: {
    position: 'relative',
    width: '90%', // Use full width for the search bar
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
    width: '100%', // Stretch the search bar to full width
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%', // Center vertically
    transform: [{ translateY: -10 }], // Adjust for centering
    width: 20,
    height: 20,
  },

  conversationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 30,
    width: '100%', // Stretch conversation item to full width
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  profileContainer: {
    position: 'relative',
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#00FF00',
    borderWidth: 1,
    borderColor: '#FFFFFF', // Optional: white border for better visibility
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileName: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
  },

  unreadCount: {
    fontSize: 14,
    color: '#FF3333',
    marginLeft: 5,
  },

  lastMessage: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#666',
  },

  timestamp: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    marginLeft: 'auto', // Push it to the right
  },
});
