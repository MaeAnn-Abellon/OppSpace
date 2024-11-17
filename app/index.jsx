import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CustomButton from '../Components/CustomButton';
import { useRouter } from 'expo-router';

export default function App() {
  
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Montserrat-Black": require('../assets/fonts/Montserrat-Black.ttf'),
    "Montserrat-Bold": require('../assets/fonts/Montserrat-Bold.ttf'),
    "Montserrat-ExtraBold": require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    "Montserrat-ExtraLight": require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    "Montserrat-Light": require('../assets/fonts/Montserrat-Light.ttf'),
    "Montserrat-Medium": require('../assets/fonts/Montserrat-Medium.ttf'),
    "Montserrat-Regular": require('../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-SemiBold": require('../assets/fonts/Montserrat-SemiBold.ttf'),
    "Montserrat-Thin": require('../assets/fonts/Montserrat-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
     
      <Image
        source={require('../assets/image/cloud.png')}
        style={[styles.cloud, styles.leftCloud]}
      />
     
      <Image
        source={require('../assets/image/cloud.png')}
        style={[styles.cloud, styles.rightCloud]}
      />

   
      <View>
        <Image
          source={require('../assets/image/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        OppSpace
      </Text>

      <CustomButton
      title="Continue with Email"
      handlePress={()=> router.push('/sign-in')}
      containerStyles="w-full mt-7"
      >
      </CustomButton>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#de88ff', 
  },
  logo: {
    height: 240,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Montserrat-Medium', 
    textAlign: 'center',
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    color: '#fff', 
  },
  cloud: {
    position: 'absolute',
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  leftCloud: {
    top: '70%',  
    left: '50%',
  },
  rightCloud: {
    top: '10%',  
    right: '50%',

  },
});
