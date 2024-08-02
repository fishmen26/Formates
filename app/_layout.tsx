import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    "SpaceMono" : require('../assets/fonts/SpaceMono-Regular.ttf'),
    "IBMPlexSans-Bold": require("../assets/fonts/IBMPlexSans-Bold.ttf"),
    "IBMPlexSans-BoldItalic": require("../assets/fonts/IBMPlexSans-BoldItalic.ttf"),
    "IBMPlexSans-IBMPlexSans-ExtraLight": require("../assets/fonts/IBMPlexSans-ExtraLight.ttf"),
    "IBMPlexSans-ExtraLightItalic": require("../assets/fonts/IBMPlexSans-ExtraLightItalic.ttf"),
    "IBMPlexSans-Italic": require("../assets/fonts/IBMPlexSans-Italic.ttf"),
    "IBMPlexSans-Light": require("../assets/fonts/IBMPlexSans-Light.ttf"),
    "IBMPlexSans-LightItalic": require("../assets/fonts/IBMPlexSans-LightItalic.ttf"),
    "IBMPlexSans-Medium": require("../assets/fonts/IBMPlexSans-Medium.ttf"),
    "IBMPlexSans-MediumItalic": require("../assets/fonts/IBMPlexSans-MediumItalic.ttf"),
    "IBMPlexSans-Regular": require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    "IBMPlexSans-SemiBold": require("../assets/fonts/IBMPlexSans-SemiBold.ttf"),
    "IBMPlexSans-SemiBoldItalic": require("../assets/fonts/IBMPlexSans-SemiBoldItalic.ttf"),
    "IBMPlexSans-Text" : require("../assets/fonts/IBMPlexSans-Text.ttf"),
    "IBMPlexSans-TextItalic" : require("../assets/fonts/IBMPlexSans-TextItalic.ttf"),
    "IBMPlexSans-Thin" : require("../assets/fonts/IBMPlexSans-Thin.ttf"),
    "IBMPlexSans-ThinItalic" : require("../assets/fonts/IBMPlexSans-ThinItalic.ttf"),
  });

  useEffect(()=>{
  if(error) throw error;

  if(fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded,error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
  );
}
