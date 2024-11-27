import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
        <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.push('/(Tabs)');
        }}>
          <Text>Go to App Home Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})