import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.profil}></View>
        <Text style={styles.text}>User Name Anda</Text>
        <Text style={styles.text1}>User Email Anda</Text>
        <TouchableOpacity style={styles.colum}>
          <Pressable onPress={() => router.push("/screens/profildate")}>
          <Text style={styles.columText}>Data Diri Anda</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.colum}>
          <Text style={styles.columText}>Data Guru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.colum}>
          <Text style={styles.columText}>Data Kelas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.colum}>
          <Text style={styles.columText}>Data Jadwal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#007BFF',
  },
  section:{
    height:700,
    width:600,
    backgroundColor:'#D9D9D9',
    borderRadius:100,
    marginLeft:10,
    marginVertical:100
  },
  profil:{
    backgroundColor:'gray',
    height:150,
    width:150,
    borderRadius:20,
    marginVertical:-60,
    marginHorizontal:115,
  },
  text:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:115,
    marginTop:80
  },
  text1:{
    fontSize:20,
    fontWeight:'200',
    marginLeft:120,
  },
  colum:{
    backgroundColor:'white',
    height:50,
    width:350,
    borderRadius:20,
    marginLeft:15,
    marginTop:10
  },
  columText:{
    fontSize:20,
    textAlign:'center',
    marginTop:10
  },
})