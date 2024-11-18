import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const profildate = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.colum}>
          <Text style={styles.text}>Data Diri</Text>
          <View>
            <Text>alamat</Text>
            <Text>tempat tanggal lahir</Text>
            <Text>jenis kelamin</Text>
            <Text>kelas</Text>
            <Text>no telepon</Text>
            <Text>nama ayah</Text>
            <Text>nama ibu</Text>
          </View>
      </View>
    </ScrollView>
  )
}

export default profildate

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#007BFF',
  },
  colum:{
    height:500,
    width:300,
    backgroundColor:'white',
    borderRadius:20,
    marginHorizontal:'auto',
    marginVertical: 100
  },
  text:{
    fontSize:20,
    textAlign:'center'
  }
})