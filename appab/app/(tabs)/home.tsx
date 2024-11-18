import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#007BFF',
  },

  text:{
    fontSize:30,
    textAlign:'center',
    marginTop:250
  }
})