import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='siswa'/>
        <Stack.Screen name='kelas'/>
        <Stack.Screen name='guru'/>
        <Stack.Screen name='mapel'/>
        <Stack.Screen name='nilai'/>
    </Stack>
  )
}