import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
const { width } = Dimensions.get('window');


const Welcome = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };




  return (
    <View style={styles.container}>
        
     
        <Text style={styles.welcomeTitle}>Welcome to Aura</Text>
        <Text style={styles.tagline}>your daily mood tracker</Text>

        <Pressable 
          style={{
            backgroundColor: '#99DAFF',
            padding: 12,
            borderRadius: 6,
            top: '90%',
          }}  
          onPress={() => signOut()}>
          <Text style={styles.buttonText}>get started</Text>
        </Pressable>

        <Pressable 
          style={{
            backgroundColor: '#DAF2FF',
            padding: 12,
            borderRadius: 6,
            top: '90%',
          }}   
          onPress={() => signOut()}>
          <Text style={styles.buttonText}>i already have an account</Text>
        </Pressable>

      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //width: width,
    paddingVertical: 20,
  },
  welcomeTitle: {
    width: 285,
    //height: 129,
    //left: '6%',
    
    bottom: '80%',
    fontSize: 52,
    fontWeight: 'bold',
    lineHeight: 58,
    color: '#99DAFF',
    alignItems: 'center',
  },
  tagline: {
    width: 285,
    //height: 29,
    color: '#ADE969',
    fontSize: 26,
    alignItems: 'center',
    bottom: '74%'
  }
  ,
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff9900',
    padding: 12,
    borderRadius: 6,
    top: '90%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Welcome;