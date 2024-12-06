import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.columHeader}>
          <Text style={styles.textHeader}>SEKOLAH ID</Text>
        </View>
        <View>
          <Text style={styles.hello}>Hallo</Text>
        </View>
        <View>
          <Text style={styles.nama}>Nama Siswa</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.colum}>
        <TouchableOpacity style={styles.columbody}>
          <View style={styles.columStyle}>
          <Octicons name="checklist" size={50} color="black" 
          style={styles.icon}
          />
          </View>
          <Text style={styles.textColum}>Absensi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columbody}>
        <View style={styles.columStyle}>
        <MaterialCommunityIcons name="microsoft-sharepoint" size={50} color="black"
          style={styles.icon}
          />
          </View>
          <Text style={styles.textColum}>Nilai</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.colum}>
        <TouchableOpacity style={styles.columbody}>
        <View style={styles.columStyle}>
        <FontAwesome5 name="chalkboard-teacher" size={50} color="black"
          style={styles.icon}
          />
          </View>
          <Text style={styles.textColum}>Guru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.columbody}>
        <View style={styles.columStyle}>
        <FontAwesome5 name="clipboard-list" size={50} color="black"          style={styles.icon}
          />
          </View>
          <Text style={styles.textColum}>Jadwal</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height:200,
    width:"100%",
    backgroundColor:"#375E97",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
  },
  columHeader:{
    height:50,
    width:300,
    marginTop:30,
    marginHorizontal:'auto'
  },
  textHeader:{
    fontSize:20,
    fontWeight:"600",
    textAlign:"center",
    marginVertical:"auto",
    color:"#FFFFFF"
  },
  hello:{
    fontSize:15,
    color:"#FFFFFF",
    marginLeft:20
  },
  nama:{
    fontSize:20,
    color:"#FFFFFF",
    marginLeft:20
  },
  body:{
    width:"90%",
    marginTop:20,
    marginHorizontal:"auto",
    gap:20

  },
  colum:{
    marginHorizontal:"auto",
    flexDirection:"row",
    gap:20
  },
  columbody:{
    width:150,
    height:150,
    borderRadius:10,
    borderWidth:1
  },
  columStyle:{
    height:50,
    width:50,
    marginVertical:"auto",
    marginHorizontal:"auto"
  },
  icon:{
    marginVertical:"auto",
    marginHorizontal:"auto"
  },
  textColum:{
    fontSize:20,
    fontWeight:"700",
    textAlign:"center",
  }
})