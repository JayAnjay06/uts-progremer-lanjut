import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

export default function index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.colum}>
          {/* <View style={styles.containerColum}>
          <Text style={styles.containerText}>My School</Text>
          </View> */}
        </View>
        <TouchableOpacity style={styles.colums}>

        </TouchableOpacity>

        <View style={styles.content}>
          <TouchableOpacity style={styles.contentColum}></TouchableOpacity>
          <TouchableOpacity style={styles.contentColum}></TouchableOpacity>
          <TouchableOpacity style={styles.contentColum}></TouchableOpacity>
          <TouchableOpacity style={styles.contentColum}></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  colum: {
    padding: 100,
    backgroundColor: "grey",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  containerColum: {
    backgroundColor: "white",
    padding: 10,
  },
  // containerText:{
  //   fontSize:30,
  // },
  colums:{
    width:330,
    height:150,
    backgroundColor:'blue',
    borderRadius:25,
    marginHorizontal:'auto',
    marginVertical:-100
  },
  content:{
    padding:30,
    marginTop:100,
    flexDirection:'row',
    gap:20,
    justifyContent:"center"
  },
  contentColum:{
    height:70,
    width:70,
    backgroundColor:'blue',
    borderRadius:20
  }
});
