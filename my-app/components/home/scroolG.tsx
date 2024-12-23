import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const ScrollGuru = () => {
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.frame}>
            <View style={styles.foto}></View>
            <View style={styles.frameColum}>
              <View style={styles.frameNama}>
                <Text style={styles.text}>Nama Guru</Text>
              </View>
              <View style={styles.frameGender}>
                <Text style={styles.text}>Mapel</Text>
              </View>
              <View style={styles.frameKelas}>
                <TouchableOpacity style={styles.hapus}>
                <AntDesign name="delete" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </ScrollView>
  )
}

export default ScrollGuru

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
      },
      frame:{
        padding:10,
        margin:10,
        borderWidth:0.6,
        borderRadius:10,
        flexDirection:'row'
      },
      foto:{
        width:100,
        height:100,
        backgroundColor:'white',
        borderRadius:100
      },
      frameColum:{
        padding:5,
        marginLeft:5,
        gap:2
      },
      frameNama:{
        height:30,
        width:200,
        justifyContent:'center'
      },
      frameGender:{
        height:30,
        width:200,
        justifyContent:'center'
      },
      frameKelas:{
        height:30,
        width:200,
        flexDirection:'row',
        justifyContent:'flex-end'
      },
      text:{
        fontSize:15,
        marginLeft:10
      },
      hapus:{
        height:30,
        width:25,
        backgroundColor:'red',
        justifyContent:'center',
        borderRadius:5
      },
})