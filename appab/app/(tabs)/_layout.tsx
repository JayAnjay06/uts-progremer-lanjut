import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Tabs } from 'expo-router'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const LayOut = () => {
  return (
    <Tabs screenOptions={{
      headerShown:false
    }}>
      <Tabs.Screen
      name="home"
      options={{
        tabBarIcon:({color})=> <Feather name="home" size={24} color="black" />
      }}/>
      <Tabs.Screen
      name="profil"
      options={{
        tabBarIcon:({color})=><AntDesign name="user" size={24} color="black" />
      }}
      />
    </Tabs>
  )
}

export default LayOut