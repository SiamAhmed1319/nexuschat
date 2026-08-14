import React from 'react';
import { Stack, Redirect } from 'expo-router'


export default function AuthStack () {
  
  
  return (
    <Stack screenOptions={{ headerShown: false, }}>
      <Stack name='onBord'/>
      <Stack name='login'/>
      <Stack name='register'/>
      <Stack name='forgetPass'/>
      <Stack name='newPass'/>
    </Stack>
  );
};