import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Link, SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const index = () => {

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-'>Formates</Text>
      <StatusBar barStyle="default" />
      <Link href="/profile" style={{color:'blue'}}> Go to profile</Link>
    </View>
  )
}

export default index
