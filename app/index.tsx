import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Link, SplashScreen } from 'expo-router';

const index = () => {

  return (
    <View className='flex-1 items-center justify-center bg-white '>
      <Text className='text-3xl font-ibold'>Formates</Text>
      <StatusBar barStyle="default" />
      <Link href="/community" style={{color:'blue'}}> Go to community</Link>
    </View>
  )
}

export default index
