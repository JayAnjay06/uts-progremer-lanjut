import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // useFonts ({

  //   // Fonts OpenSans
  //   'OpenSans':require('@/assets/fonts/OpenSans_Condensed-Regular.ttf'),
  //   'OpenSans-Medium':require('@/assets/fonts/OpenSans_Condensed-Medium.ttf'),
  //   'OpenSans-Bold':require('@/assets/fonts/OpenSans_Condensed-Bold.ttf'),

  //   // fonts Outfit
  //   'Outfit':require('@/assets/fonts/Outfit-Regular.ttf'),
  //   'Outfit-Medium':require('@/assets/fonts/Outfit-Medium.ttf'),
  //   'Outfit-Bold':require('@/assets/fonts/Outfit-Bold.ttf'),

  //   // fonts Roboto
  //   'Roboto':require('@/assets/fonts/Roboto-Regular.ttf'),
  //   'Roboto-Medium':require('@/assets/fonts/Roboto-Medium.ttf'),
  //   'Roboto-Bold':require('@/assets/fonts/Roboto-Bold.ttf'),

  // })

  return (

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

  );
}