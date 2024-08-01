import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <StatusBar barStyle="default" />
      <Link href="/profile" style={{color:'blue'}}> Go to profile</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})