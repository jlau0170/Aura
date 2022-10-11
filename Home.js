import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
const { width } = Dimensions.get('window');
const Home = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>How are you {"\n"}feeling today?{"\n"}</Text>
      <View style={styles.circleRow}>
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#99DAFF'}} />
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#FCCBB5'}} />
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#F9C0D3'}} />
      </View>
      <View style={styles.circleRow}>
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#F5FCAF'}} />
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#DBCEFC'}} />
        <TouchableOpacity style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#CAF39B'}} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      </View>
    </View>



  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingVertical: 20,
  },
  circleRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff9900',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Home;