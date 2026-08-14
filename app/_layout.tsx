import React, { useState } from 'react';
import { 
  Stack,
  Redirect,
  
} from "expo-router";
//import * as SplashScreen from 'expo-splash-screen';

// Default splash auto hide বন্ধ
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [isLogin, setIsLogin] = useState(true)
  
  return (
    <>
    <Stack 
      screenOptions={{
        headerShown: false,
      }}
    />
    {
      isLogin ? <Redirect href={'/(tabs)/Home'}/> : <Redirect href={'/(auth)/login'}/>
    }
    </>
  );
}